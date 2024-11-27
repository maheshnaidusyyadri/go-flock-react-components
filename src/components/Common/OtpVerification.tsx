import React from "react";
import OtpInput from "react-otp-input";
import { Controller } from "react-hook-form";
import { IonCard, IonGrid, IonLabel, IonText } from "@ionic/react";
import Mobile from "./Icons/Mobile";

type OtpVerificationProps = {
  control?: any;
  setValue?: (name: any, value: any) => void;
  errors?: any;
  fieldName?: any;
  isRequired?: boolean;
  phoneNumber?: any;
};

const OtpVerification: React.FC<OtpVerificationProps> = ({
  control,
  //setValue,
  errors,
  fieldName,
  isRequired = false,
  phoneNumber,
}) => {
  const resendOTP = () => {
    alert(
      `OTP has been sent successfully to your registered number: ${""} ${phoneNumber}`
    );
  };
  return (
    <IonGrid className="varification-sec">
      <IonCard className="auth-cnt ion-no-margin">
        <IonLabel className="auth-title">Verify Account</IonLabel>
        <Mobile />
        <IonText className="vatification-title">Mobile Verification</IonText>
        <IonText className="subtitle">
          To continue, please enter the OTP we just sent to{" "}
          <IonText className="mobile-number">
            {phoneNumber ? "+" + phoneNumber : ""}
          </IonText>
        </IonText>
        <IonCard className="otp-fields">
          <Controller
            name={fieldName}
            control={control}
            rules={{
              required: isRequired ? "Please enter a complete OTP." : false,
              minLength: {
                value: 6,
                message: "OTP must be 6 digits.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <OtpInput
                  value={value}
                  onChange={(otp) => {
                    const numericOtp = otp.replace(/\D/g, "");
                    onChange(numericOtp);
                  }}
                  numInputs={6}
                  renderInput={(props) => (
                    <input
                      {...props}
                      type="number"
                      inputMode="numeric"
                      pattern="\d*"
                      style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "20px",
                        border: "0px solid #ccc",
                        borderRadius: "0px",
                        margin: "0 5px",
                      }}
                    />
                  )}
                />
                {errors[fieldName] && (
                  <IonText className="otp_error">
                    {errors[fieldName].message}
                  </IonText>
                )}
              </>
            )}
          />
        </IonCard>
        <IonText className="otp-resend" onClick={resendOTP}>
          Didn't receive the code? <a>Resend</a>
        </IonText>
      </IonCard>
    </IonGrid>
  );
};

export default OtpVerification;
