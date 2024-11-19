import { IonCol, IonFooter, IonGrid, IonRow, IonToolbar } from "@ionic/react";
import "./Footer.scss";
import homeIcon from "../../images/icons/home.svg";
import homeActiveIcon from "../../images/icons/homeActive.svg";
import mediaIcon from "../../images/icons/media.svg";
import mediaActiveIcon from "../../images/icons/mediaActive.svg";
import splitIcon from "../../images/icons/split.svg";
import splitActiveIcon from "../../images/icons/splitActive.svg";
import settingsIcon from "../../images/icons/settings.svg";
import settingsActiveIcon from "../../images/icons/settingsActive.svg";
import membersIcon from "../../images/icons/members.svg";
import membersActiveIcon from "../../images/icons/membersActive.svg";
// import invitationIcon from "../../images/icons/invitation.svg";
// import invitationActiveIcon from "../../images/icons/invitationActive.svg";

import { EventSettings } from "@goflock/types/src";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";
import { Link } from "react-router-dom";

interface FooterProps {
  eventId: string;
  activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
  settings: EventSettings;
  eventRelation: EventRelation;
}

const Footer: React.FC<FooterProps> = ({
  eventId,
  settings,
  eventRelation,
  activeTab,
}) => {
  const allTabs = [
    {
      key: "invitation",
      href: `/event/${eventId}`,
      icon: activeTab == "invitation" ? homeActiveIcon : homeIcon,
      label: "Home",
      enabled: true, // Always enabled
    },
    // Add later
    {
      key: "members",
      href: `/invite-members/${eventId}`,
      icon: activeTab == "members" ? membersActiveIcon : membersIcon,
      label: "Members",
      enabled: true, // Always enabled
    },
    {
      key: "media",
      href: `/event-media/${eventId}`,
      icon: activeTab == "media" ? mediaActiveIcon : mediaIcon,
      label: "Media",
      enabled: settings.shareMedia, // Controlled by shareMedia setting
    },
    {
      key: "expenses",
      href: `/event-expenses/${eventId}`,
      icon: activeTab == "expenses" ? splitActiveIcon : splitIcon,
      label: "Split Bill",
      enabled:
        settings.splitBills &&
        (eventRelation.visitType === "owner" ||
          eventRelation.visitType === "admin"),
    },
    {
      key: "settings",
      href: `/event-settings/${eventId}`,
      icon: activeTab == "settings" ? settingsActiveIcon : settingsIcon,
      label: "Settings",
      enabled:
        eventRelation.visitType === "owner" ||
        eventRelation.visitType === "admin",
    },
  ];

  // Filter tabs based on the `enabled` property
  const enabledTabs = allTabs.filter((tab) => tab.enabled);

  return (
    <IonFooter className="footer">
      <IonToolbar>
        <IonGrid className="ion-padding footer-cnt">
          <IonRow>
            {enabledTabs.map((tab) => (
              <IonCol key={tab.key}>
                <Link to={tab.href}>
                  <img
                    src={tab.icon}
                    alt={`${tab.label} icon`}
                  />
                </Link>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
