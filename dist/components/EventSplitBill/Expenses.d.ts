import { default as React } from 'react';
interface EventSplitBillProps {
    members: {
        name: string;
        phone: string;
        expanse: string;
        profileImage?: string;
        className: string;
    }[];
}
declare const ExpensesPresenter: React.FC<EventSplitBillProps>;
export default ExpensesPresenter;
