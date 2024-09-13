import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";

const PhoneNumberAuthPresenter: React.FC<PhoneNumberAuthProps> = ({
  sendOTP,
  verifyOTP,
  onSuccessfulVerification,
}) => {
  const [countryCode, setCountryCode] = useState("+1"); // Default to USA
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(""); // State for OTP input
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP was sent
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  ); // Error state for OTP verification

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

  const handleVerifyOTP = () => {
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
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="ion-padding"
        fullscreen
      >
        <div className="logo-container">Logo</div>
        {!otpSent ? (
          <>
            <h2 className="ion-text-center">Enter Your Phone Number</h2>
            <p className="ion-text-center subtitle">
              We will send you a 4-digit verification code
            </p>

            <IonItem>
              <IonLabel position="floating">Country</IonLabel>
              <IonSelect
                value={countryCode}
                onIonChange={(e) => setCountryCode(e.detail.value)}
              >
                <IonSelectOption value="+1">United States (+1)</IonSelectOption>
                {/* Add more country options here */}
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Mobile Number*</IonLabel>
              <IonInput
                type="tel"
                value={phoneNumber}
                placeholder="Enter mobile number"
                onIonInput={(e) => setPhoneNumber(e.detail.value!)}
              />
            </IonItem>

            <IonButton
              expand="block"
              shape="round"
              className="generate-otp-button"
              onClick={handleGenerateOTP}
            >
              Generate OTP
            </IonButton>
          </>
        ) : (
          <>
            <h2 className="ion-text-center">Enter the OTP</h2>
            <p className="ion-text-center subtitle">
              We have sent the verification code to {countryCode} {phoneNumber}
            </p>

            <IonItem>
              <IonLabel position="floating">OTP Code</IonLabel>
              <IonInput
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onIonInput={(e) => setOtp(e.detail.value!)}
              />
            </IonItem>

            {verificationError && (
              <p style={{ color: "red" }}>{verificationError}</p>
            )}

            <IonButton
              expand="block"
              shape="round"
              className="verify-otp-button"
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
