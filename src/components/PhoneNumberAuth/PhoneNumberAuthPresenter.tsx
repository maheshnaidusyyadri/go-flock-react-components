import React, { useState } from "react";
import "./PhoneNumberAuthPresenter.scss";

import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonList,
  IonSearchbar,
  IonModal,
} from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import Logo from "../../images/sign-logo.png";
import Mobile from "../../images/otp_varification.svg";
import Welcome from "../../images/welcome.svg";

import OtpInput from "./OtpInput";

type Country = {
  name: string;
  code: string;
  flag: string;
};

const PhoneNumberAuthPresenter: React.FC<PhoneNumberAuthProps> = ({
  sendOTP,
  verifyOTP,
  onSuccessfulVerification,
}) => {
  const [countryCode] = useState("+1"); // Default to USA
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive] = useState(false);
  const [isValidate] = useState(false);
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

    //  setIsActive((prev) => !prev);
  };

  const countries: Country[] = [
    {
      name: "United States",
      code: "+1",
      flag: "https://flagcdn.com/w320/us.png",
    },
    { name: "India", code: "+91", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Andorra", code: "+376", flag: "https://flagcdn.com/w320/ad.png" },
    {
      name: "United Arab Emirates",
      code: "+971",
      flag: "https://flagcdn.com/w320/ae.png",
    },
    {
      name: "Antigua and Barbuda",
      code: "+1-268",
      flag: "https://flagcdn.com/w320/ag.png",
    },
    { name: "Anguilla", code: "+1", flag: "https://flagcdn.com/w320/ai.png" },
    { name: "Armenia", code: "+374", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Angola", code: "+244", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Argentina", code: "+54", flag: "https://flagcdn.com/w320/ar.png" },
    {
      name: "American Samoa",
      code: "+1684",
      flag: "https://flagcdn.com/w320/as.png",
    },
    { name: "Austria", code: "+43", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Australia", code: "+61", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Åland", code: "+358", flag: "https://flagcdn.com/w320/ax.png" },
    // Add more countries as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default selected country
  const [isListOpen, setIsListOpen] = useState(false); // Toggle list visibility

  // Filter countries based on the search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle selecting a country
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsListOpen(false); // Close the list after selection
  };

  // OTP Varification

  // const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log("Current OTP:", value); // For debugging or validation
  };

  return (
    <IonPage className="authpage">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Sign in</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent
        className={`generate_cnt ion-padding ${isActive ? "" : "active"}`}
        fullscreen
        hidden
      >
        {!otpSent ? (
          <>
            <div className="auth_sec">
              <div className="auth_cnt">
                <img
                  className="logo"
                  alt="Go Flock"
                  src={Logo}
                />
                <h2 className="auth-title">Enter Your Phone Number</h2>
                <p className="subtitle">
                  We will send you a 6-digit verification code
                </p>
              </div>
              {/* <IonItem>
              <IonLabel position="floating">Country</IonLabel>
              <IonSelect
                value={countryCode}
                onIonChange={(e) => setCountryCode(e.detail.value)}
              >
                <IonSelectOption value="+1">United States (+1)</IonSelectOption>
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
            </IonButton> */}
              <div className="country_selection">
                <IonContent>
                  {/* Display the selected country field that toggles the list */}
                  <label>Country</label>
                  <IonItem
                    button
                    onClick={() => setIsListOpen(!isListOpen)}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          marginRight: "5px",
                          objectFit: "cover",
                        }}
                      />
                      <IonLabel>
                        {selectedCountry.name} ({selectedCountry.code})
                      </IonLabel>
                    </div>
                    <IonIcon
                      icon={chevronDownOutline}
                      slot="end"
                    />
                  </IonItem>

                  {/* Modal that acts as the dropdown list */}
                  <IonModal
                    isOpen={isListOpen}
                    onDidDismiss={() => setIsListOpen(false)}
                    className="countries_list"
                  >
                    <IonContent>
                      <h4 className="country-label">Country codes</h4>
                      <IonSearchbar
                        placeholder="Search country"
                        value={searchTerm}
                        onIonInput={(e) => setSearchTerm(e.detail.value!)}
                      />
                      <IonList>
                        {filteredCountries.map((country) => (
                          <IonItem
                            button
                            key={country.code}
                            onClick={() => handleCountrySelect(country)}
                          >
                            <img
                              src={country.flag}
                              alt={country.name}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                marginRight: "5px",
                                objectFit: "cover",
                              }}
                            />
                            <IonLabel>
                              {country.name} ({country.code})
                            </IonLabel>
                          </IonItem>
                        ))}
                      </IonList>
                    </IonContent>
                  </IonModal>
                </IonContent>
              </div>
              <div className="form-group">
                <IonInput
                  label="Mobile Number*"
                  labelPlacement="stacked"
                  type="tel"
                  value={phoneNumber}
                  placeholder="Enter mobile number"
                  onIonInput={(e) => setPhoneNumber(e.detail.value!)}
                ></IonInput>
              </div>
            </div>
            <IonButton
              expand="block"
              shape="round"
              className="primary-btn"
              onClick={handleGenerateOTP}
            >
              Generate OTP
            </IonButton>
          </>
        ) : (
          <>
            <div className="varification_sec">
              <div className="auth_cnt">
                <h2 className="auth-title">Verify Account</h2>
                <img
                  className="mobile"
                  alt="Go Flock"
                  src={Mobile}
                />
                <h6>Mobile Verification</h6>
                <p className="subtitle">
                  To continue, please enter the OTP we just sent to{" "}
                  {countryCode} {phoneNumber}
                </p>
                {/* <p className="ion-text-center subtitle">
              We have sent the verification code to {countryCode} {phoneNumber}
            </p> */}

                {/* <IonItem>
              <IonLabel position="floating">OTP Code</IonLabel>
              <IonInput
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onIonInput={(e) => setOtp(e.detail.value!)}
              />
            </IonItem> */}

                <OtpInput
                  length={6}
                  onChange={handleOtpChange}
                />

                {verificationError && (
                  <p className="otp_error">{verificationError}</p>
                )}
                <p className="otp_resend">
                  Didn't receive the code? <a>Resend</a>
                </p>
              </div>
            </div>
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
      {/* <IonContent
        className={`validate_cnt ion-padding ${isActive ? 'active' : ''} ${isValidate ? 'validated' : ''}`}
        fullscreen

      >
        <div className="varification_sec">
          <div className="auth_cnt">
            <h2 className="auth-title">Verify Account</h2>
            <img className="mobile" alt="Go Flock" src={Mobile} />
            <h6>Mobile Verification</h6>
            <p className="subtitle">
              To continue, please enter the OTP we just sent to ********66
            </p>
          </div>
          <OtpInput length={4} onChange={handleOtpChange} />

        </div>
        <IonButton
          expand="block"
          shape="round"
          className="primary-btn"
          onClick={handleValidateOTP}
        >
          Verify & Process
        </IonButton>
      </IonContent> */}
      <IonContent
        className={`onboarding ion-padding ${isValidate ? "active" : ""}`}
        fullscreen
      >
        <div className="onboarding_sec">
          <div className="auth_cnt">
            <img
              className="welcome"
              alt="Welcome to Go Flock"
              src={Welcome}
            />
            <h2 className="auth-title">Welcome</h2>
            <p className="subtitle">
              Welcome aboard! Your journey with our Application begins now.
            </p>
          </div>
        </div>
        <IonButton
          expand="block"
          shape="round"
          className="primary-btn"
        >
          Get Started
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
