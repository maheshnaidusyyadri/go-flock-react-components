import React, { useRef, useState } from "react";
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
import CenteredColumn from "../Common/CenteredColumn";
import SideNavBar from "../Footer/SideNavBar";

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
  const [showFooter, setShowFooter] = useState(true);
  let lastScrollTop = useRef(0);
  let scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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
  const handleScroll = (e: any) => {
    const currentScrollTop = e.detail.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      if (showFooter) {
        setShowFooter(false);
        console.log("Footer hidden");
      }
    } else if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      if (!showFooter) {
        setShowFooter(true);
        console.log("Footer shown");
      }
    }
    // Clear the previous timeout if it exists
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    // Set a timeout to show the footer after scrolling stops
    scrollTimeout.current = setTimeout(() => {
      setShowFooter(true);
      console.log("Footer shown after scroll stops");
    }, 1000); // Adjust timeout duration as needed
    lastScrollTop = currentScrollTop;
  };

  return (
    <>
      {(["admin", "owner"].includes(eventRelation?.visitType) ||
        (["member"].includes(eventRelation?.visitType) &&
          eventRelation?.rsvp &&
          eventRelation.rsvp?.response)) && (
        <SideNavBar
          event={event}
          activeTab="invitation"
          settings={event.settings}
          eventRelation={eventRelation}
        />
      )}
      <IonPage id="main-content">
        <Header
          eventId={event.id}
          title={`Settings`}
          showMenu={false}
          showContactList={false}
          showGoBack={false}
          showLogo={true}
          logoPosition={"left"}
          className="sticky"
          event={event}
          eventRelation={eventRelation}
        />
        <IonContent
          className="ion-padding"
          onIonScroll={handleScroll}
          scrollEvents={true}
        >
          <IonGrid className="settings-list ion-no-padding ion-no-margin">
            <CenteredColumn>
              <IonItem>
                <IonLabel className="ion-label">
                  <IonThumbnail className="dp">
                    <IonImg
                      src={
                        galleryIcon.src ||
                        (galleryIcon.value as unknown as string) ||
                        (galleryIcon as unknown as string)
                      }
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
                      src={
                        billsIcon.src ||
                        (billsIcon.value as unknown as string) ||
                        (billsIcon as unknown as string)
                      }
                      alt="Add Expenses"
                    />
                  </IonThumbnail>
                  Split Bills
                </IonLabel>
                <IonItem>
                  <IonToggle
                    className="ion-toggle"
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
                      src={
                        dollarIcon.src ||
                        (dollarIcon.value as unknown as string) ||
                        (dollarIcon as unknown as string)
                      }
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
                      src={
                        galleryIcon.src ||
                        (galleryIcon.value as unknown as string) ||
                        (galleryIcon as unknown as string)
                      }
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
            </CenteredColumn>
          </IonGrid>
        </IonContent>
        <Footer
          event={event}
          activeTab={"settings"}
          settings={event.settings}
          eventRelation={eventRelation}
          hideFooter={showFooter}
          className="ion-hide-md-up"
        />
      </IonPage>
    </>
  );
};

export default EventSettingsPresenter;
