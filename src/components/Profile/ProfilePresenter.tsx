import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonLoading,
  IonText,
} from "@ionic/react";
import { ProfileProps } from "@goflock/types/src/index";

const ProfilePresenter: React.FC<ProfileProps> = ({
  profile,
  setPreferredName,
  setIsIntroShown,
  setSMSPreference,
  logout,
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  );
  const [isIntroShown, setIsIntroShownState] = useState<boolean>(
    profile.isIntroShown || false
  );
  const [smsPreference, setSMSPreferenceState] = useState<boolean>(
    profile.preferences.smsNotifications || false
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

  const handleIntroShownChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setIsIntroShown(isIntroShown);
      if (!success) {
        throw new Error("Failed to update intro visibility");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSMSPreferenceChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setSMSPreference(smsPreference);
      if (!success) {
        throw new Error("Failed to update SMS preference");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Preferred Name</IonLabel>
          <IonInput
            value={preferredName}
            onIonChange={(e) => setPreferredNameState(e.detail.value!)}
            placeholder="Enter your preferred name"
          />
        </IonItem>
        <IonButton
          expand="block"
          onClick={handlePreferredNameChange}
          disabled={isLoading || !preferredName}
        >
          Save Preferred Name
        </IonButton>

        <IonItem>
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
        </IonButton>

        <IonItem>
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
    </IonPage>
  );
};

export default ProfilePresenter;
