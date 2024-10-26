// src/components/Header/Header.tsx
import { useState } from "react";

import {
  IonHeader,
  IonTitle,
  IonActionSheet,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import "./Header.scss";
import backArrow from "../../images/icons/back-arrow.svg";
import Menu from "../../images/icons/menu.svg";
import ContactListIcon from "../../images/icons/ContactList.svg";
import ProfileIcon from "../../images/profile.png";
import signInIcon from "../../images/icons/signIn.svg";
import goflockLogo from "../../images/icons/goflock.svg";

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

const Header: React.FC<HeaderProps> = ({
  eventId,
  title,
  showMenu = false,
  showContactList = false,
  showProfile = false,
  showSignIn = false,
  className = "",
  showLogo = false,
  showGoBack = true,
  deleteEvent,
  eventRelation,
}) => {
  const [showDeleteActionSheet, setShowDeleteActionSheet] = useState(false);
  const actions = [
    { text: "Copy link" },
    { text: "Edit Event" },
    { text: "Add Checklist" },
    { text: "Invite Guest" },
    { text: "Delete Event" },
  ];
  const allowedActions = actions.filter((action) => {
    switch (eventRelation?.visitType) {
      case "admin":
        return [
          "Copy link",
          "Edit Event",
          "Add Checklist",
          "Delete Event",
        ].includes(action.text);
      case "owner":
        return true;
      case "member":
        return ["Copy link"].includes(action.text);
      default:
        return false;
    }
  });
  const handleBack = () => {
    window.history.back(); // Goes back to the previous page
  };

  return (
    <>
      <IonHeader className={`main-header ${className}`}>
        <div className="header-cnt">
          {showGoBack && (
            <IonImg
              src={backArrow}
              alt="Page Back"
              onClick={handleBack}
            />
          )}
          {showLogo && (
            <IonRouterLink routerLink="/">
              <IonThumbnail className="profile_icon">
                <IonImg
                  src={goflockLogo}
                  alt="ProfileIcon"
                />
              </IonThumbnail>
            </IonRouterLink>
          )}
          {title && <IonTitle className="page-title">{title}</IonTitle>}
          {showMenu && (
            <IonThumbnail
              id="open-action-sheet"
              className="menu_icon"
            >
              <IonImg
                src={Menu}
                alt="More Details"
              />
            </IonThumbnail>
          )}
          {showContactList && (
            <IonThumbnail className="menu_icon contactList">
              <IonImg
                src={ContactListIcon}
                alt="Contact List"
              />
            </IonThumbnail>
          )}
          {showProfile && (
            <IonRouterLink routerLink="/profile">
              <IonThumbnail className="profile_icon">
                <IonImg
                  src={ProfileIcon}
                  alt="ProfileIcon"
                />
              </IonThumbnail>
            </IonRouterLink>
          )}
          {showSignIn && (
            <IonLabel class="signIn_btn">
              <IonText class="signin_text">Sign in</IonText>
              <IonImg
                src={signInIcon}
                alt="ProfileIcon"
              />
            </IonLabel>
          )}
        </div>
      </IonHeader>

      {showMenu && (
        <IonActionSheet
          trigger="open-action-sheet"
          className="action-menu-end"
          buttons={allowedActions.map((act) => ({
            text: act.text,
            handler: () => {
              if (act.text == "Delete Event") {
                setShowDeleteActionSheet(true);
              }
            },
          }))}
        ></IonActionSheet>
      )}
      <IonActionSheet
        className="action-menu-end"
        isOpen={showDeleteActionSheet} // Controls visibility of delete action sheet
        onDidDismiss={() => setShowDeleteActionSheet(false)} // Dismiss delete action sheet
        buttons={[
          {
            text: "Delete Event",
            role: "destructive",
            data: {
              action: "delete",
            },
            cssClass: "fill-btn",
            handler: () => {
              deleteEvent?.(eventId!);
            },
          },
          {
            text: "Cancel",
            data: {
              action: "cancel",
            },
            cssClass: "rounded",
          },
        ]}
      ></IonActionSheet>
    </>
  );
};

export default Header;
