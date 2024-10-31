import { default as React } from 'react';
import { Event } from '@goflock/types/src/index';
interface EventItemProps {
    event: Event;
    onOpen: (eventId: string) => void;
    onShowActionSheet: () => void;
}
declare const EventItem: React.FC<EventItemProps>;
export default EventItem;
