import { default as React } from 'react';
import { EventProps } from '@goflock/types/src';
interface RsvpModalPageProps extends EventProps {
    setIsInviteActive: (isModelActive: boolean) => void;
}
declare const RsvpModalPage: React.FC<RsvpModalPageProps>;
export default RsvpModalPage;
