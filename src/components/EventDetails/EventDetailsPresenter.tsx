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

import Header from "../Header/Header";
import { EventProps } from "@goflock/types/src";
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
import backArrow from "../../images/icons/back-arrow.svg";
import AddressDisplay from "../Common/AddressDisplay";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  eventRelation,
  inviteMembers,
  navigateToEventLocation,
  deleteEvent,
  submitRSVP,
}) => {
  const [isActive, setIsActive] = useState(false); // State to manage the class toggle
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEventValue, setSelectedEventValue] = useState<
    "attending" | "not-attending" | "maybe" | "not-answered"
  >("not-answered");
  const [eventErrorMessage, setErrorMessage] = useState<string>("");
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the class
    setIsOpen(false);
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

  const handleRadioChange = (event: CustomEvent) => {
    setSelectedEventValue(event.detail.value);
    setErrorMessage("");
    console.log("Selected value: ", event.detail.value);
  };
  const handleOnSubmit = (formData: any) => {
    console.log("handleOnSubmit", formData);
    setIsActive(false);
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

  const [activeOption, setActiveOption] = useState("yes"); // default active

  const handleClick = (option: React.SetStateAction<string>) => {
    setActiveOption(option);
  };

  return (
    <>
      <IonContent
        className={`eventDetails ${
          !event.invitationCard.url ? "no-image" : ""
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
        {!event.invitationCard.url && (
          <IonCard className="nopreview">
            <IonImg src={noPreview} />
          </IonCard>
        )}

        <IonGrid className="event_details">
          <IonCard className="event_info">
            {!["admin", "owner"].includes(eventRelation?.visitType) && (
              <IonLabel class="event_title">{event.name}</IonLabel>
            )}
            {event.invitationCard.url && (
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
              <IonList class="rsvp_actions" onClick={toggleClass}>
                <IonItem className="ionitem">
                  <IonText class="yes" className="iontext">
                    Yes
                  </IonText>
                </IonItem>
                <IonItem className="ionitem">
                  <IonText class="no" className="iontext">
                    No
                  </IonText>
                </IonItem>
                <IonItem className="ionitem">
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

      <IonGrid className={`popover_action ${isOpen ? " " : ""}`}>
        <IonCardContent class="overlay" onClick={toggleClass2}></IonCardContent>
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

      <IonGrid className={`rsvp_modal ${isActive ? "active" : ""}`}>
        <IonHeader class="modal_header">
          <IonImg src={backArrow} alt="Page Back" onClick={toggleClass} />
          <IonLabel>Are you going?</IonLabel>
        </IonHeader>
        <IonList className="rsvp_actions">
          <IonItem className="ionitem" onClick={() => handleClick("yes")}>
            <IonText
              className={`iontext yes ${activeOption === "" ? "active" : ""}`}
            >
              Yes
            </IonText>
          </IonItem>
          <IonItem className="ionitem" onClick={() => handleClick("no")}>
            <IonText
              className={`iontext no ${activeOption === "" ? "active" : ""}`}
            >
              No
            </IonText>
          </IonItem>
          <IonItem className="ionitem" onClick={() => handleClick("notSure")}>
            <IonText
              className={`iontext notSure ${
                activeOption === "" ? "active" : ""
              }`}
            >
              Not sure
            </IonText>
          </IonItem>
        </IonList>
        <IonGrid className="guest_section">
          <IonCard className="guest_info">
            <IonCard className="card_cnt">
              <IonThumbnail>
                <IonImg src={adultsIcon} />
              </IonThumbnail>
              <IonLabel class="guest_type">Adults</IonLabel>
            </IonCard>
          </IonCard>
          <IonCard className="guest_info">
            <IonCard className="card_cnt">
              <IonThumbnail>
                <IonImg src={kidsIcon} />
              </IonThumbnail>
              <IonLabel class="guest_type">Kids</IonLabel>
            </IonCard>
          </IonCard>
        </IonGrid>
      </IonGrid>
    </>
  );
};
export default EventDetailsPresenter;
