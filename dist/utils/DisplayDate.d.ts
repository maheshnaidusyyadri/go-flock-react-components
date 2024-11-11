import { default as React } from 'react';
interface DisplayDateProps {
    inputDate?: {
        startDate?: string;
        endDate?: string;
        startTime?: string;
        endTime?: string;
    };
    isTimeRequired?: boolean;
}
declare const DisplayDate: React.FC<DisplayDateProps>;
export default DisplayDate;
