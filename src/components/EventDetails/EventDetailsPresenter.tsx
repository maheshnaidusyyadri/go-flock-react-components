import React, { startTransition, useRef, useState } from "react";
import "./EventDetailsPresenter.scss";

import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonThumbnail,
} from "@ionic/react";

import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import noPreview from "../../images/noPreview.svg";
import Header from "../Header/Header";
import { EventProps } from "@goflock/types/src";
import Footer from "../Footer/Footer";
import DisplayDate from "../../utils/DisplayDate";
import goingIcon from "../../images/icons/going.svg";

import reUpdateIcon from "../../images/icons/reUpdate.svg";
import AddressDisplay from "../Common/AddressDisplay";
import { getDisplayNamewithchr } from "../../utils/utils";
import Yes from "../Common/Icons/Yes";
import No from "../Common/Icons/No";
import NotSure from "../Common/Icons/NotSure";
import EditIcon from "../../images/icons/Edit.svg";
import useToastUtils from "../../utils/ToastUtils";
import RsvpModalPage from "./RsvpModalPage";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  eventRelation,
  isPreview,
  profile,
  deviceContext,
  sendOTP,
  verifyOTP,
  navigateToEventLocation,
  deleteEvent,
  submitRSVP,
  addInvitationCards,
  copyEventLink,
  editEvent,
  inviteMembers,
}) => {
  const [isInviteActive, setIsInviteActive] = useState(false);
  const [, setShowValidation] = useState(false);
  const [, setAdultCount] = useState(0);
  const [, setKidsCount] = useState(0);
  const [, setActiveOption] = useState("yes");
  const [submitRSVPInProgress, setSubmitRSVPInProgress] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { presentToast } = useToastUtils();
  const [sendingOtp] = useState(false);
  const [verifyingOtp] = useState(false);
  const [, setPhoneVerificationState] = useState<
    "start" | "otpSent" | "verified"
  >("start");

  const [showFooter, setShowFooter] = useState(true);

  let scrollTimeout: NodeJS.Timeout | null = null;

  const handleScroll = (event: any) => {
    const currentScrollPosition = event.detail.scrollTop;
    const contentHeight = event.target.clientHeight; // Total scrollable height
    const threshold = contentHeight * 0.15;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      if (currentScrollPosition < threshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }, 250);
  };

  const handleBackAction = () => {
    if (eventRelation.rsvp) {
      if (eventRelation.rsvp.response == "attending") {
        setActiveOption("yes");
      } else if (eventRelation.rsvp.response == "not-attending") {
        setActiveOption("no");
      } else {
        setActiveOption("notSure");
      }
      setAdultCount(eventRelation.rsvp.adultsCount || 0);
      setKidsCount(eventRelation.rsvp.kidsCount || 0);
    }
    startTransition(() => {
      setIsInviteActive(!isInviteActive);
    });

    setPhoneVerificationState("start");
  };

  const handleClick = (option: React.SetStateAction<string>) => {
    setShowValidation(false);
    setActiveOption(option);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: FileList | null = event.target.files;

    if (!files || files.length === 0) {
      console.log("No files selected");
      return;
    }
    // Call addMedia with arrays of base64 strings and metadata
    setSubmitRSVPInProgress(true);
    addInvitationCards(files).finally(() => {
      setSubmitRSVPInProgress(false);
    });
  };

  const copyLink = (eventId: string) => {
    copyEventLink(eventId);
    presentToast("Link copied to clipboard", "bottom");
  };

  return isInviteActive ? (
    <RsvpModalPage
      profile={profile!}
      event={event}
      deleteEvent={deleteEvent}
      submitRSVP={submitRSVP}
      deviceContext={deviceContext!}
      inviteMembers={inviteMembers}
      editEvent={editEvent}
      copyEventLink={copyEventLink}
      navigateToEventLocation={navigateToEventLocation}
      eventRelation={eventRelation!}
      sendOTP={sendOTP}
      verifyOTP={verifyOTP}
      addInvitationCards={addInvitationCards}
      isPreview={isPreview}
      setIsInviteActive={setIsInviteActive}
    />
  ) : (
    <IonPage>
      <Header
        showLogo={true}
        showGoBack={false}
        eventId={event.id}
        event={event}
        title={event.name}
        showMenu={
          eventRelation?.roles?.includes("admin") ||
          eventRelation?.roles?.includes("owner")
        }
        showContactList={false}
        showProgressBar={sendingOtp || verifyingOtp || submitRSVPInProgress}
        deleteEvent={deleteEvent}
        eventRelation={eventRelation}
        inviteMembers={inviteMembers}
        addInvitationCards={addInvitationCards}
        copyEventLink={copyLink}
        editEvent={editEvent}
      />
      <IonContent
        scrollEvents={true}
        onIonScroll={handleScroll}
      >
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <IonGrid className="event-details">
          <IonCard className="event-info">
            {!event.invitationCards?.at(0)?.downloadUrl &&
              ["admin", "owner"].includes(eventRelation?.visitType) && (
                <IonGrid className="invitation-cards">
                  <IonRow className="ion-row">
                    <IonCol>
                      <IonThumbnail
                        className="event-dp"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IonImg
                          className="image-preview"
                          src={noPreview}
                        />
                      </IonThumbnail>
                    </IonCol>
                  </IonRow>
                  <IonItemDivider className="devider"></IonItemDivider>
                </IonGrid>
              )}
            {event.invitationCards && event.invitationCards.length > 0 && (
              <IonRow className="invitation-cards ion-row">
                <IonCol>
                  <IonThumbnail className="event-dp">
                    <IonImg
                      src={event.invitationCards?.at(0)?.downloadUrl}
                      alt="Event"
                    />
                    {["admin", "owner"].includes(eventRelation?.visitType) && (
                      <span
                        className="edit-icon"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IonImg src={EditIcon} />
                      </span>
                    )}
                  </IonThumbnail>
                  <IonItemDivider className="devider"></IonItemDivider>
                </IonCol>
              </IonRow>
            )}
            <IonRow>
              <IonCol>
                <IonText className="event-brief">
                  <div
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></div>
                </IonText>
              </IonCol>
            </IonRow>
            <IonList className="listitems">
              {!["admin", "owner"].includes(eventRelation?.visitType) &&
                eventRelation?.rsvp && (
                  <>
                    <IonItemDivider className="devider"></IonItemDivider>
                    <IonItem className="ion-list">
                      <IonCard className="venue-info">
                        <IonThumbnail className="dp">
                          <IonImg
                            src={goingIcon}
                            alt=" "
                          />
                        </IonThumbnail>
                        <IonCardContent className="event-titles">
                          <IonCardTitle
                            className={`event-title ${
                              eventRelation.rsvp.response === "attending"
                                ? "going"
                                : eventRelation.rsvp.response ===
                                    "not-attending"
                                  ? "not-going"
                                  : eventRelation.rsvp.response === "maybe"
                                    ? "not-sure"
                                    : ""
                            }`}
                          >
                            {eventRelation.rsvp.response == "attending"
                              ? "Going"
                              : eventRelation.rsvp.response == "not-attending"
                                ? "Not Going"
                                : eventRelation.rsvp.response == "maybe"
                                  ? "Not sure"
                                  : ""}
                          </IonCardTitle>
                          <IonCardSubtitle className="event-subtitle">
                            {eventRelation.rsvp.adultsCount} Adults,{" "}
                            {eventRelation.rsvp.kidsCount} children
                          </IonCardSubtitle>
                        </IonCardContent>
                      </IonCard>
                      <IonThumbnail className="event-type">
                        <IonImg
                          src={reUpdateIcon}
                          alt=""
                          onClick={handleBackAction}
                        />
                      </IonThumbnail>
                    </IonItem>
                  </>
                )}
              <IonItemDivider className="devider"></IonItemDivider>
              <IonItem className="ion-list">
                <IonCard className="venue-info">
                  <IonThumbnail className="dp">
                    <IonImg
                      src={clockIcon}
                      alt="Page Back"
                    />
                  </IonThumbnail>
                  <IonCardContent className="event-titles">
                    <IonCardTitle className="event-title">
                      <DisplayDate
                        inputDate={event.time}
                        isTimeRequired={true}
                      />
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonItem>
              <IonItem className="ion-list">
                <IonCard className="venue-info">
                  <IonThumbnail
                    className="dp"
                    onClick={() => navigateToEventLocation(event.id)}
                  >
                    <IonImg
                      src={locationIcon}
                      alt=" "
                    />
                  </IonThumbnail>
                  <IonCardContent className="event-titles">
                    <IonCardTitle className="event-title">
                      <AddressDisplay address={event.location?.name} />
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
                <IonThumbnail
                  className="event-type"
                  onClick={() => navigateToEventLocation(event.id)}
                >
                  <IonImg
                    src={GlobeIcon}
                    alt=""
                  />
                </IonThumbnail>
              </IonItem>
              {
                <>
                  <IonItemDivider className="devider"></IonItemDivider>
                  <IonItem className="ion-list">
                    {event.hostedBy && (
                      <IonCard className="venue-info">
                        <IonThumbnail
                          className="dp"
                          //onClick={() => navigateToEventLocation(event.id)}
                        >
                          {/* <IonImg src={ProfileIcon} alt=" " /> */}
                          <IonAvatar className="profile-dp">
                            {getDisplayNamewithchr(event.hostedBy)}
                          </IonAvatar>
                        </IonThumbnail>
                        <IonCardContent className="event-titles">
                          <IonCardTitle className="event-title">
                            Hosted by
                          </IonCardTitle>
                          <IonCardSubtitle className="event-hostname">
                            {event.hostedBy}
                          </IonCardSubtitle>
                        </IonCardContent>
                      </IonCard>
                    )}
                  </IonItem>
                </>
              }
            </IonList>
          </IonCard>
        </IonGrid>
      </IonContent>
      {!["owner"].includes(eventRelation?.visitType) &&
      !(eventRelation?.rsvp && eventRelation.rsvp?.response) ? (
        <IonFooter
          className={`ion-padding-start ion-padding-end ion-padding-bottom  animated-footer ${
            showFooter ? "visible" : "hidden"
          }`}
        >
          <IonCard className="rsvp-card">
            <IonLabel className="rsvp-title">Are you going?</IonLabel>
            <IonList
              class="rsvp-actions"
              onClick={handleBackAction}
            >
              <IonItem
                className="ionitem"
                onClick={() => handleClick("yes")}
              >
                <IonText
                  class="yes"
                  className="iontext"
                >
                  <Yes />
                  Yes
                </IonText>
              </IonItem>
              <IonItem
                className="ionitem"
                onClick={() => handleClick("no")}
              >
                <IonText
                  class="no"
                  className="iontext"
                >
                  <No />
                  No
                </IonText>
              </IonItem>
              <IonItem
                className="ionitem"
                onClick={() => handleClick("notSure")}
              >
                <IonText
                  class="notSure"
                  className="iontext"
                >
                  <NotSure />
                  Not sure
                </IonText>
              </IonItem>
            </IonList>
          </IonCard>
        </IonFooter>
      ) : (
        (["admin", "owner"].includes(eventRelation?.visitType) ||
          (["member"].includes(eventRelation?.visitType) &&
            eventRelation?.rsvp &&
            eventRelation.rsvp?.response)) && (
          <Footer
            className={`animated-footer ${showFooter ? "visible" : "hidden"}`}
            event={event}
            activeTab={"invitation"}
            settings={event.settings}
            eventRelation={eventRelation}
            //hideFooter={showFooter}
          />
        )
      )}
    </IonPage>
  );
};
export default EventDetailsPresenter;
