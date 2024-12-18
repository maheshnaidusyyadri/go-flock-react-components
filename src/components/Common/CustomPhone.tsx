import { IonGrid, IonLabel, IonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  UseFormRegister,
  FieldErrors,
  Controller,
  Control,
} from "react-hook-form";

interface CustomPhoneNumberProps {
  fieldName: string;
  label?: string;
  errorText?: string;
  isRequired?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<any>;
  control: Control<any>;
  onPhoneChange?: (e: CustomEvent) => void;
  countryModal?: (e: boolean) => void;
}

const CustomPhoneNumber: React.FC<CustomPhoneNumberProps> = ({
  fieldName,
  isRequired = false,
  errors,
  errorText,
  control,
  onPhoneChange,
  countryModal,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<any>({
    name: "United States",
    dialCode: "1",
    countryCode: "us",
    format: "+. (...) ...-....",
  }); // To store selected country info
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const validateField = (value: string) => {
    const fullNumber = `+${value}`; // Prepend '+' for validation
    const valid = isValidPhoneNumber(fullNumber);
    if (valid) {
      return true;
    }
    return `${errorText || fieldName} is not a valid number`;
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const dropdown = document.querySelector(".flag-dropdown");
      if (dropdown && dropdown.contains(event.target as Node)) {
        // If click happens inside the dropdown
        if (dropdown.classList.contains("open")) {
          setIsCountryOpen(true);
          if (countryModal) {
            countryModal(true);
          }
        } else {
          setIsCountryOpen(false);
          if (countryModal) {
            countryModal(false);
          }
        }
      } else {
        // If click happens outside the dropdown
        setIsCountryOpen(false);
        console.log("close");
        if (countryModal) {
          countryModal(false);
        }
      }
    };
    // Add event listener to document
    document.addEventListener("click", handleClick);
    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <IonGrid className="contact-section">
      {isCountryOpen && <span className="country-overlay"></span>}
      <IonLabel class="field-label">Country*</IonLabel>
      <IonLabel class="field-label phonenumber">Phone Number*</IonLabel>

      {selectedCountry && (
        <IonText className="countryname" color="black">
          {selectedCountry.name} ({"+" + selectedCountry.dialCode})
        </IonText>
      )}
      <Controller
        name={fieldName}
        control={control}
        rules={{
          required: isRequired
            ? `${errorText || fieldName} is required`
            : false,
          validate: validateField,
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            country="us"
            value={value} // Ensure the input is controlled
            placeholder="Enter phone number"
            preferredCountries={["us"]}
            enableSearch={true}
            countryCodeEditable={false}
            onChange={(phone: any, country) => {
              setSelectedCountry(country);
              onChange(phone);
              if (phone && onPhoneChange) {
                onPhoneChange(phone);
              }
            }}
          />
        )}
      />
      {/* Display error messages */}
      {errors?.[fieldName] && (
        <IonText color="danger" className="error" style={{ fontSize: 12 }}>
          {"* " + errors[fieldName]?.message}
        </IonText>
      )}
    </IonGrid>
  );
};

export default CustomPhoneNumber;
