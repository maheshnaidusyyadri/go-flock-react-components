import { default as React } from 'react';
interface CustomStartDateProps {
    control: any;
    fieldName: string;
    disabled?: boolean;
    minDate?: string;
    isRequired?: boolean;
    errorText?: string;
    errors: any;
    label: any;
    defaultValue?: any;
    onDateChange?: (e: CustomEvent) => void;
    className: any;
    formatOptions: any;
    presentation: any;
    placeHolder: string;
    startTime?: string;
    onIonFocus?: (e: CustomEvent) => void;
}
declare const CustomDateTime: React.FC<CustomStartDateProps>;
export default CustomDateTime;
