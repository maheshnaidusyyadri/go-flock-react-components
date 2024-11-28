import { useState } from "react";

import {
  IonHeader,
  IonTitle,
  IonActionSheet,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonText,
  IonToolbar,
  IonButtons,
  IonButton,
  IonAvatar,
} from "@ionic/react";
import "./Header.scss";
import backArrow from "../../images/icons/back-arrow.svg";
import Menu from "../../images/icons/menu.svg";
import ContactListIcon from "../../images/icons/ContactList.svg";
import signInIcon from "../../images/icons/signIn.svg";
import goflockLogo from "../../images/icons/logo.svg";
import goflockLogoWithTitle from "../../images/icons/logo-title.svg";
import { Profile } from "@goflock/types";
import { EventRelation } from "@goflock/types/dist/models/event/EventRelation";
import { getDisplayName } from "../../utils/utils";
import CustomActions from "../Common/CustomActions";

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

const Header: React.FC<HeaderProps> = ({
  eventId,
  title,
  showMenu = false,
  showContactList = false,
  showProfile = false,
  showSignIn = false,
  className = "",
  showLogo = false,
  logoPosition = "left",
  showGoBack = true,
  deleteEvent,
  eventRelation,
  profile,
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
  const [showActionMenu, setShowActionMenu] = useState(false);

  const handleActionClose = () => {
    setShowActionMenu(false);
  };

  return (
    <>
      <IonHeader className={`main-header ${className}`}>
        <IonToolbar className="header-cnt">
          <IonButtons slot="start">
            {showGoBack && (
              <IonButton routerLink={eventId ? `/event/${eventId}` : "/"}>
                <IonThumbnail className="profile_icon">
                  <IonImg src={backArrow} alt="Page Back" />
                </IonThumbnail>
              </IonButton>
            )}
            {showLogo && logoPosition === "left" && (
              <IonButton routerLink="/">
                <IonThumbnail className="profile_icon">
                  <IonImg src={goflockLogo} alt="ProfileIcon" />
                </IonThumbnail>
              </IonButton>
            )}
          </IonButtons>
          {showLogo && logoPosition === "middle" && (
            <IonTitle className="page-title">
              <img
                id="logo"
                src={goflockLogoWithTitle}
                alt="ProfileIcon"
                style={{ maxHeight: "40px", marginRight: "10px" }}
              />
            </IonTitle>
          )}
          {title && <IonTitle className="page-title">{title}</IonTitle>}
          <IonButtons slot="end">
            {showMenu && (
              <IonButton>
                <IonThumbnail
                  id="open-action-sheet"
                  className="menu_icon"
                  onClick={() => setShowActionMenu(true)}
                >
                  <IonImg src={Menu} alt="More Details" />
                </IonThumbnail>
              </IonButton>
            )}
            {showContactList && (
              <IonButton>
                <IonThumbnail className="menu_icon contactList">
                  <IonImg src={ContactListIcon} alt="Contact List" />
                </IonThumbnail>
              </IonButton>
            )}
            {showProfile && (
              <IonButton routerLink="/profile">
                {profile && profile.pictureUrl ? (
                  <IonThumbnail className="dp">
                    <IonImg src={profile.pictureUrl}></IonImg>
                  </IonThumbnail>
                ) : profile?.prefName ? (
                  <IonAvatar className="profile-dp">
                    {getDisplayName(profile.prefName)}
                  </IonAvatar>
                ) : null}
              </IonButton>
            )}

            {showSignIn && (
              <IonLabel class="signIn_btn">
                <IonText class="signin_text">Sign in</IonText>
                <IonImg src={signInIcon} alt="ProfileIcon" />
              </IonLabel>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {showActionMenu && (
        <CustomActions isOpen={showActionMenu} onClose={handleActionClose} />
      )}

      {showMenu && false && (
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
