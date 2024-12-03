import React, { useRef, useState } from "react";
import "./EventDetailsPresenter.scss";

import {
  IonAvatar,
  IonButton,
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
  useIonToast,
} from "@ionic/react";

import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import noPreview from "../../images/noPreview.svg";
import Header from "../Header/Header";
import { EventProps, RSVP } from "@goflock/types/src";
import Footer from "../Footer/Footer";
import DisplayDate from "../../utils/DisplayDate";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import kidsIcon from "../../images/Kids.svg";
import adultsIcon from "../../images/Adults.svg";
import plusIcon from "../../images/icons/Plus.svg";
import goingIcon from "../../images/icons/going.svg";

import minusIcon from "../../images/icons/Minus.svg";
import reUpdateIcon from "../../images/icons/reUpdate.svg";
import AddressDisplay from "../Common/AddressDisplay";
import CustomTextarea from "../Common/CustomTextarea";
import { getDisplayNamewithchr } from "../../utils/utils";
import Yes from "../Common/Icons/Yes";
import No from "../Common/Icons/No";
import NotSure from "../Common/Icons/NotSure";
import EditIcon from "../../images/icons/Edit.svg";
import party from "party-js";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  eventRelation,
  navigateToEventLocation,
  deleteEvent,
  submitRSVP,
  profile,
  addInvitationCards,
  copyEventLink,
  editEvent,
  inviteMembers,
}) => {
  const [isInviteActive, setIsInviteActive] = useState(false);
  const [, setIsOpen] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [activeOption, setActiveOption] = useState("yes");
  const [submitRSVPInProgress, setSubmitRSVPInProgress] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showFooter] = useState(true);
  // let lastScrollTop = useRef(0);
  // let scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const [present] = useIonToast();

  const presentToast = (position: "top" | "middle" | "bottom") => {
    present({
      message: "RSVP successful!",
      color: "success",
      duration: 2000,
      position: position,
    });
  };

  const toggleGogingClass = () => {
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
    setIsInviteActive(!isInviteActive);
  };

  const handleClick = (option: React.SetStateAction<string>) => {
    setShowValidation(false);
    // setAdultCount(0);
    //setKidsCount(0);
    setActiveOption(option);
  };
  const incrementAdults = () => {
    setShowValidation(false);
    setAdultCount(adultCount + 1);
  };
  const decrementAdults = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
      setShowValidation(false);
    } else {
      //setShowValidation(true);
    }
  };

  const incrementKids = () => {
    setShowValidation(false);
    setKidsCount(kidsCount + 1);
  };
  const decrementKids = () => {
    if (kidsCount > 0) {
      setKidsCount(kidsCount - 1);
      setShowValidation(false);
    } else {
      //setShowValidation(true);
    }
  };
  const handleRsvpSubmission = (formData: any) => {
    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }
    submitRsvpAction(formData);
  };

  const onGenerateError = (error: any) => {
    console.log("onGenerateError", error);
    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }
  };

  const submitRsvpAction = (formData: any) => {
    let response: "attending" | "not-attending" | "maybe" | "not-answered" =
      "attending";
    if (activeOption === "no") {
      response = "not-attending";
    } else if (activeOption === "notSure") {
      response = "maybe";
    } else if (activeOption === "yes") {
      response = "attending";
    }

    let rsvp: RSVP = {
      response: response,
      count: 0,
      comment: formData.note || "",
      kidsCount: 0,
      adultsCount: 0,
      name: formData.name,
    };
    if (activeOption !== "no") {
      rsvp.count = kidsCount + adultCount;
      rsvp.kidsCount = kidsCount;
      rsvp.adultsCount = adultCount;
    }

    setSubmitRSVPInProgress(true);
    submitRSVP(event.id, rsvp)
      .then((res) => {
        console.log("submitRSVP-res", res);
        successRSVP();
      })
      .catch((err) => {
        console.error("submitRSVP-error", err);
      })
      .finally(() => {
        setSubmitRSVPInProgress(false);
      });
  };

  const handleConfetti = () => {
    party.confetti(document.body, {
      count: party.variation.range(100, 1000),
      speed: party.variation.range(100, 300),
    });
  };

  const successRSVP = () => {
    handleConfetti();
    presentToast("bottom");
    reset();
    setIsOpen(false);
    setIsInviteActive(false);
    setKidsCount(0);
    setAdultCount(0);
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

  if (eventRelation.visitType === "unauthorized") {
    return <>Event does not exist or not authorized</>;
  }

  // This is buggy and wiggly
  // const handleScroll = (e: any) => {
  //   const currentScrollTop = e.detail.scrollTop;
  //   if (currentScrollTop > lastScrollTop) {
  //     // Scrolling down
  //     if (showFooter) {
  //       setShowFooter(false);
  //       console.log("Footer hidden");
  //     }
  //   } else if (currentScrollTop < lastScrollTop) {
  //     // Scrolling up
  //     if (!showFooter) {
  //       setShowFooter(true);
  //       console.log("Footer shown");
  //     }
  //   }
  //   // Clear the previous timeout if it exists
  //   if (scrollTimeout.current) {
  //     clearTimeout(scrollTimeout.current);
  //   }
  //   // Set a timeout to show the footer after scrolling stops
  //   scrollTimeout.current = setTimeout(() => {
  //     setShowFooter(true);
  //     console.log("Footer shown after scroll stops");
  //   }, 1000); // Adjust timeout duration as needed
  //   lastScrollTop = currentScrollTop;
  // };

  return (
    <IonPage>
      <Header
        showLogo={true}
        showGoBack={false}
        eventId={event.id}
        title={event.name}
        showMenu={
          eventRelation?.roles?.includes("admin") ||
          eventRelation?.roles?.includes("owner")
        }
        showContactList={false}
        showProgressBar={submitRSVPInProgress}
        deleteEvent={deleteEvent}
        eventRelation={eventRelation}
        inviteMembers={inviteMembers}
        addInvitationCards={addInvitationCards}
        copyEventLink={copyEventLink}
        editEvent={editEvent}
      />
      <IonContent>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <IonGrid className="event_details">
          <IonCard className="event_info">
            {!event.invitationCards?.at(0)?.downloadUrl &&
              ["admin", "owner"].includes(eventRelation?.visitType) && (
                <IonGrid className="invitation-cards">
                  <IonRow className="ion-row">
                    <IonCol>
                      <IonThumbnail
                        className="event_dp"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IonImg
                          className="image-preview"
                          src={noPreview}
                        />
                      </IonThumbnail>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
            {event.invitationCards && event.invitationCards.length > 0 && (
              <IonRow className="invitation-cards ion-row">
                <IonCol>
                  <IonThumbnail className="event_dp">
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
                </IonCol>
              </IonRow>
            )}
            <IonRow>
              <IonCol>
                <IonItemDivider className="devider"></IonItemDivider>
                <IonText className="event_brief">
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
                      <IonCard className="venue_info">
                        <IonThumbnail className="dp">
                          <IonImg
                            src={goingIcon}
                            alt=" "
                          />
                        </IonThumbnail>
                        <IonCardContent className="event_titles">
                          <IonCardTitle
                            className={`event_title ${
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
                          <IonCardSubtitle className="event_subtitle">
                            {eventRelation.rsvp.adultsCount} Adults,{" "}
                            {eventRelation.rsvp.kidsCount} children
                          </IonCardSubtitle>
                        </IonCardContent>
                      </IonCard>
                      <IonThumbnail className="event_type">
                        <IonImg
                          src={reUpdateIcon}
                          alt=""
                          onClick={toggleGogingClass}
                        />
                      </IonThumbnail>
                    </IonItem>
                  </>
                )}
              <IonItemDivider className="devider"></IonItemDivider>
              <IonItem className="ion-list">
                <IonCard className="venue_info">
                  <IonThumbnail className="dp">
                    <IonImg
                      src={clockIcon}
                      alt="Page Back"
                    />
                  </IonThumbnail>
                  <IonCardContent className="event_titles">
                    <IonCardTitle className="event_title">
                      <DisplayDate
                        inputDate={event.time}
                        isTimeRequired={true}
                      />
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonItem>
              <IonItem className="ion-list">
                <IonCard className="venue_info">
                  <IonThumbnail
                    className="dp"
                    onClick={() => navigateToEventLocation(event.id)}
                  >
                    <IonImg
                      src={locationIcon}
                      alt=" "
                    />
                  </IonThumbnail>
                  <IonCardContent className="event_titles">
                    <IonCardTitle className="event_title">
                      <AddressDisplay address={event.location?.name} />
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
                <IonThumbnail
                  className="event_type"
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
                      <IonCard className="venue_info">
                        <IonThumbnail
                          className="dp"
                          //onClick={() => navigateToEventLocation(event.id)}
                        >
                          {/* <IonImg src={ProfileIcon} alt=" " /> */}
                          <IonAvatar className="profile-dp">
                            {getDisplayNamewithchr(event.hostedBy)}
                          </IonAvatar>
                        </IonThumbnail>
                        <IonCardContent className="event_titles">
                          <IonCardTitle className="event_title">
                            Hosted by
                          </IonCardTitle>
                          <IonCardSubtitle className="event_hostname">
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
        <IonFooter className="ion-padding-start ion-padding-end ion-padding-bottom ">
          <IonCard className="rsvp_card">
            <IonLabel className="rsvp_title">Are you going?</IonLabel>
            <IonList
              class="rsvp_actions"
              onClick={toggleGogingClass}
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
            eventId={event.id}
            activeTab={"invitation"}
            settings={event.settings}
            eventRelation={eventRelation}
            hideFooter={showFooter}
          />
        )
      )}
      <IonGrid
        className={`${isInviteActive ? "rsvp_modal active" : "rsvp_modal"}`}
      >
        {isInviteActive && (
          <>
            <Header
              title={"Are you going?"}
              showGoBack={true}
              leftButtonAction={toggleGogingClass}
              showProgressBar={submitRSVPInProgress}
            ></Header>
            <IonContent>
              <IonList className="rsvp_actions">
                <IonItem
                  className="ionitem"
                  onClick={() => handleClick("yes")}
                >
                  <IonText
                    className={`iontext yes ${
                      activeOption === "yes" ? "active" : ""
                    }`}
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
                    className={`iontext no ${
                      activeOption === "no" ? "active" : ""
                    }`}
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
                    className={`iontext notSure ${
                      activeOption === "notSure" ? "active" : ""
                    }`}
                  >
                    <NotSure />
                    Not sure
                  </IonText>
                </IonItem>
              </IonList>
              <FormProvider {...methods}>
                {activeOption !== "no" && (
                  <IonGrid className="guest_section">
                    <IonCard className="guest_info">
                      <IonCard className="card_cnt">
                        <IonThumbnail>
                          <IonImg src={adultsIcon} />
                        </IonThumbnail>
                        <IonLabel className="guest_type">Adults</IonLabel>
                        <IonCard className="counter_sec">
                          <IonButton
                            className="counter_btn"
                            onClick={decrementAdults}
                          >
                            <IonImg src={minusIcon} />
                          </IonButton>
                          <IonLabel className="counter_value">
                            {adultCount}
                          </IonLabel>
                          <IonButton
                            className="counter_btn"
                            onClick={incrementAdults}
                          >
                            <IonImg src={plusIcon} />
                          </IonButton>
                        </IonCard>
                      </IonCard>
                    </IonCard>
                    <IonCard className="guest_info">
                      <IonCard className="card_cnt">
                        <IonThumbnail>
                          <IonImg src={kidsIcon} />
                        </IonThumbnail>
                        <IonLabel class="guest_type">Kids</IonLabel>
                        <IonCard className="counter_sec">
                          <IonButton
                            className="counter_btn"
                            onClick={decrementKids}
                          >
                            <IonImg src={minusIcon} />
                          </IonButton>
                          <IonLabel className="counter_value">
                            {kidsCount}
                          </IonLabel>
                          <IonButton
                            className="counter_btn"
                            onClick={incrementKids}
                          >
                            <IonImg src={plusIcon} />
                          </IonButton>
                        </IonCard>
                      </IonCard>
                    </IonCard>
                    {showValidation && (
                      <IonText class="form-error">
                        {"* At least one adult or kid is required"}
                      </IonText>
                    )}
                  </IonGrid>
                )}

                <IonGrid className="guest_form">
                  {activeOption === "no" && (
                    <IonRow>
                      <IonCol className="form-group ion-padding-bottom">
                        <CustomTextarea
                          placeholder={"Write a note..."}
                          label={"Send a note (Optional)"}
                          fieldName={"note"}
                          isRequired={false}
                          errors={errors}
                          register={register}
                        />
                      </IonCol>
                    </IonRow>
                  )}
                  {(!profile || profile.prefName === "") && (
                    <>
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          <CustomInput
                            placeholder={"Enter your name"}
                            label={"Your Name"}
                            fieldName={"name"}
                            isRequired={true}
                            errors={errors}
                            errorText={"Name"}
                            register={register}
                          />
                        </IonCol>
                      </IonRow>
                    </>
                  )}
                </IonGrid>
              </FormProvider>
            </IonContent>
            <IonFooter
              className="stickyFooter"
              onClick={handleSubmit(handleRsvpSubmission, onGenerateError)}
            >
              <IonButton
                disabled={submitRSVPInProgress}
                className="primary-btn rounded"
              >
                {submitRSVPInProgress ? "Submitting RSVP" : "Submit RSVP"}
              </IonButton>
            </IonFooter>
          </>
        )}
      </IonGrid>

      {/* On successful RSVP */}
      {/* {showSuccess && (
        <IonGrid
          className={`rsvp_modal success_modal ${showSuccess ? "active" : ""}`}
        >
          <IonContent>
            <IonGrid className="rsvp_success-cnt ion-no-padding">
              <IonCard className="rsvp_success ion-no-margin">
                <IonImg src={RSVPSuccess} />
                <IonLabel className="success_label">RSVP Submitted!</IonLabel>
              </IonCard>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonButton
              className="primary-btn rounded"
              onClick={successRSVP}
            >
              Go back to invitation page
            </IonButton>
          </IonFooter>
        </IonGrid>
      )} */}
    </IonPage>
  );
};
export default EventDetailsPresenter;
