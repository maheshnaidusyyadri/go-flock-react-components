import { default as React } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
interface TextareaProps {
    label?: string;
    placeholder?: string;
    fieldName: string;
    isRequired?: boolean;
    errors: FieldErrors;
    errorText?: string;
    register: UseFormRegister<any>;
    readOnly?: boolean;
    type?: string;
    defaultValue?: string;
    onInputChange?: (e: CustomEvent) => void;
}
declare const CustomTextarea: React.FC<TextareaProps>;
export default CustomTextarea;
