import React, { useRef } from "react";
import {
  IonGrid,
  IonCard,
  IonLabel,
  IonImg,
  IonText,
  IonInput,
} from "@ionic/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Mobile from "../../images/otp_varification.svg";

type VerificationSectionProps = {
  length?: number;
  countryCode?: string;
  phoneNumber?: string;
  verificationError?: string | null;
  handleOtpChange?: (otp: string) => void;
  handleVerifyOTP?: () => void;
  fieldName: string;
  isRequired?: boolean;
  errorText?: string;
  errors: FieldErrors;
  register: UseFormRegister<any>;
};

const VerificationSection: React.FC<VerificationSectionProps> = ({
  phoneNumber,
  length = 1,
  fieldName,
  isRequired = false,
  errors,
  errorText,
  register,
}) => {
  const inputsRef = useRef<(HTMLIonInputElement | null)[]>([]);
  // Focus the next input on key entry
  const handleInputChange = (e: CustomEvent, index: number) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    if (value.length === 1 && index < length - 1) {
      inputsRef.current[index + 1]?.setFocus();
    }
    if (value.length === 0 && index > 0) {
      inputsRef.current[index - 1]?.setFocus();
    }
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === length) {
      pastedData.split("").forEach((char, i) => {
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = char;
        }
      });
      inputsRef.current[length - 1]?.setFocus();
      e.preventDefault();
    }
  };
  // Focus on the previous input on backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLIonInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !inputsRef.current[index]?.value &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.setFocus();
    }
  };
  const resendOTP = () => {
    alert(
      `OTP has been sent successfully to your registered number:  ${phoneNumber}`
    );
  };
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
        <div className="otp_section">
          <div className="otp-input-container">
            {Array.from({ length }).map((_, index) => (
              <IonInput
                key={index}
                type="tel"
                maxlength={4}
                // ref={(el) => (inputsRef.current[index] = el)}
                className="otp-input"
                onIonInput={(e) => {
                  handleInputChange(e, index);
                  if (e.detail.value !== undefined) {
                    register(`${fieldName}[${index}]`).onChange(e);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={(e: any) => handlePaste(e)}
                inputmode="numeric"
                {...register(fieldName, {
                  required: isRequired,
                  validate: (value) =>
                    isRequired && !value
                      ? errorText || `${fieldName} is required`
                      : true,
                  onChange: (e) => {
                    console.log(e);
                  },
                })}
              />
            ))}
            {errors?.[fieldName] &&
              errors?.[fieldName].type &&
              errors?.[fieldName].type === "required" && (
                <IonText class="error" color="danger" style={{ fontSize: 12 }}>
                  {"* " + errorText + " is required"}
                </IonText>
              )}
          </div>
        </div>
        <IonText className="otp_resend" onClick={resendOTP}>
          Didn't receive the code? <a>Resend</a>
        </IonText>
      </IonCard>
    </IonGrid>
  );
};

export default VerificationSection;
