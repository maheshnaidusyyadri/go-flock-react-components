import React, { useState } from "react";
import "./PhoneNumberAuthPresenter.scss";

import {
  IonContent,
  IonPage,
  IonButton,
  IonLabel,
  IonText,
  IonGrid,
  IonCard,
  IonFooter,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import InvitozLogo from "../Common/Icons/Logo";
import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";
import OtpVerification from "../Common/OtpVerification";

const PhoneNumberAuthPresenter: React.FC<PhoneNumberAuthProps> = ({
  sendOTP,
  verifyOTP,
  onSuccessfulVerification,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();

  const handleGenerateOTP = () => {
    if (phoneNumber.trim()) {
      setSendingOtp(true);
      sendOTP(`${phoneNumber}`)
        .then(() => {
          setOtpSent(true); // OTP was sent successfully
          console.log(`Generating OTP for  ${phoneNumber}`);
          setSendingOtp(false);
        })
        .catch(() => {
          console.error("Failed to send OTP");
          setOtpSent(false);
          setSendingOtp(false);
        });
    } else {
      console.error("Phone number is empty");
    }
  };
  const onError = (error: any) => {
    console.log("onError", error);
  };
  const handleVerifyOTP = (formData: any) => {
    setVerifyingOtp(true);
    verifyOTP(formData.otp)
      .then(() => {
        onSuccessfulVerification();
        setVerifyingOtp(false);
      })
      .catch((error) => {
        console.error("Invalid OTP", error);
        setVerifyingOtp(false);
      });
  };

  return (
    <IonPage className="authpage">
      {!otpSent ? (
        <>
          <IonContent className="ion-padding">
            <IonGrid className="auth_sec ion-no-padding">
              <IonCard className="auth-cnt">
                {/* <IonImg className="logo" alt="Invitoz" src={Logo} /> */}
                <InvitozLogo />
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
          </IonContent>
          <IonFooter className="ion-padding">
            <IonButton
              disabled={sendingOtp}
              expand="block"
              shape="round"
              className="primary-btn"
              onClick={handleSubmit(handleGenerateOTP, onError)}
            >
              {sendingOtp ? "Sending OTP" : "Send OTP"}
            </IonButton>
          </IonFooter>
        </>
      ) : (
        <>
          <FormProvider {...methods}>
            <IonContent>
              <OtpVerification
                control={control}
                phoneNumber={phoneNumber}
                errors={errors}
                fieldName="otp"
                isRequired={true}
                sendOTP={sendOTP}
              />
            </IonContent>
            <IonFooter className="stickyFooter ion-padding">
              <IonButton
                disabled={verifyingOtp}
                expand="block"
                shape="round"
                className="primary-btn"
                onClick={handleSubmit(handleVerifyOTP)}
              >
                {verifyingOtp ? "Verifying OTP" : "Verify OTP"}
              </IonButton>
            </IonFooter>
          </FormProvider>
        </>
      )}
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
