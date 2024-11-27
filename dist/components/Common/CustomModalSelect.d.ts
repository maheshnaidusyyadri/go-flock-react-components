import { default as React } from 'react';
import { FieldErrors, Control, UseFormRegister, UseFormSetValue, UseFormClearErrors } from 'react-hook-form';
interface CustomSelectProps {
    label?: string;
    placeholder?: string;
    fieldName: string;
    options: Array<any>;
    isRequired?: boolean;
    errors: FieldErrors;
    errorText?: string;
    control: Control<any>;
    defaultValue?: string;
    register?: UseFormRegister<any>;
    setValue: UseFormSetValue<any>;
    clearErrors: UseFormClearErrors<any>;
}
declare const CustomModalSelect: React.FC<CustomSelectProps>;
export default CustomModalSelect;
