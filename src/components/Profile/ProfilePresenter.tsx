import React, { useState } from "react";
import "./ProfilePresenter.scss";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonLoading,
  IonText,
  IonImg,
  IonCard,
  IonThumbnail,
  IonList,
  IonActionSheet,
  IonCardContent,
  IonToggle,
  IonGrid,
} from "@ionic/react";
import { ProfileProps } from "@goflock/types/src/index";
import Header from "../Header/Header";
import ProfileDp from "../../images/profile.png";
import ProfileIcon from "../../images/icons/profile-circle.svg";
import PrivacyIcon from "../../images/icons/shield-tick.svg";
import LogOutIcon from "../../images/icons/logOut.svg";
import DeleteIcon from "../../images/icons/Delete.svg";

const ProfilePresenter: React.FC<ProfileProps> = ({
  profile,
  setPreferredName,
  logout,
  // setIsIntroShown,
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePreferredNameChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setPreferredName(preferredName);
      if (!success) {
        throw new Error("Failed to set preferred name");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleIntroShownChange = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const success = await setIsIntroShown(isIntroShown);
  //     if (!success) {
  //       throw new Error("Failed to update intro visibility");
  //     }
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleSMSPreferenceChange = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const success = await setSMSPreference(smsPreference);
  //     if (!success) {
  //       throw new Error("Failed to update SMS preference");
  //     }
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleLogout = () => {
  //   logout();
  // };

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
            <IonImg
              className="dp"
              src={ProfileDp}
            ></IonImg>
            <IonTitle className="name">{preferredName}</IonTitle>
            <IonText className="number">+1 978 569 7852</IonText>
          </IonCard>

          <IonGrid className="pad0 profile_settings">
            <IonTitle className="list-title">Setting Options</IonTitle>
            <IonList className="list_wrap">
              <IonItem className="list_item">
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={ProfileIcon}
                    alt="Profile"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Profile</IonTitle>
                </IonLabel>
              </IonItem>
              <IonItem className="list_item">
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={PrivacyIcon}
                    alt="Privacy"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Privacy</IonTitle>
                </IonLabel>
              </IonItem>

              <IonItem
                className="list_item"
                id="open-logout-action"
              >
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={LogOutIcon}
                    alt="Log Out"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Log Out</IonTitle>
                </IonLabel>
              </IonItem>
              <IonItem
                className="list_item delete"
                id="open-delete-action"
              >
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={DeleteIcon}
                    alt="Delete Account"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Delete Account</IonTitle>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonGrid>

          {/* <IonItem>
          <IonLabel>Show Intro</IonLabel>
          <IonCheckbox
            slot="start"
            checked={isIntroShown}
            onIonChange={(e) => setIsIntroShownState(e.detail.checked)}
          />
        </IonItem>
        <IonButton
          expand="block"
          onClick={handleIntroShownChange}
          disabled={isLoading}
        >
          Save Intro Setting
        </IonButton> */}

          {/* <IonItem>
          <IonLabel>SMS Notifications</IonLabel>
          <IonCheckbox
            slot="start"
            checked={smsPreference}
            onIonChange={(e) => setSMSPreferenceState(e.detail.checked)}
          />
        </IonItem>
        <IonButton
          expand="block"
          onClick={handleSMSPreferenceChange}
          disabled={isLoading}
        >
          Save SMS Preference
        </IonButton>

        <IonButton
          expand="block"
          color="danger"
          onClick={handleLogout}
          disabled={isLoading}
        >
          Logout
        </IonButton>

        <IonButton
          expand="block"
          color="danger"
          onClick={handleLogout}
          disabled={isLoading}
        >
          Logout
        </IonButton>*/}

          {error && (
            <IonText color="danger">
              <p>{error}</p>
            </IonText>
          )}

          <IonLoading
            isOpen={isLoading}
            message={"Please wait..."}
          />
        </IonContent>
        <IonContent
          className="profile_edit_cnt"
          style={{ display: "none" }}
        >
          <IonCard className="profile_edit_card">
            <span className="dp_wrap">
              <IonImg
                className="dp"
                src={ProfileDp}
              ></IonImg>
              <span className="dp_edit"></span>
            </span>
          </IonCard>
          <div className="profile_info_card">
            <div className="form-container">
              <IonCardContent className="pad0">
                <div className="form-group">
                  <IonInput
                    value={preferredName}
                    onIonChange={(e) => setPreferredNameState(e.detail.value!)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <IonInput
                    label="Phone Number"
                    labelPlacement="stacked"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="terms">
                  <IonToggle
                    className="ion-toggle"
                    labelPlacement="start"
                  >
                    Get remainders, notifications via SMS.
                  </IonToggle>
                </div>
                <IonButton
                  expand="block"
                  onClick={handlePreferredNameChange}
                  disabled={isLoading || !preferredName}
                  className="primary-btn"
                >
                  Save
                </IonButton>
              </IonCardContent>
            </div>
          </div>
        </IonContent>
      </IonPage>

      <IonActionSheet
        trigger="open-logout-action"
        className="action-menu-end"
        buttons={[
          {
            text: "Log Out",
            role: "destructive",
            data: {
              action: "Log Out",
            },
            cssClass: "fill-btn",
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
        buttons={[
          {
            text: "Delete Account",
            role: "destructive",
            data: {
              action: "Delete Account",
            },
            cssClass: "fill-btn",
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

export default ProfilePresenter;
