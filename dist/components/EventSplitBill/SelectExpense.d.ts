import { default as React } from 'react';
interface SelectMembersProps {
    members: any[];
    isMultiple?: boolean;
    onMemberSelect: (selectedMembers: any[] | any | null) => void;
    modalClose: () => void;
    title?: string;
}
declare const SelectMembers: React.FC<SelectMembersProps>;
export default SelectMembers;
