import { default as React } from 'react';
import { EventType } from '@goflock/types';
interface EventTypeSelectionProps {
    createNewEvent: (eventType: EventType) => void;
}
declare const EventTypeSelection: React.FC<EventTypeSelectionProps>;
export default EventTypeSelection;
