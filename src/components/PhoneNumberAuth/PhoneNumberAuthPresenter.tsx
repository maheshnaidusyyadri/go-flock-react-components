import React, { useState } from "react";
import "./PhoneNumberAuthPresenter.scss";

import {
  IonContent,
  IonPage,
  IonButton,
  IonLabel,
  IonText,
  IonImg,
  IonGrid,
  IonCard,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import Logo from "../../images/sign-logo.png";
import Mobile from "../../images/otp_varification.svg";

import OtpInput from "./OtpInput";
import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";

const PhoneNumberAuthPresenter: React.FC<PhoneNumberAuthProps> = ({
  sendOTP,
  verifyOTP,
  onSuccessfulVerification,
}) => {
  const [countryCode, setCountryCode] = useState(""); // Default to USA
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive] = useState(false);
  //const [isValidate] = useState(false);
  const [otp, setOtp] = useState(""); // State for OTP input
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP was sent
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  ); // Error state for OTP verification
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
  const handleGenerateOTP = () => {
    if (phoneNumber.trim()) {
      sendOTP(`${countryCode}${phoneNumber}`)
        .then(() => {
          setOtpSent(true); // OTP was sent successfully
          console.log(`Generating OTP for ${countryCode} ${phoneNumber}`);
        })
        .catch(() => {
          console.error("Failed to send OTP");
          setOtpSent(false);
        });
    } else {
      console.error("Phone number is empty");
    }
  };
  const onError = (error: any) => {
    console.log("onError", error);
  };

  const handleVerifyOTP = () => {
    setCountryCode("");
    if (otp.trim()) {
      verifyOTP(`${countryCode}${phoneNumber}`, otp)
        .then(() => {
          console.log("OTP verified successfully");
          setVerificationError(null);
          onSuccessfulVerification();
        })
        .catch((error) => {
          console.error("Invalid OTP", error);
          setVerificationError("Invalid OTP. Please try again.");
        });
    } else {
      console.error("OTP is empty");
      setVerificationError("OTP is required");
    }

    //  setIsActive((prev) => !prev);
  };

  const resendOTP = () => {
    alert(
      `OTP has been sent successfully to your registered number: ${countryCode} ${phoneNumber}`
    );
  };

  // OTP Varification

  // const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (value: string) => {
    setVerificationError(null);
    setOtp(value);
    console.log("Current OTP:", value); // For debugging or validation
  };

  return (
    <IonPage className="authpage">
      <IonContent
        className={`generate_cnt ion-padding ${isActive ? "" : "active"}`}
        fullscreen
        hidden
      >
        {!otpSent ? (
          <>
            <IonGrid className="auth_sec">
              <IonCard className="auth_cnt">
                <IonImg className="logo" alt="Go Flock" src={Logo} />
                <IonLabel className="auth-title">
                  Enter Your Phone Number
                </IonLabel>
                <IonText className="subtitle">
                  We will send you a 6-digit verification code
                </IonText>
              </IonCard>
              <FormProvider {...methods}>
                <div className="form-group">
                  <CustomPhoneNumber
                    control={control}
                    fieldName="phone"
                    label="Phone Number"
                    isRequired={true}
                    errors={errors}
                    register={register}
                    errorText={"Phone Number"}
                    onPhoneChange={(e: any) => setPhoneNumber(e)}
                  />
                </div>
              </FormProvider>
            </IonGrid>
            <IonButton
              expand="block"
              shape="round"
              className="primary-btn"
              //onClick={handleGenerateOTP}
              onClick={handleSubmit(handleGenerateOTP, onError)}
            >
              Generate OTP
            </IonButton>
          </>
        ) : (
          <>
            <IonGrid className="varification_sec">
              <IonCard className="auth_cnt">
                <IonLabel className="auth-title">Verify Account</IonLabel>
                <IonImg className="mobile" alt="Go Flock" src={Mobile} />
                <IonText class="vatification-title">
                  Mobile Verification
                </IonText>
                <IonText className="subtitle">
                  To continue, please enter the OTP we just sent to{" "}
                  <IonText className="mobile_number">
                    {countryCode} {phoneNumber}
                  </IonText>
                </IonText>
                <OtpInput length={6} onChange={handleOtpChange} />

                {verificationError && (
                  <IonText className="otp_error">{verificationError}</IonText>
                )}
                <IonText className="otp_resend" onClick={resendOTP}>
                  Didn't receive the code? <a>Resend</a>
                </IonText>
              </IonCard>
            </IonGrid>
            <IonButton
              expand="block"
              shape="round"
              className="primary-btn"
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
