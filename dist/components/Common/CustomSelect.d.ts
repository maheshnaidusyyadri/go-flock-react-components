import { default as React } from 'react';
import { FieldErrors, Control } from 'react-hook-form';
interface CustomSelectProps {
    label?: string;
    placeholder?: string;
    fieldName: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    isRequired?: boolean;
    errors: FieldErrors;
    errorText?: string;
    control: Control<any>;
    onIonChange?: (e: CustomEvent) => void;
    defaultValue?: string;
}
declare const CustomSelect: React.FC<CustomSelectProps>;
export default CustomSelect;
