import { Profile } from '@goflock/types';
import { EventRelation } from '@goflock/types/dist/models/event/EventRelation';
type HeaderProps = {
    eventId?: string;
    title: string;
    showMenu?: boolean;
    showContactList?: boolean;
    showProfile?: boolean;
    showSignIn?: boolean;
    showLogo?: boolean;
    logoPosition?: "left" | "middle";
    className?: string;
    showGoBack?: boolean;
    deleteEvent?: (eventId: string) => void;
    eventRelation?: EventRelation;
    profile?: Profile;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
