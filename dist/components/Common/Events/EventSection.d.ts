import { default as React } from 'react';
import { Event } from '@goflock/types/src/index';
interface EventSectionProps {
    title: string;
    events: Event[];
    onSeeAll?: () => void;
    onOpenEvent: (eventId: string) => void;
}
declare const EventSection: React.FC<EventSectionProps>;
export default EventSection;
