import React, { useEffect, useState } from "react";
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
import { PhoneNumberAuthProps } from "@goflock/types/";

const PhoneNumberAuth: React.FC<PhoneNumberAuthProps> = (
  phoneNumberAuthProps
) => {
  const [countryCode, setCountryCode] = useState("+1"); // Default to USA
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log("Component mounted" + countryCode);
  }, []);
  const handleGenerateOTP = () => {
    // Implement OTP generation logic here
    phoneNumberAuthProps.sendOTP(`${countryCode}${phoneNumber}`);
    console.log(`Generating OTP for ${countryCode} ${phoneNumber}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle> {/* Empty header */}
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="ion-padding"
        fullscreen
      >
        <div className="logo-container">Logo.</div>
        <h2 className="ion-text-center">Enter Your Phone Number</h2>
        <p className="ion-text-center subtitle">
          We will send you the 4 digit verification code
        </p>

        <IonItem>
          <IonLabel position="floating">Country</IonLabel>
          <IonSelect
            value={countryCode}
            onIonChange={(e) => setCountryCode(e.detail.value)}
          >
            <IonSelectOption value="+1">
              <img
                src="/assets/flags/us.png"
                alt="US Flag"
                className="flag"
              />
              United States (+1)
            </IonSelectOption>
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
      </IonContent>
    </IonPage>
  );
};

export default PhoneNumberAuth;
