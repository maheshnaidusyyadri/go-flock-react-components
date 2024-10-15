import React from 'react';
import {  IonLabel, IonInput, IonText } from '@ionic/react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface CustomInputProps {
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

const CustomInput: React.FC<CustomInputProps> = ({
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
      {label && <IonLabel className='form-label'>{isRequired ? label + "*" : label}</IonLabel>}
      <IonInput
        placeholder={placeholder}
        //name={fieldName}
        {...register(fieldName, { 
          required: isRequired, 
          validate: (value) => (isRequired && !value ? errorText || `${fieldName} is required` : true),
          onChange: (e) => {
            if (onInputChange) {
              onInputChange(e);
            }
          },
        })}
        onIonInput={(e) => {
          if (e.detail.value !== undefined) {
            if (onInputChange) {
              onInputChange(e);
            }
            register(fieldName).onChange(e)
            
          }
        }}
        // onIonInput={(e)=>{
        //   if (e.detail.value !== undefined) {
        //     register(fieldName).onChange(e); // Call the register's onChange
        //   }
        //   console.log('onIonInput',e)
        //   reset()
        // }}
      />
       {errors?.[fieldName] && errors?.[fieldName].type && errors?.[fieldName].type === "required" &&
          <IonText color="danger" style={{ fontSize: 12 }}>{"* " + errorText + ' is required'}</IonText>}
    </>
  );
};

export default CustomInput;
