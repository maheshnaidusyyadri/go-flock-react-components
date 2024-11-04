import React, { useState } from "react";
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
  IonHeader,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
  IonThumbnail,
} from "@ionic/react";

import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import addUserIcon from "../../images/icons/addUser.svg";
import userTickIcon from "../../images/icons/userTick.svg";
import userCrossIcon from "../../images/icons/userCross.svg";
import helpIcon from "../../images/icons/help.svg";
import ProfileIcon from "../../images/profile.png";
import noPreview from "../../images/noPreview.svg";
import RSVPSuccess from "../../images/RSVP_success.svg";

import Header from "../Header/Header";
import { EventProps, RSVP } from "@goflock/types/src";
import Footer from "../Footer/Footer";
import DisplayDate from "../../utils/DisplayDate";
import ProfileList from "../Common/Profiles/ProfileList";
import MessageIcon from "../../images/icons/message_icon.svg";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import InviteIcon from "../../images/icons/UserPlus.svg";
import CopyIcon from "../../images/icons/copy.svg";
import Copy from "../../images/icons/copy_white.svg";
import kidsIcon from "../../images/Kids.svg";
import adultsIcon from "../../images/Adults.svg";
import plusIcon from "../../images/icons/Plus.svg";
import minusIcon from "../../images/icons/Minus.svg";
import backArrow from "../../images/icons/back-arrow.svg";
import AddressDisplay from "../Common/AddressDisplay";
import CustomPhoneNumber from "../Common/CustomPhone";
import CustomTextarea from "../Common/CustomTextarea";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  eventRelation,
  inviteMembers,
  navigateToEventLocation,
  deleteEvent,
  submitRSVP,
  profile,
}) => {
  const [isActive, setIsActive] = useState(false); // State to manage the class toggle
  const [isInviteActive, setIsInviteActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [activeOption, setActiveOption] = useState("yes");
  const [selectedEventValue, setSelectedEventValue] = useState<
    "attending" | "not-attending" | "maybe" | "not-answered"
  >("not-answered");

  //console.log("profile-profile", profile);

  const [eventErrorMessage, setErrorMessage] = useState<string>("");
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();
  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the class
    setIsOpen(false);
  };
  const toggleGogingClass = () => {
    setIsInviteActive(!isInviteActive);
  };

  const toggleClass2 = () => {
    console.log("toggleClass2", selectedEventValue);
    if (!selectedEventValue) {
      setErrorMessage("Please select an option.");
      return;
    }
    setIsActive(false);
    setIsOpen(!isOpen); // Toggle the class
  };

  const successRSVP = () => {
    setIsActive(!isInviteActive);
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (event: CustomEvent) => {
    setSelectedEventValue(event.detail.value);
    setErrorMessage("");
    console.log("Selected value: ", event.detail.value);
  };
  const handleOnSubmit = (formData: any) => {
    console.log("handleOnSubmit", formData);
    //setIsActive(false);
    setIsOpen(!isOpen);

    submitRSVP(event.id, {
      response: selectedEventValue,
      comment: "",
      count: formData.totalMembers,
    });
  };

  const onError = (error: any) => {
    console.log("error", error);
  };
  const handleClick = (option: React.SetStateAction<string>) => {
    console.log("handleClick", option);
    setShowValidation(false);

    let response: "attending" | "not-attending" | "maybe" | "not-answered" =
      "attending";
    if (option === "no") {
      response = "not-attending";
    } else if (option === "notSure") {
      response = "maybe";
    }

    setActiveOption(option);
    let rsvp: RSVP = {
      response: response,
      count: 4,
      comment: "Happy birthday!!",
      kidsCount: 2,
      adultsCount: 2,
    };

    submitRSVP(event.id, rsvp);
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
  const handleGenerateOtp = (formData: any) => {
    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }
    setIsActive(false);
    setIsOpen(!isOpen);
    console.log("handleGenerateOtp", formData);
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

  return (
    <>
      <IonContent
        className={`eventDetails ${
          !event?.invitationCard?.url ? "no-image" : ""
        }`}
      >
        <Header
          eventId={event.id}
          title={!event.invitationCard ? "" : event.name}
          showMenu={true}
          showContactList={false}
          deleteEvent={deleteEvent}
          eventRelation={eventRelation}
        />
        {!event.invitationCard?.url && (
          <IonCard className="nopreview">
            <IonImg src={noPreview} />
          </IonCard>
        )}

        <IonGrid className="event_details">
          <IonCard className="event_info">
            {!["admin", "owner"].includes(eventRelation?.visitType) && (
              <IonLabel class="event_title">{event.name}</IonLabel>
            )}
            {event.invitationCard?.url && (
              <IonThumbnail className="event_dp">
                <IonImg src={event.invitationCard.url} alt="Event" />
              </IonThumbnail>
            )}
            <IonText className="event_brief">{event.description}</IonText>
            <IonList className="listitems">
              <IonItem className="ion-list">
                <IonCard className="venue_info">
                  <IonThumbnail className="dp">
                    <IonImg src={clockIcon} alt="Page Back" />
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
                    <IonImg src={locationIcon} alt=" " />
                  </IonThumbnail>
                  <IonCardContent className="event_titles">
                    <IonCardTitle className="event_title">
                      <AddressDisplay address={event.location.name} />
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
                <IonThumbnail
                  className="event_type"
                  onClick={() => navigateToEventLocation(event.id)}
                >
                  <IonImg src={GlobeIcon} alt="" />
                </IonThumbnail>
              </IonItem>
              {!["admin", "owner"].includes(eventRelation?.visitType) && (
                <>
                  <IonItemDivider className="devider"></IonItemDivider>
                  <IonItem className="ion-list">
                    <IonCard className="venue_info">
                      <IonThumbnail
                        className="dp"
                        //onClick={() => navigateToEventLocation(event.id)}
                      >
                        <IonImg src={ProfileIcon} alt=" " />
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
                  </IonItem>
                </>
              )}
            </IonList>
          </IonCard>
          {["admin"].includes(eventRelation?.visitType) && (
            <>
              <IonItemDivider className="devider"></IonItemDivider>
              <IonItem className="copy_event">
                <IonText class="copy_text">
                  This is a public event. Copy event link & share it with other!
                  🚀
                </IonText>
                <IonThumbnail class="copy_icon">
                  <IonImg src={CopyIcon}></IonImg>
                </IonThumbnail>
              </IonItem>
            </>
          )}

          {["owner"].includes(eventRelation?.visitType) && (
            <>
              <IonItemDivider className="devider"></IonItemDivider>
              <IonCard className="users_info">
                <IonItem className="users_head">
                  <IonLabel className="ion-label">Invite Guests</IonLabel>
                  <IonThumbnail
                    className="add-user"
                    onClick={() => inviteMembers(event.id)}
                  >
                    <IonImg src={addUserIcon} alt="Event" />
                  </IonThumbnail>
                </IonItem>
                {event.members && (
                  <IonGrid className="users_list">
                    <ProfileList
                      eventId={event.id}
                      eventMembers={event.members}
                      type={"InviteGuests"}
                    />
                  </IonGrid>
                )}
              </IonCard>
            </>
          )}

          {["admin", "owner"].includes(eventRelation?.visitType) && (
            <>
              <IonItemDivider className="devider"></IonItemDivider>
              <IonGrid className="status_sec">
                <IonLabel className="status-title">RSVP Status</IonLabel>
                <IonRow className="status_cards success">
                  {event.members &&
                    event.members.slice(0, 3).map((status, index) => (
                      <IonCol
                        key={status.name}
                        className={
                          index == 0
                            ? "status_card"
                            : index == 1
                            ? "status_card error"
                            : index == 2
                            ? "status_card warning"
                            : "status_card"
                        }
                      >
                        <IonAvatar className="avatar">
                          <IonImg
                            className="ion-img"
                            src={
                              index == 0
                                ? userTickIcon
                                : index == 1
                                ? userCrossIcon
                                : index == 2
                                ? helpIcon
                                : userCrossIcon
                            }
                            alt="Event"
                          />
                        </IonAvatar>
                        <IonLabel className="ion-label">
                          {status?.rsvp?.response}
                        </IonLabel>
                        <span className="devider"></span>
                        <IonLabel className="count">
                          {status?.rsvp?.count}
                        </IonLabel>
                      </IonCol>
                    ))}
                  {/* <IonCol className="status_card">
                    <IonAvatar className="avatar">
                      <IonImg
                        className="ion-img"
                        src={userCrossIcon}
                        alt="Event"
                      />
                    </IonAvatar>
                    <IonLabel className="ion-label">Attending</IonLabel>
                    <span className="devider"></span>
                    <IonLabel className="count">0</IonLabel>
                  </IonCol>
                  <IonCol className="status_card error">
                    <IonAvatar className="avatar">
                      <IonImg
                        className="ion-img"
                        src={userTickIcon}
                        alt="Event"
                      />
                    </IonAvatar>
                    <IonLabel className="ion-label">Not Attending</IonLabel>
                    <span className="devider"></span>
                    <IonLabel className="count">0</IonLabel>
                  </IonCol>
                  <IonCol className="status_card warning">
                    <IonAvatar className="avatar">
                      <IonImg
                        className="ion-img"
                        src={helpIcon}
                        alt="Event"
                      />
                    </IonAvatar>
                    <IonLabel className="ion-label">Not Sure</IonLabel>
                    <span className="devider"></span>
                    <IonLabel className="count">0</IonLabel>
                  </IonCol> */}
                </IonRow>
              </IonGrid>
            </>
          )}
        </IonGrid>
        {["admin"].includes(eventRelation?.visitType) && (
          <IonFooter className="stickyFooter hasFooter">
            <IonButton
              className="primary-btn rounded"
              onClick={() => inviteMembers(event.id)}
            >
              <IonImg src={Copy} />
              Copy link
            </IonButton>
          </IonFooter>
        )}
        {["owner"].includes(eventRelation?.visitType) && (
          <IonFooter className="stickyFooter hasFooter">
            <IonButton
              className="primary-btn rounded"
              onClick={() => inviteMembers(event.id)}
            >
              <IonImg src={InviteIcon} />
              Invite Guests
            </IonButton>
          </IonFooter>
        )}
        {!["admin", "owner"].includes(eventRelation?.visitType) && (
          <IonFooter className="stickyFooter">
            {/* <IonButton onClick={toggleClass} className="primary-btn rounded">
              Submit your response
            </IonButton> */}
            <IonCard className="rsvp_card">
              <IonLabel className="rsvp_title">Are you going?</IonLabel>
              <IonList class="rsvp_actions" onClick={toggleGogingClass}>
                <IonItem className="ionitem" onClick={() => handleClick("yes")}>
                  <IonText class="yes" className="iontext">
                    Yes
                  </IonText>
                </IonItem>
                <IonItem className="ionitem" onClick={() => handleClick("no")}>
                  <IonText class="no" className="iontext">
                    No
                  </IonText>
                </IonItem>
                <IonItem
                  className="ionitem"
                  onClick={() => handleClick("notSure")}
                >
                  <IonText class="notSure" className="iontext">
                    Not sure
                  </IonText>
                </IonItem>
              </IonList>
            </IonCard>
          </IonFooter>
        )}
        {["admin", "owner"].includes(eventRelation?.visitType) && (
          <Footer eventId={event.id} activeTab={"home"} />
        )}
      </IonContent>

      <IonGrid className={`popover_action ${isActive ? " " : ""}`}>
        <IonCardContent class="overlay" onClick={toggleClass}></IonCardContent>
        <IonCard className="action_cnt">
          <IonImg class="img_icon" src={MessageIcon} />
          <IonCardTitle className="card_title">
            Will you join the Event?
          </IonCardTitle>
          <IonRadioGroup
            value={selectedEventValue}
            class="list_radio_group"
            onIonChange={handleRadioChange}
          >
            <IonRadio value="attending">Yes</IonRadio>
            <IonRadio value="not-attending">No</IonRadio>
            <IonRadio value="maybe">Not Sure</IonRadio>
          </IonRadioGroup>
          {eventErrorMessage && (
            <IonText class="error" color="danger" style={{ fontSize: 12 }}>
              {eventErrorMessage}
            </IonText>
          )}
          <IonButton onClick={toggleClass2} className="primary-btn rounded">
            Submit your response
          </IonButton>
        </IonCard>
      </IonGrid>

      {isOpen && (
        <IonGrid className={`popover_action ${isOpen ? " " : ""}`}>
          <IonCardContent
            class="overlay"
            onClick={toggleClass2}
          ></IonCardContent>
          <IonCard className="action_cnt">
            <IonImg class="img_icon" src={MessageIcon} />
            <IonCardTitle className="card_title">
              How many members will come with you?
            </IonCardTitle>
            <FormProvider {...methods}>
              <IonList className="form-group">
                <CustomInput
                  placeholder={"Enter number"}
                  label={""}
                  fieldName={"totalMembers"}
                  isRequired={true}
                  errors={errors}
                  errorText={"Members"}
                  register={register}
                  inputType={"number"}
                />
              </IonList>
              <IonButton
                onClick={handleSubmit(handleOnSubmit, onError)}
                className="primary-btn rounded"
              >
                Complete
              </IonButton>
            </FormProvider>
            {/* <IonList className="form-group">
            <IonInput
              label=""
              labelPlacement="stacked"
              placeholder="Enter number"
            />
          </IonList>
          <IonButton
            onClick={toggleClass2}
            className="primary-btn rounded"
          >
            Complete
          </IonButton> */}
          </IonCard>
        </IonGrid>
      )}

      {isInviteActive && (
        <IonGrid className={`${isInviteActive ? "rsvp_modal active" : ""}`}>
          <IonHeader class="modal_header">
            <IonImg
              src={backArrow}
              alt="Page Back"
              onClick={toggleGogingClass}
            />
            <IonLabel>Are you going?</IonLabel>
          </IonHeader>
          <IonList className="rsvp_actions">
            <IonItem className="ionitem" onClick={() => handleClick("yes")}>
              <IonText
                className={`iontext yes ${
                  activeOption === "yes" ? "active" : ""
                }`}
              >
                Yes
              </IonText>
            </IonItem>
            <IonItem className="ionitem" onClick={() => handleClick("no")}>
              <IonText
                className={`iontext no ${
                  activeOption === "no" ? "active" : ""
                }`}
              >
                No
              </IonText>
            </IonItem>
            <IonItem className="ionitem" onClick={() => handleClick("notSure")}>
              <IonText
                className={`iontext notSure ${
                  activeOption === "notSure" ? "active" : ""
                }`}
              >
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
                      <IonLabel className="counter_value">{kidsCount}</IonLabel>
                      <IonButton
                        className="counter_btn"
                        onClick={incrementKids}
                      >
                        <IonImg src={plusIcon} />
                      </IonButton>
                    </IonCard>
                  </IonCard>
                </IonCard>
              </IonGrid>
            )}
            {showValidation && (
              <IonText class="error" color="danger" style={{ fontSize: 12 }}>
                {"* At least one adult or kid is required"}
              </IonText>
            )}

            <IonGrid className="guest_form">
              <div className="form-container">
                <IonCardContent className="pad0">
                  {activeOption === "no" && (
                    <div className="form-group">
                      <CustomTextarea
                        placeholder={"Write a note..."}
                        label={"Send a note (Optional)"}
                        fieldName={"note"}
                        isRequired={false}
                        errors={errors}
                        register={register}
                      />
                    </div>
                  )}
                  {!profile && (
                    <>
                      <div className="form-group">
                        <CustomInput
                          placeholder={"Enter your name"}
                          label={"Name"}
                          fieldName={"name"}
                          isRequired={true}
                          errors={errors}
                          errorText={"Name"}
                          register={register}
                        />
                      </div>
                      <div className="form-group">
                        <CustomPhoneNumber
                          control={control}
                          fieldName="phone"
                          label="Phone Number"
                          isRequired={true}
                          errors={errors}
                          register={register}
                          errorText={"Phone Number"}
                        />
                      </div>
                    </>
                  )}
                </IonCardContent>
              </div>
            </IonGrid>
            <IonFooter
              className="stickyFooter"
              onClick={handleSubmit(handleGenerateOtp, onGenerateError)}
            >
              <IonButton className="primary-btn rounded">
                GENERATE OTP
              </IonButton>
            </IonFooter>
          </FormProvider>
        </IonGrid>
      )}
      <IonGrid className={`rsvp_modal ${isOpen ? "active" : ""}`}>
        <IonCard className="rsvp_success">
          <IonImg src={RSVPSuccess} />
          <IonLabel className="success_label">RSVP Submitted!</IonLabel>
        </IonCard>
        <IonButton className="primary-btn rounded" onClick={successRSVP}>
          Go back to invitation page
        </IonButton>
      </IonGrid>
    </>
  );
};
export default EventDetailsPresenter;
