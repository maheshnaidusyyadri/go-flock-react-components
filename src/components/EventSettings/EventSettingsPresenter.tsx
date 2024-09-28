import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToggle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import { EventSettingsProps, Currency, EventVisibility } from "@goflock/types";

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
  const [isLoading, setIsLoading] = useState(false);
  const [mediaSharing, setMediaSharing] = useState(eventSettings.shareMedia);
  const [splitBills, setSplitBills] = useState(eventSettings.splitBills);
  const [currency, setCurrency] = useState<Currency>(eventSettings.currency);
  const [visibility, setVisibility] = useState<EventVisibility>(
    eventSettings.eventVisibility
  );

  const handleToggleMediaSharing = async () => {
    setIsLoading(true);
    try {
      if (mediaSharing) {
        await disableMediaSharing(event.id);
      } else {
        await enableMediaSharing(event.id);
      }
      setMediaSharing(!mediaSharing);
    } catch (error) {
      console.error("Error updating media sharing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSplitBills = async () => {
    setIsLoading(true);
    try {
      if (splitBills) {
        await disableSplitBills(event.id);
      } else {
        await enableSplitBills(event.id);
      }
      setSplitBills(!splitBills);
    } catch (error) {
      console.error("Error updating split bills:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCurrency = async (newCurrency: Currency) => {
    setIsLoading(true);
    try {
      await updateCurrency(newCurrency);
      setCurrency(newCurrency);
    } catch (error) {
      console.error("Error updating currency:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateVisibility = async (newVisibility: EventVisibility) => {
    setIsLoading(true);
    try {
      await updateEventVisibility(newVisibility);
      setVisibility(newVisibility);
    } catch (error) {
      console.error("Error updating event visibility:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Event Settings for {event.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonLabel>Media Sharing</IonLabel>
          <IonToggle
            checked={mediaSharing}
            onIonChange={handleToggleMediaSharing}
            disabled={isLoading}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Split Bills</IonLabel>
          <IonToggle
            checked={splitBills}
            onIonChange={handleToggleSplitBills}
            disabled={isLoading}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Currency</IonLabel>
          <IonSelect
            value={currency}
            onIonChange={(e) =>
              handleUpdateCurrency(e.detail.value as Currency)
            }
            disabled={isLoading}
          >
            <IonSelectOption value="USD">USD</IonSelectOption>
            <IonSelectOption value="EUR">EUR</IonSelectOption>
            <IonSelectOption value="GBP">GBP</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Event Visibility</IonLabel>
          <IonSelect
            value={visibility}
            onIonChange={(e) =>
              handleUpdateVisibility(e.detail.value as EventVisibility)
            }
            disabled={isLoading}
          >
            <IonSelectOption value="public">Public</IonSelectOption>
            <IonSelectOption value="private">Private</IonSelectOption>
            <IonSelectOption value="hidden">Hidden</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton
          expand="block"
          disabled={isLoading}
          onClick={() => console.log("Settings saved")}
        >
          Save Settings
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default EventSettingsPresenter;
