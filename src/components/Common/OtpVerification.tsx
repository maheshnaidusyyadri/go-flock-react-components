import React from "react";
import OtpInput from "react-otp-input";
import { Controller } from "react-hook-form";
import { IonCard, IonGrid, IonImg, IonLabel, IonText } from "@ionic/react";
import Mobile from "../../images/otp_varification.svg";

type OtpVerificationProps = {
  control?: any; // Replace with the appropriate type if available
  setValue?: (name: any, value: any) => void;
  errors?: any; // Replace with FieldErrors if using react-hook-form types
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
  return (
    <IonGrid className="varification_sec">
      <IonCard className="auth_cnt">
        <IonLabel className="auth-title">Verify Account</IonLabel>
        <IonImg className="mobile" alt="Go Flock" src={Mobile} />
        <IonText className="vatification-title">Mobile Verification</IonText>
        <IonText className="subtitle">
          To continue, please enter the OTP we just sent to{" "}
          <IonText className="mobile_number">
            {phoneNumber ? "+" + phoneNumber : ""}
          </IonText>
        </IonText>
        <IonCard className="otp_fields">
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
                    onChange(otp);
                    if (otp.length === 6) {
                      //setValue(fieldName, otp);
                    }
                  }}
                  numInputs={6}
                  renderInput={(props) => (
                    <input
                      {...props}
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
        <IonText className="otp_resend">
          Didn't receive the code? <a>Resend</a>
        </IonText>
      </IonCard>
    </IonGrid>
  );
};

export default OtpVerification;