import React from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
} from "@ionic/react";
import "./SideNavBar.scss";

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

import { EventSettings } from "@goflock/types/src";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";
import { Event } from "@goflock/types";

interface SideNavBarProps {
  event: Event;
  activeTab: "invitation" | "members" | "media" | "expenses" | "settings";
  settings: EventSettings;
  eventRelation: EventRelation;
}

const SideNavBar: React.FC<SideNavBarProps> = ({
  event,
  activeTab,
  settings,
  eventRelation,
}) => {
  const showNavAction = (type: string): boolean => {
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
      enabled: true,
    },
    {
      key: "members",
      href: `/manage-members/${event.id}`,
      icon: getTabIcon("members", activeTab, membersActiveIcon, membersIcon),
      label: "Members",
      enabled: showNavAction("members"),
    },
    {
      key: "media",
      href: `/event-media/${event.id}`,
      icon: getTabIcon("media", activeTab, mediaActiveIcon, mediaIcon),
      label: "Media",
      enabled: showNavAction("media"),
    },
    {
      key: "expenses",
      href: `/event-expenses/${event.id}`,
      icon: getTabIcon("expenses", activeTab, splitActiveIcon, splitIcon),
      label: "Split Bill",
      enabled: showNavAction("expenses"),
    },
    {
      key: "settings",
      href: `/event-settings/${event.id}`,
      icon: getTabIcon("settings", activeTab, settingsActiveIcon, settingsIcon),
      label: "Settings",
      enabled: showNavAction("settings"),
    },
  ];

  // Filter enabled tabs
  const enabledTabs = allTabs.filter((tab) => tab.enabled);

  return (
    <IonMenu
      side="start"
      menuId="side-nav"
      contentId="main-content"
      type="overlay"
    >
      <IonContent className="side-nav">
        <IonList>
          {enabledTabs.map((tab) => (
            <IonItem
              button
              key={tab.key}
              routerLink={tab.href}
            >
              <IonImg
                src={tab.icon.src || tab.icon}
                alt={`${tab.label} icon`}
                slot="start"
              />
              <IonLabel className="ion-padding-horizontal">
                {tab.label}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideNavBar;
