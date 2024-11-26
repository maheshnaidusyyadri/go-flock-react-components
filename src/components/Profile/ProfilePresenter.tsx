import React, { useEffect, useState } from "react";
import "./ProfilePresenter.scss";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonText,
  IonImg,
  IonCard,
  IonThumbnail,
  IonList,
  IonActionSheet,
  IonGrid,
  IonIcon,
} from "@ionic/react";
import { ProfileProps } from "@goflock/types/src/index";
import Header from "../Header/Header";
import ProfileIcon from "../../images/icons/profile-circle.svg";
import PrivacyIcon from "../../images/icons/shield-tick.svg";
import LogOutIcon from "../../images/icons/logOut.svg";
import DeleteIcon from "../../images/icons/Delete.svg";
import PrivacyPolicy from "./PrivacyPolicy";
import backArrow from "../.././images/icons/back-arrow.svg";
import rightArrow from "../.././images/icons/arrow-right.svg";
import rightArrowRed from "../.././images/icons/arrow-right-red.svg";

import EditProfile from "./EditProfile";
const ProfilePresenter: React.FC<ProfileProps> = ({
  profile,
  setPreferredName,
  logout,
  setSMSPreference,
  deleteAccount,
}) => {
  useEffect(() => {
    if (profile.prefName === "") {
      setProfileOpen(true);
    }
  }, [profile]);

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <IonPage>
        <Header
          title="Profile Setting"
          showMenu={false}
          showContactList={false}
        />
        <IonContent className="ion-padding">
          <IonCard className="profile_card">
            <IonImg className="dp" src={profile.pictureUrl}></IonImg>
            <IonTitle className="name">{profile.prefName}</IonTitle>
            <IonText className="number">{"+" + profile.phone}</IonText>
          </IonCard>

          <IonGrid className="pad0 profile_settings">
            <IonTitle className="list-title">Setting Options</IonTitle>
            <IonList className="list_wrap">
              <IonItem
                className="list_item"
                onClick={() => setProfileOpen(true)}
              >
                <IonThumbnail slot="start" className="dp">
                  <IonImg className="ion-img" src={ProfileIcon} alt="Profile" />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Profile</IonTitle>
                  <IonIcon src={rightArrow}></IonIcon>
                </IonLabel>
              </IonItem>
              <IonItem className="list_item" onClick={() => setIsOpen(true)}>
                <IonThumbnail slot="start" className="dp">
                  <IonImg className="ion-img" src={PrivacyIcon} alt="Privacy" />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Privacy</IonTitle>
                  <IonIcon src={rightArrow}></IonIcon>
                </IonLabel>
              </IonItem>

              <IonItem className="list_item" id="open-logout-action">
                <IonThumbnail slot="start" className="dp">
                  <IonImg className="ion-img" src={LogOutIcon} alt="Log Out" />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Log Out</IonTitle>
                  <IonIcon src={rightArrow}></IonIcon>
                </IonLabel>
              </IonItem>
              <IonItem className="list_item delete" id="open-delete-action">
                <IonThumbnail slot="start" className="dp">
                  <IonImg
                    className="ion-img"
                    src={DeleteIcon}
                    alt="Delete Account"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Delete Account</IonTitle>
                  <IonIcon src={rightArrowRed}></IonIcon>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonGrid>
        </IonContent>
      </IonPage>

      <IonActionSheet
        trigger="open-logout-action"
        className="action-menu-end"
        header="Log out"
        subHeader="Are you sure you want to log out?"
        buttons={[
          {
            text: "Log Out",
            role: "destructive",
            data: {
              action: "Log Out",
            },
            cssClass: "fill-btn dark-btn",
            handler: () => {
              logout();
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
      <IonActionSheet
        trigger="open-delete-action"
        className="action-menu-end"
        header="Delete Account"
        subHeader="Do you really want to delete the account permanently?"
        buttons={[
          {
            text: "Delete Account",
            role: "destructive",
            data: {
              action: "Delete Account",
            },
            cssClass: "fill-btn",
            handler: () => {
              deleteAccount();
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

      {isProfileOpen && (
        <>
          <IonLabel
            className="modal_close"
            onClick={() => setProfileOpen(false)}
          >
            <img src={backArrow} alt="Page Back" />
          </IonLabel>
          <EditProfile
            profile={profile}
            setPreferredName={setPreferredName}
            setSMSPreference={setSMSPreference}
            setProfileOpen={setProfileOpen}
          />
        </>
      )}
      {isOpen && (
        <>
          <IonLabel className="modal_close" onClick={() => setIsOpen(false)}>
            <img src={backArrow} alt="Page Back" />
          </IonLabel>
          <PrivacyPolicy />
        </>
      )}
    </>
  );
};

export default ProfilePresenter;
