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
import membersIcon from "../../images/icons/member.svg";
import membersActiveIcon from "../../images/icons/membersActive.svg";
// import invitationIcon from "../../images/icons/invitation.svg";
// import invitationActiveIcon from "../../images/icons/invitationActive.svg";

import { EventSettings } from "@goflock/types/src";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";
import { Event } from "@goflock/types";

interface FooterProps {
  event: Event;
  activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
  settings: EventSettings;
  eventRelation: EventRelation;
  hideFooter?: boolean;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  event,
  settings,
  eventRelation,
  activeTab,
  className = "",
}) => {
  const showFooterAction = (type: string): boolean => {
    switch (type) {
      case "members":
        return eventRelation.visitType !== "member";
      case "media":
        return settings.shareMedia;
      case "expenses":
        return (
          settings.splitBills &&
          (eventRelation.visitType === "owner" ||
            eventRelation.visitType === "admin")
        );
      case "settings":
        return (
          eventRelation.visitType === "owner" ||
          eventRelation.visitType === "admin"
        );
      default:
        return false;
    }
  };
  const getTabIcon = (
    key: string,
    activeKey: string,
    activeIcon: any,
    inactiveIcon: any
  ) => (key === activeKey ? activeIcon : inactiveIcon);
  const allTabs = [
    {
      key: "invitation",
      href: `/event/${event.slug || event.id}`,
      icon: getTabIcon("invitation", activeTab, homeActiveIcon, homeIcon),
      label: "Home",
      enabled: true, // Always enabled
    },
    // Add later
    {
      key: "members",
      href: `/manage-members/${event.id}`,
      icon: getTabIcon("members", activeTab, membersActiveIcon, membersIcon),
      label: "Members",
      enabled: showFooterAction("members"),
    },
    {
      key: "media",
      href: `/event-media/${event.id}`,
      icon: getTabIcon("media", activeTab, mediaActiveIcon, mediaIcon),
      label: "Media",
      enabled: showFooterAction("media"),
    },
    {
      key: "expenses",
      href: `/event-expenses/${event.id}`,
      icon: getTabIcon("expenses", activeTab, splitActiveIcon, splitIcon),
      label: "Split Bill",
      enabled: showFooterAction("expenses"),
    },
    {
      key: "settings",
      href: `/event-settings/${event.id}`,
      icon: getTabIcon("settings", activeTab, settingsActiveIcon, settingsIcon),
      label: "Settings",
      enabled: showFooterAction("settings"),
    },
  ];

  // Filter tabs based on the `enabled` property
  const enabledTabs = allTabs.filter((tab) => tab.enabled);

  return (
    <IonFooter className={`footer ${className}`}>
      <IonToolbar>
        <IonGrid className="ion-padding footer-cnt">
          <IonRow>
            {enabledTabs.map((tab) => (
              <IonCol key={tab.key}>
                <a href={tab.href}>
                  <img
                    src={tab.icon.src || tab.icon}
                    alt={`${tab.label} icon`}
                  />
                </a>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
