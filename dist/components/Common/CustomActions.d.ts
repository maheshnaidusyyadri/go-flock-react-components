import { default as React } from 'react';
import { EventRelation } from '@goflock/types/src/models/event/EventRelation';
import { Media } from '@goflock/types';
interface CustomActionsProps {
    isOpen: boolean;
    onClose: () => void;
    deleteEvent?: (eventId: string) => void;
    eventRelation?: EventRelation;
    eventId?: string;
    inviteMembers?: (eventId: string) => void;
    addInvitationCards?: (files: FileList) => Promise<Media[]>;
    copyEventLink?: (eventId: string) => void;
    editEvent?: (eventId: string) => void;
    openGuestView?: (eventId: string) => void;
}
declare const CustomActions: React.FC<CustomActionsProps>;
export default CustomActions;
