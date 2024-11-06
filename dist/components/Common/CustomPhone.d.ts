import { default as React } from 'react';
import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
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
declare const CustomPhoneNumber: React.FC<CustomPhoneNumberProps>;
export default CustomPhoneNumber;
