import { EventSettings } from '@goflock/types/src';
import { EventRelation } from '@goflock/types/src/models/event/EventRelation';
interface FooterProps {
    eventId: string;
    activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
    settings: EventSettings;
    eventRelation: EventRelation;
    hideFooter?: boolean;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
