import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonList,
  IonLoading,
  IonToast,
} from "@ionic/react";
import {
  Currency,
  EventSettingsProps,
  EventVisibility,
} from "@goflock/types/src/index";

const EventSettingsPresenter: React.FC<EventSettingsProps> = ({
  event,
  eventSettings,
  enableMediaSharing,
  disableMediaSharing,
  enableSplitBills,
  disableSplitBills,
  updateCurrency,
  updateEventVisibility,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState(eventSettings);

  const handleToggleMediaSharing = async () => {
    setIsLoading(true);
    setError(null);
    try {
      settings.shareMedia
        ? await disableMediaSharing(event.id)
        : await enableMediaSharing(event.id);
      setSettings((prevSettings) => ({
        ...prevSettings,
        shareMedia: !prevSettings.shareMedia,
      }));
    } catch (err) {
      setError("Failed to update media sharing settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSplitBills = async () => {
    setIsLoading(true);
    setError(null);
    try {
      settings.splitBills
        ? await disableSplitBills(event.id)
        : await enableSplitBills(event.id);
      setSettings((prevSettings) => ({
        ...prevSettings,
        splitBills: !prevSettings.splitBills,
      }));
    } catch (err) {
      setError("Failed to update split bills settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCurrency = async (currency: Currency) => {
    setIsLoading(true);
    setError(null);
    try {
      await updateCurrency(currency);
      setSettings((prevSettings) => ({
        ...prevSettings,
        currency,
      }));
    } catch (err) {
      setError("Failed to update currency");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateEventVisibility = async (visibility: EventVisibility) => {
    setIsLoading(true);
    setError(null);
    try {
      await updateEventVisibility(visibility);
      setSettings((prevSettings) => ({
        ...prevSettings,
        visibility,
      }));
    } catch (err) {
      setError("Failed to update event visibility");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event Settings for {event.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonList>
        {/* Media Sharing Toggle */}
        <IonItem>
          <IonLabel>Media Sharing</IonLabel>
          <IonButton
            onClick={handleToggleMediaSharing}
            disabled={isLoading}
            color={settings.shareMedia ? "danger" : "primary"}
          >
            {settings.shareMedia ? "Disable" : "Enable"} Media Sharing
          </IonButton>
        </IonItem>

        {/* Split Bills Toggle */}
        <IonItem>
          <IonLabel>Split Bills</IonLabel>
          <IonButton
            onClick={handleToggleSplitBills}
            disabled={isLoading}
            color={settings.splitBills ? "danger" : "primary"}
          >
            {settings.splitBills ? "Disable" : "Enable"} Split Bills
          </IonButton>
        </IonItem>

        {/* Currency Selector */}
        <IonItem>
          <IonLabel>Currency</IonLabel>
          <IonSelect
            value={settings.currency}
            onIonChange={(e) =>
              handleUpdateCurrency(e.detail.value as Currency)
            }
            disabled={isLoading}
          >
            <IonSelectOption value="USD">USD</IonSelectOption>
            <IonSelectOption value="EUR">EUR</IonSelectOption>
            <IonSelectOption value="GBP">GBP</IonSelectOption>
            {/* Add other currencies as needed */}
          </IonSelect>
        </IonItem>

        {/* Event Visibility Selector */}
        <IonItem>
          <IonLabel>Event Visibility</IonLabel>
          <IonSelect
            value={settings.eventVisibility}
            onIonChange={(e) =>
              handleUpdateEventVisibility(e.detail.value as EventVisibility)
            }
            disabled={isLoading}
          >
            <IonSelectOption value="Public">Public</IonSelectOption>
            <IonSelectOption value="Private">Private</IonSelectOption>
            <IonSelectOption value="Hidden">Hidden</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Loading Spinner */}
        {isLoading && (
          <IonLoading
            isOpen={isLoading}
            message={"Updating..."}
          />
        )}
      </IonList>

      {/* Error Toast */}
      {error && (
        <IonToast
          isOpen={!!error}
          message={error}
          duration={2000}
          color="danger"
          onDidDismiss={() => setError(null)}
        />
      )}
    </IonContent>
  );
};

export default EventSettingsPresenter;
