import { default as React } from 'react';
import { EventSettings } from '@goflock/types/src';
import { EventRelation } from '@goflock/types/src/models/event/EventRelation';
import { Event } from '@goflock/types';
interface SideNavBarProps {
    event: Event;
    activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
    settings: EventSettings;
    eventRelation: EventRelation;
}
declare const SideNavBar: React.FC<SideNavBarProps>;
export default SideNavBar;
