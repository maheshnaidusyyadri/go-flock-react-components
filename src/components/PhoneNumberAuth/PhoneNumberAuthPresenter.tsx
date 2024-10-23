import React, { useState } from "react";
import "./PhoneNumberAuthPresenter.scss";

import {
  IonContent,
  IonPage,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonSearchbar,
  IonModal,
  IonText,
  IonImg,
  IonGrid,
  IonCard,
} from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { PhoneNumberAuthProps } from "@goflock/types/src/index";
import Logo from "../../images/sign-logo.png";
import Mobile from "../../images/otp_varification.svg";

import OtpInput from "./OtpInput";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
//import CustomPhoneNumber from "../Common/CustomPhone";

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
  const [countryCode, setCountryCode] = useState("+1"); // Default to USA
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive] = useState(false);
  //const [isValidate] = useState(false);
  const [otp, setOtp] = useState(""); // State for OTP input
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP was sent
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  ); // Error state for OTP verification
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    // control,
  } = useForm();
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
  const onError = (error: any) => {
    console.log("onError", error);
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
      setVerificationError("OTP is required");
    }

    //  setIsActive((prev) => !prev);
  };

  const resendOTP = () => {
    alert(
      `OTP has been sent successfully to your registered number: ${countryCode} ${phoneNumber}`
    );
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
    {
      name: "Anguilla",
      code: "+1 264",
      flag: "https://flagcdn.com/w320/ai.png",
    },
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
    setCountryCode(country.code);
    setSelectedCountry(country);
    setIsListOpen(false); // Close the list after selection
  };

  // OTP Varification

  // const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (value: string) => {
    setVerificationError(null);
    setOtp(value);
    console.log("Current OTP:", value); // For debugging or validation
  };

  return (
    <IonPage className="authpage">
      <IonContent
        scrollY={false}
        className={`generate_cnt ion-padding ${isActive ? "" : "active"}`}
        fullscreen
        hidden
      >
        {!otpSent ? (
          <>
            <IonGrid className="auth_sec">
              <IonCard className="auth_cnt">
                <IonImg className="logo" alt="Go Flock" src={Logo} />
                <IonLabel className="auth-title">
                  Enter Your Phone Number
                </IonLabel>
                <IonText className="subtitle">
                  We will send you a 6-digit verification code
                </IonText>
              </IonCard>
              <FormProvider {...methods}>
                <div className="country_selection">
                  <IonContent scrollY={false}>
                    {/* Display the selected country field that toggles the list */}
                    <label>Country</label>
                    <IonItem button onClick={() => setIsListOpen(!isListOpen)}>
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
                        className="ion-icon"
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
                  <CustomInput
                    placeholder={"Enter mobile number"}
                    label={"Mobile Number"}
                    fieldName={"mobile"}
                    isRequired={true}
                    errors={errors}
                    errorText={"Mobile Number"}
                    register={register}
                    onInputChange={(e) => setPhoneNumber(e.detail.value!)}
                  />
                </div>
                {/* <div className="form-group">
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
                </div> */}
              </FormProvider>
            </IonGrid>
            <IonButton
              expand="block"
              shape="round"
              className="primary-btn"
              //onClick={handleGenerateOTP}
              onClick={handleSubmit(handleGenerateOTP, onError)}
            >
              Generate OTP
            </IonButton>
          </>
        ) : (
          <>
            <IonGrid className="varification_sec">
              <IonCard className="auth_cnt">
                <IonLabel className="auth-title">Verify Account</IonLabel>
                <IonImg className="mobile" alt="Go Flock" src={Mobile} />
                <IonText class="vatification-title">
                  Mobile Verification
                </IonText>
                <IonText className="subtitle">
                  To continue, please enter the OTP we just sent to{" "}
                  <IonText className="mobile_number">
                    {countryCode} {phoneNumber}
                  </IonText>
                </IonText>
                <OtpInput length={6} onChange={handleOtpChange} />

                {verificationError && (
                  <IonText className="otp_error">{verificationError}</IonText>
                )}
                <IonText className="otp_resend" onClick={resendOTP}>
                  Didn't receive the code? <a>Resend</a>
                </IonText>
              </IonCard>
            </IonGrid>
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
    </IonPage>
  );
};

export default PhoneNumberAuthPresenter;
