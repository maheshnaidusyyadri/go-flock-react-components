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
  IonFooter,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import Logo from "../../images/invitoz_dark.svg";
import { FormProvider, useForm } from "react-hook-form";
import CustomPhoneNumber from "../Common/CustomPhone";
import OtpVerification from "../Common/OtpVerification";

const PhoneNumberAuthPresenter: React.FC<PhoneNumberAuthProps> = ({
  sendOTP,
  verifyOTP,
  onSuccessfulVerification,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
  const handleGenerateOTP = () => {
    if (phoneNumber.trim()) {
      sendOTP(`${phoneNumber}`)
        .then(() => {
          setOtpSent(true); // OTP was sent successfully
          console.log(`Generating OTP for  ${phoneNumber}`);
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
  const handleVerifyOTP = (formData: any) => {
    verifyOTP(formData.otp)
      .then(() => {
        onSuccessfulVerification();
      })
      .catch((error) => {
        console.error("Invalid OTP", error);
      });
  };

  return (
    <IonPage className="authpage">
      {!otpSent ? (
        <>
          <IonContent className="ion-padding">
            <IonGrid className="auth_sec ion-no-padding">
              <IonCard className="auth_cnt">
                <IonImg className="logo" alt="Invitoz" src={Logo} />
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
              expand="block"
              shape="round"
              className="primary-btn"
              onClick={handleSubmit(handleGenerateOTP, onError)}
            >
              Generate OTP
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
              />
            </IonContent>
            <IonFooter className="stickyFooter">
              <IonButton
                expand="block"
                shape="round"
                className="primary-btn"
                onClick={handleSubmit(handleVerifyOTP)}
              >
                {"Verify OTP"}
              </IonButton>
            </IonFooter>
          </FormProvider>
        </>
      )}
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
