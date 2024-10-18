import React, { useState } from "react";
import "./EventSettingsPresenter.scss";
import {
  IonCardContent,
  IonToggle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonContent,
  IonThumbnail,
  IonImg,
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
        className="sticky"
      />

      <IonCardContent className="settings_list">
        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={galleryIcon}
                alt="Media"
              />
            </IonThumbnail>
            Media Sharing
          </IonLabel>
          <IonItem>
            <IonToggle
              className="ion-toggle"
              checked={mediaSharing}
              onIonChange={handleToggleMediaSharing}
              disabled={isLoading}
            />
          </IonItem>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={billsIcon}
                alt="Split Bills"
              />
            </IonThumbnail>
            Split Bills
          </IonLabel>
          <IonItem>
            <IonToggle
              checked={splitBills}
              onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </IonItem>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={chatIcon}
                alt="Chats"
              />
            </IonThumbnail>
            Chats
          </IonLabel>
          <IonItem>
            <IonToggle
              checked={true}
           //   onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </IonItem>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={ChecklistIcon}
                alt="Checklist"
              />
            </IonThumbnail>
            Checklist
          </IonLabel>
          <IonItem>
            <IonToggle
              checked={true}
            //  onIonChange={handleToggleSplitBills}
              disabled={isLoading}
            />
          </IonItem>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={dollarIcon}
                alt="chat"
              />
            </IonThumbnail>
            Currency
          </IonLabel>
          <IonItem>
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
          </IonItem>
        </IonItem>

        <IonItem>
          <IonLabel className="ion-label">
            <IonThumbnail className="dp">
              <IonImg
                src={galleryIcon}
                alt="Media"
              />
            </IonThumbnail>
            Event Visibility
          </IonLabel>
          <IonItem>
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
          </IonItem>
        </IonItem> 
      </IonCardContent>
      <Footer
        eventId={event.id}
        activeTab={"splitBill"}
      />
    </IonContent>
  );
};

export default EventSettingsPresenter;
