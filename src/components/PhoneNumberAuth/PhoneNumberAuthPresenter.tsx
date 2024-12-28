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
  IonRow,
  IonCol,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import InvitozLogo from "../Common/Icons/Logo";
import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";
import OtpVerification from "../Common/OtpVerification";
import CenteredColumn from "../Common/CenteredColumn";

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

  const goToHome = () => {
    window.location.href = "/introduction";
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

  const SendOtpButton = (
    <IonRow>
      <IonCol
        size="10"
        offset="1"
        sizeMd="6"
        offsetMd="3"
        sizeLg="4"
        offsetLg="4"
      >
        <IonButton
          disabled={sendingOtp}
          expand="block"
          shape="round"
          className="primary-btn"
          onClick={handleSubmit(handleGenerateOTP, onError)}
        >
          {sendingOtp ? "Sending OTP" : "Send OTP"}
        </IonButton>
      </IonCol>
    </IonRow>
  );

  const VerifyOtpButton = (
    <CenteredColumn>
      <IonButton
        disabled={verifyingOtp}
        expand="block"
        shape="round"
        className="primary-btn"
        onClick={handleSubmit(handleVerifyOTP)}
      >
        {verifyingOtp ? "Verifying OTP" : "Verify OTP"}
      </IonButton>
    </CenteredColumn>
  );

  return (
    <IonPage className="authpage">
      {!otpSent ? (
        <>
          <IonContent className="ion-padding">
            <IonGrid className="">
              <IonRow>
                <IonCol
                  size="10"
                  offset="1"
                  sizeMd="6"
                  offsetMd="3"
                  sizeLg="4"
                  offsetLg="4"
                >
                  <IonRow>
                    <IonCol
                      className="ion-margin-bottom ion-text-center"
                      onClick={() => goToHome()}
                    >
                      <InvitozLogo />
                    </IonCol>
                  </IonRow>
                  <IonRow className="">
                    <IonCol
                      className="ion-margin-bottom ion-text-center"
                      onClick={() => goToHome()}
                    >
                      <IonLabel className="auth-title">
                        Enter Your Phone Number
                      </IonLabel>
                      <IonText className="subtitle">
                        We will send you a 6-digit verification code
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow className="">
                    <IonCol className="ion-text-center">
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
                            // countryModal={(e: boolean) =>
                            //   console.log("ecountryModal", e)
                            // }
                          />
                        </div>
                      </FormProvider>
                    </IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
              <div className="ion-hide-md-down ion-padding-top">
                {SendOtpButton}
              </div>
            </IonGrid>
          </IonContent>
          <IonFooter className="ion-padding ion-hide-md-up">
            {SendOtpButton}
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
              <div className="ion-hide-md-down ion-padding-top">
                {VerifyOtpButton}
              </div>
            </IonContent>
            <IonFooter className="ion-hide-md-up ion-padding">
              {VerifyOtpButton}
            </IonFooter>
          </FormProvider>
        </>
      )}
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
