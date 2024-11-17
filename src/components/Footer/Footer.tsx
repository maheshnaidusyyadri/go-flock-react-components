import { IonFooter } from "@ionic/react";
import "./Footer.scss";
import homeIcon from "../../images/icons/home.svg";
import mediaIcon from "../../images/icons/media.svg";
import splitIcon from "../../images/icons/split.svg";
import settingsIcon from "../../images/icons/settings.svg";
import { EventSettings } from "@goflock/types/src";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";

interface FooterProps {
  eventId: string;
  activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
  settings: EventSettings;
  eventRelation: EventRelation;
}

const Footer: React.FC<FooterProps> = ({
  eventId,
  activeTab,
  settings,
  eventRelation,
}) => {
  const allTabs = [
    {
      key: "invitation",
      href: `/event/${eventId}`,
      icon: homeIcon,
      label: "Home",
      enabled: true, // Always enabled
    },
    // Add later
    // {
    //   key: "members",
    //   href: `/event/${eventId}`,
    //   icon: homeIcon,
    //   label: "Home",
    //   enabled: true, // Always enabled
    // },
    {
      key: "media",
      href: `/event-media/${eventId}`,
      icon: mediaIcon,
      label: "Media",
      enabled: settings.shareMedia, // Controlled by shareMedia setting
    },
    {
      key: "expenses",
      href: `/event-expenses/${eventId}`,
      icon: splitIcon,
      label: "Split Bill",
      enabled:
        settings.splitBills &&
        (eventRelation.visitType === "owner" ||
          eventRelation.visitType === "admin"),
    },
    {
      key: "settings",
      href: `/event-settings/${eventId}`,
      icon: settingsIcon,
      label: "Settings",
      enabled:
        eventRelation.visitType === "owner" ||
        eventRelation.visitType === "admin",
    },
  ];

  // Filter tabs based on the `enabled` property
  const enabledTabs = allTabs.filter((tab) => tab.enabled);

  return (
    <IonFooter className="main-footer">
      <nav>
        <ul>
          {enabledTabs.map((tab) => (
            <li key={tab.key}>
              <a
                className={`link ${activeTab === tab.key ? "active" : ""}`}
                href={tab.href}
              >
                <img
                  src={tab.icon}
                  alt={`${tab.label} icon`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </IonFooter>
  );
};

export default Footer;
