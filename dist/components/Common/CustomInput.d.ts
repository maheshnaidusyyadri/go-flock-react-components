import { default as React } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
interface CustomInputProps {
    readonly?: boolean;
    label?: string;
    placeholder?: string;
    fieldName: string;
    isRequired?: boolean;
    errors: FieldErrors;
    errorText?: string;
    register: UseFormRegister<any>;
    readOnly?: boolean;
    inputType?: any;
    defaultValue?: string;
    onInputChange?: (e: CustomEvent) => void;
}
declare const CustomInput: React.FC<CustomInputProps>;
export default CustomInput;
