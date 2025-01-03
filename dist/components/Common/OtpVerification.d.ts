import { default as React } from 'react';
type OtpVerificationProps = {
    control?: any;
    setValue?: (name: any, value: any) => void;
    errors?: any;
    fieldName?: any;
    isRequired?: boolean;
    phoneNumber?: any;
    sendOTP?: (phoneNumberWithCountryCode: string) => Promise<boolean>;
};
declare const OtpVerification: React.FC<OtpVerificationProps>;
export default OtpVerification;
