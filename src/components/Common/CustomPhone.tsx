import { IonGrid, IonLabel, IonText } from "@ionic/react";
import React, { useState } from "react";
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
}

const CustomPhoneNumber: React.FC<CustomPhoneNumberProps> = ({
  fieldName,
  label,
  isRequired = false,
  errors,
  errorText,
  control,
  onPhoneChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null); // To store selected country info

  const validateField = (value: string) => {
    const fullNumber = `+${value}`; // Prepend '+' for validation
    const valid = isValidPhoneNumber(fullNumber);
    if (valid) {
      return true;
    }
    return `${errorText || fieldName} is not a valid number`;
  };

  return (
    <IonGrid className="auth_cnt">
      {label && (
        <IonLabel class="field-label">
          {isRequired ? `${label}*` : label}
        </IonLabel>
      )}
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
            country={"us"}
            value={value} // Ensure the input is controlled
            placeholder="Enter phone number"
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