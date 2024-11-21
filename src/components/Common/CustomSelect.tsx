import React from "react";
import { IonLabel, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import { Controller, FieldErrors, Control } from "react-hook-form";

interface CustomSelectProps {
  label?: string;
  placeholder?: string;
  fieldName: string;
  options: Array<{ value: string; label: string }>; // Array of select options
  isRequired?: boolean;
  errors: FieldErrors;
  errorText?: string;
  control: Control<any>; // Control object from react-hook-form
  onIonChange?: (e: CustomEvent) => void; // Optional select change handler
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  placeholder,
  fieldName,
  options,
  isRequired = false,
  errors,
  errorText,
  control,
  onIonChange,
  defaultValue,
}) => {
  return (
    <>
      {label && (
        <IonLabel className="form-label">
          {isRequired ? label + "*" : label}
        </IonLabel>
      )}
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: isRequired }}
        render={({ field: { onChange, value } }) => (
          <IonSelect
            value={value} // Controlled value for the select
            className="ion-select"
            interface="action-sheet"
            placeholder={placeholder}
            onIonChange={(e) => {
              const selectedValue = e.detail.value;
              onChange(selectedValue); // Update the controller's value
              // Call the custom onIonChange if provided
              if (onIonChange) {
                onIonChange(e);
              }
            }}
          >
            {options.map((option) => (
              <IonSelectOption key={option.value} value={option.value}>
                {option.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        )}
      />

      {errors?.[fieldName]?.type === "required" && (
        <IonText color="danger" className="error" style={{ fontSize: 12 }}>
          {"* " + errorText + " is required"}
        </IonText>
      )}
    </>
  );
};

export default CustomSelect;
