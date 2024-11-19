import React, { useState } from "react";
import "./EventSettingsPresenter.scss";
import {
  IonToggle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonContent,
  IonThumbnail,
  IonImg,
  IonPage,
  IonGrid,
} from "@ionic/react";
import {
  EventSettingsProps,
  Currency,
  EventVisibility,
} from "@goflock/types/src/index";
import Header from "../Header/Header";
import galleryIcon from "../../images/icons/gallery.svg";
import billsIcon from "../../images/icons/bills.svg";
import dollarIcon from "../../images/icons/dollar-circle.svg";
import Footer from "../Footer/Footer";

const EventSettingsPresenter: React.FC<EventSettingsProps> = ({
  event,
  eventSettings,
  eventRelation,
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
    <IonPage>
      <Header
        eventId={event.id}
        title={`Settings`}
        showMenu={false}
        showContactList={false}
        className="sticky"
      />
      <IonContent className="ion-padding">
        <IonGrid className="settings_list ion-no-padding ion-no-margin">
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
                  alt="Add Expenses"
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
                <IonSelectOption value="public">Community</IonSelectOption>
                <IonSelectOption value="private">Personal</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonItem>
        </IonGrid>
      </IonContent>
      <Footer
        eventId={event.id}
        activeTab={"expenses"}
        settings={event.settings}
        eventRelation={eventRelation}
      />
    </IonPage>
  );
};

export default EventSettingsPresenter;
