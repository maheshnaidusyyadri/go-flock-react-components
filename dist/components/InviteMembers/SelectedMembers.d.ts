import { default as React } from 'react';
import { EventMember } from '@goflock/types/src';
declare const SendSms: React.FC<{
    eventId: string;
    members: EventMember[];
    removeMember: (eventMember: EventMember) => Promise<boolean>;
    addMore?: () => void;
}>;
export default SendSms;
