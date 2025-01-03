import { useState } from "react";

import {
  IonHeader,
  IonTitle,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonText,
  IonToolbar,
  IonButtons,
  IonButton,
  IonAvatar,
  IonProgressBar,
  IonMenuButton,
} from "@ionic/react";
import "./Header.scss";
import backArrow from "../../images/icons/back-arrow.svg";
import Menu from "../../images/icons/menu.svg";
import ContactListIcon from "../../images/icons/ContactList.svg";
import signInIcon from "../../images/icons/signIn.svg";
import goflockLogo from "../../images/icons/logo.svg";
import goflockLogoWithTitle from "../../images/icons/logo-title.svg";
import { Media, Profile } from "@goflock/types";
import { EventRelation } from "@goflock/types/dist/models/event/EventRelation";
import { getDisplayName } from "../../utils/utils";
import CustomActions from "../Common/CustomActions";
import { Event } from "@goflock/types/src";

type HeaderProps = {
  eventId?: string;
  event?: Event;
  title: string;
  showMenu?: boolean;
  showContactList?: boolean;
  showProfile?: boolean;
  showSignIn?: boolean;
  showLogo?: boolean;
  logoPosition?: "left" | "middle";
  className?: string;
  showGoBack?: boolean;
  showProgressBar?: boolean;
  eventRelation?: EventRelation;
  profile?: Profile;
  leftButtonAction?: () => void;
  rightButtonAction?: () => void;
  inviteMembers?: (eventId: string) => void;
  addInvitationCards?: (files: FileList) => Promise<Media[]>;
  copyEventLink?: (eventId: string) => void;
  editEvent?: (eventId: string) => void;
  deleteEvent?: (eventId: string) => void;
};

const Header: React.FC<HeaderProps> = ({
  eventId,
  event,
  title,
  showMenu = false,
  showContactList = false,
  showProfile = false,
  showSignIn = false,
  className = "",
  showLogo = false,
  logoPosition = "left",
  showGoBack = true,
  showProgressBar = false,
  eventRelation,
  profile,
  inviteMembers,
  addInvitationCards,
  copyEventLink,
  editEvent,
  leftButtonAction,
  deleteEvent,
}) => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const handleActionClose = () => {
    setShowActionMenu(false);
  };

  const handleLeftButtonAction = () => {
    if (leftButtonAction) {
      leftButtonAction();
    } else {
      window.history.back();
    }
  };

  const openGuestView = () => {
    window.open(`/event/${event?.slug || event?.id!}/guest`, "_blank");
    setShowActionMenu(false);
  };

  const handleCopyEventLink = () => {
    copyEventLink?.(event?.slug || event?.id!);
    setShowActionMenu(false);
  };

  return (
    <>
      <IonHeader className={`main-header ${className}`}>
        <IonToolbar className="header-cnt">
          <IonButtons slot="start">
            {showGoBack && (
              <IonButton onClick={() => handleLeftButtonAction()}>
                <IonThumbnail className="profile-icon">
                  <IonImg
                    src={
                      backArrow.src ||
                      (backArrow.value as unknown as string) ||
                      (backArrow as unknown as string)
                    }
                    alt="Page Back"
                  />
                </IonThumbnail>
              </IonButton>
            )}
            {showLogo && logoPosition === "left" && (
              <IonButtons slot="start">
                {eventRelation &&
                  ["admin", "owner", "member"].includes(
                    eventRelation.visitType
                  ) && (
                    <IonMenuButton
                      menu="side-nav"
                      autoHide={false}
                      className="ion-hide-md-down"
                    />
                  )}

                <IonButton
                  routerLink="/"
                  className="ion-hide-md-up"
                >
                  <IonThumbnail className="profile-icon">
                    <IonImg
                      src={
                        goflockLogo.src ||
                        (goflockLogo.value as unknown as string) ||
                        (goflockLogo as unknown as string)
                      }
                      alt="profile"
                    />
                  </IonThumbnail>
                </IonButton>
              </IonButtons>
            )}
          </IonButtons>
          {showLogo && logoPosition === "middle" && (
            <IonTitle className="page-title">
              <img
                id="logo"
                src={
                  goflockLogoWithTitle.src ||
                  (goflockLogoWithTitle.value as unknown as string) ||
                  (goflockLogoWithTitle as unknown as string)
                }
                alt="Logo"
                style={{ maxHeight: "40px", marginRight: "10px" }}
              />
            </IonTitle>
          )}
          {title && <IonTitle className="page-title">{title}</IonTitle>}
          <IonButtons
            slot="end"
            className="header-actions"
          >
            {showMenu && (
              <IonButton>
                <IonThumbnail
                  id="open-action-sheet"
                  className="menu-icon"
                  onClick={() => setShowActionMenu(true)}
                >
                  <IonImg
                    src={Menu.src || (Menu as unknown as string)}
                    alt="More Details"
                  />
                </IonThumbnail>
              </IonButton>
            )}
            {showContactList && (
              <IonButton>
                <IonThumbnail className="menu-icon contactList">
                  <IonImg
                    src={
                      ContactListIcon.src ||
                      (ContactListIcon as unknown as string)
                    }
                    alt="Contact List"
                  />
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
              <IonLabel class="signIn-btn">
                <IonText class="signin_text">Sign in</IonText>
                <IonImg
                  src={signInIcon.src || (signInIcon as unknown as string)}
                  alt="ProfileIcon"
                />
              </IonLabel>
            )}
          </IonButtons>
          {showProgressBar && (
            <IonProgressBar type="indeterminate"></IonProgressBar>
          )}
        </IonToolbar>
      </IonHeader>
      {showActionMenu && (
        <CustomActions
          isOpen={showActionMenu}
          onClose={handleActionClose}
          deleteEvent={deleteEvent}
          eventRelation={eventRelation}
          eventId={eventId}
          inviteMembers={inviteMembers}
          addInvitationCards={addInvitationCards}
          copyEventLink={handleCopyEventLink}
          editEvent={editEvent}
          openGuestView={openGuestView}
        />
      )}
    </>
  );
};

export default Header;
