import { EventSettings } from '@goflock/types/src';
import { EventRelation } from '@goflock/types/src/models/event/EventRelation';
import { Event } from '@goflock/types';
interface FooterProps {
    event: Event;
    activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
    settings: EventSettings;
    eventRelation: EventRelation;
    hideFooter?: boolean;
    className?: string;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
