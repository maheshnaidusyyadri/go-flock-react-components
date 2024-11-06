type HeaderProps = {
    eventId?: string;
    title: string;
    showMenu?: boolean;
    showContactList?: boolean;
    showProfile?: boolean;
    showSignIn?: boolean;
    showLogo?: boolean;
    className?: string;
    showGoBack?: boolean;
    deleteEvent?: (eventId: string) => void;
    eventRelation?: any;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
