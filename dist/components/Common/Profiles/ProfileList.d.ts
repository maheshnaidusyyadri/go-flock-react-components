import { default as React } from 'react';
import { EventMember } from '@goflock/types/src';
interface ProfileListProps {
    eventId: string;
    eventMembers: EventMember[];
    type?: string;
    onSelectMember?: (member: EventMember) => void;
    removeMember?: (eventMember: EventMember) => Promise<boolean>;
    addMore?: () => void;
}
declare const ProfileList: React.FC<ProfileListProps>;
export default ProfileList;
