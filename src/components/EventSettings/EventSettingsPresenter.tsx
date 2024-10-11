import React, { useState } from "react";
import "./EventSettingsPresenter.scss";
import {
  IonCardContent,
  IonToggle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonContent,
} from "@ionic/react";
import { EventSettingsProps, Currency, EventVisibility } from "@goflock/types";
import Header from "../Header/Header";
import galleryIcon from "../../images/icons/gallery.svg";
import billsIcon from "../../images/icons/bills.svg";
import chatIcon from "../../images/icons/message.svg";
import ChecklistIcon from "../../images/icons/Checklist.svg";
import dollarIcon from "../../images/icons/dollar-circle.svg";
import Footer from "../Footer/Footer";

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
    <IonContent className="page_cnt">
      <Header
        title={`Event Settings for ${event?.name || "Event"}`}
        showMenu={false}
        showContactList={false}
      />

      <IonCardContent className="settings_list">
        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={galleryIcon}
                alt="Media"
              />
            </span>
            Media Sharing
          </IonLabel>
          <div>
            <IonToggle
              className="ion-toggle"
              checked={mediaSharing}
              onIonChange={handleToggleMediaSharing}
              disabled={isLoading}
            />
          </div>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={billsIcon}
                alt="Split Bills"
              />
            </span>
            Split Bills
          </IonLabel>
          <div>
            <IonToggle
              checked={splitBills}
              onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </div>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={chatIcon}
                alt="Chats"
              />
            </span>
            Chats
          </IonLabel>
          <div>
            <IonToggle
              checked={true}
           //   onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </div>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={ChecklistIcon}
                alt="Checklist"
              />
            </span>
            Checklist
          </IonLabel>
          <div>
            <IonToggle
              checked={true}
            //  onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </div>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={dollarIcon}
                alt="chat"
              />
            </span>
            Currency
          </IonLabel>
          <div>
            <IonSelect
              className="ion-select"
              value={currency}
              interface="action-sheet"
              onIonChange={(e) =>
                handleUpdateCurrency(e.detail.value as Currency)
              }
              disabled={isLoading}
            >
              <IonSelectOption value="USD">USD</IonSelectOption>
              <IonSelectOption value="EUR">EUR</IonSelectOption>
              <IonSelectOption value="GBP">GBP</IonSelectOption>
            </IonSelect>
          </div>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <span className="dp">
              <img
                src={galleryIcon}
                alt="Media"
              />
            </span>
            Event Visibility
          </IonLabel>
          <div>
            <IonSelect
              className="ion-select"
              value={visibility}
              interface="action-sheet"
              onIonChange={(e) =>
                handleUpdateVisibility(e.detail.value as EventVisibility)
              }
              disabled={isLoading}
            >
              <IonSelectOption value="public">Public</IonSelectOption>
              <IonSelectOption value="private">Private</IonSelectOption>
              <IonSelectOption value="hidden">Hidden</IonSelectOption>
            </IonSelect>
          </div>
        </IonItem>

        <IonButton
          expand="block"
          disabled={isLoading}
          onClick={() => console.log("Settings saved")}
          className="primary-btn"
        >
          Save Settings
        </IonButton>
      </IonCardContent>
      <Footer
        eventId={event.id}
        activeTab={"splitBill"}
      />
    </IonContent>
  );
};

export default EventSettingsPresenter;
