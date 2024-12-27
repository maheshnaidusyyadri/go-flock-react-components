import React from "react";
import { IonLabel, IonText, IonTextarea } from "@ionic/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  fieldName: string;
  isRequired?: boolean;
  errors: FieldErrors;
  errorText?: string;
  register: UseFormRegister<any>; // Adjust the type based on your form data type
  readOnly?: boolean;
  type?: string; // Default type for input
  defaultValue?: string;
  onInputChange?: (e: CustomEvent) => void; // Optional input change handler
}

const CustomTextarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  fieldName,
  isRequired = false,
  errors,
  errorText,
  register,
  onInputChange,
}) => {
  return (
    <>
      {label && (
        <IonLabel className="form-label">
          {isRequired ? label + "*" : label}
        </IonLabel>
      )}
      <IonTextarea
        className="ion-textarea"
        rows={3}
        placeholder={placeholder}
        //name={fieldName}
        {...register(fieldName, {
          required: isRequired,
          validate: (value) =>
            isRequired && !value
              ? errorText || `${fieldName} is required`
              : true,
          onChange: (e) => {
            if (onInputChange) {
              onInputChange(e);
            }
          },
        })}
        onIonInput={(e) => {
          if (e.detail.value !== undefined) {
            register(fieldName).onChange(e);
          }
        }}
      />
      {errors?.[fieldName] &&
        errors?.[fieldName]?.type &&
        errors?.[fieldName]?.type === "required" && (
          <IonText
            color="danger"
            className="error"
            style={{ fontSize: 12 }}
          >
            {"* " + errorText + " is required"}
          </IonText>
        )}
    </>
  );
};

export default CustomTextarea;
