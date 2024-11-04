import React, { useRef } from "react";
import {
  IonGrid,
  IonCard,
  IonLabel,
  IonImg,
  IonText,
  IonButton,
  IonInput,
} from "@ionic/react";

import Mobile from "../../images/otp_varification.svg";
type VerificationSectionProps = {
  countryCode?: string;
  phoneNumber?: string;
  verificationError?: string | null;
  handleOtpChange?: (otp: string) => void;
  resendOTP?: () => void;
  handleVerifyOTP?: () => void;
};

const VerificationSection: React.FC<VerificationSectionProps> = ({
  countryCode,
  phoneNumber,
  verificationError,
  handleOtpChange,
  resendOTP,
  handleVerifyOTP,
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

  // Collect all input values and pass to the parent component
  // const handleOtpChange = () => {
  //   const otpValue = inputsRef.current.map(input => input?.value || '').join('');
  //   if (onChange) {
  //     onChange(otpValue);
  //   }
  // };
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
  return (
    <IonGrid className="varification_sec">
      <IonCard className="auth_cnt">
        <IonLabel className="auth-title">Verify Account</IonLabel>
        <IonImg className="mobile" alt="Go Flock" src={Mobile} />
        <IonText className="vatification-title">Mobile Verification</IonText>
        <IonText className="subtitle">
          To continue, please enter the OTP we just sent to{" "}
          <IonText className="mobile_number">
            {countryCode} {phoneNumber}
          </IonText>
        </IonText>
        <div className="otp_section">
          <div className="otp-input-container">
            {Array.from({ length }).map((_, index) => (
              <IonInput
                key={index}
                type="tel"
                maxlength={1}
                ref={(el) => (inputsRef.current[index] = el)}
                className="otp-input"
                onIonInput={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={(e: any) => handlePaste(e)}
                inputmode="numeric"
              />
            ))}
          </div>
        </div>

        <IonText className="otp_resend" onClick={resendOTP}>
          Didn't receive the code? <a>Resend</a>
        </IonText>
      </IonCard>
      <IonButton
        expand="block"
        shape="round"
        className="primary-btn"
        onClick={handleVerifyOTP}
      >
        Verify OTP
      </IonButton>
    </IonGrid>
  );
};

export default VerificationSection;
