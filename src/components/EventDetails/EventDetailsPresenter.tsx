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
  IonHeader,
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
import { EventProps, RSVP } from "@goflock/types/src";
import Footer from "../Footer/Footer";
import DisplayDate from "../../utils/DisplayDate";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import CopyIcon from "../../images/icons/copy.svg";
import Copy from "../../images/icons/copy_white.svg";
import kidsIcon from "../../images/Kids.svg";
import adultsIcon from "../../images/Adults.svg";
import plusIcon from "../../images/icons/Plus.svg";
import goingIcon from "../../images/icons/going.svg";

import minusIcon from "../../images/icons/Minus.svg";
import backArrow from "../../images/icons/back-arrow.svg";
import reUpdateIcon from "../../images/icons/reUpdate.svg";
import AddressDisplay from "../Common/AddressDisplay";
import CustomPhoneNumber from "../Common/CustomPhone";
import CustomTextarea from "../Common/CustomTextarea";
import RSVPSuccess from "../../images/RSVP_success.svg";
import OtpVerification from "../Common/OtpVerification";
import { getDisplayNamewithchr } from "../../utils/utils";
import Yes from "../Common/Icons/Yes";
import No from "../Common/Icons/No";
import NotSure from "../Common/Icons/NotSure";
import EditIcon from "../../images/icons/Edit.svg";

const EventDetailsPresenter: React.FC<EventProps> = ({
  event,
  eventRelation,
  inviteMembers,
  navigateToEventLocation,
  deleteEvent,
  submitRSVP,
  profile,
  sendOTP,
  verifyOTP,
  addInvitationCards,
}) => {
  const [isInviteActive, setIsInviteActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [activeOption, setActiveOption] = useState("yes");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
  } = useForm();

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
    setAdultCount(0);
    setKidsCount(0);
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
  const handleGenerateOtp = (formData: any) => {
    if (adultCount === 0 && kidsCount === 0 && activeOption !== "no") {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }
    if (profile) {
      handleSubmitRSVP(formData);
      //setShowSuccess(!showSuccess);
    } else {
      console.log("formData", formData);
      let phoneNumber = formData.phone;
      sendOTP(phoneNumber).then((result) => {
        console.log("Send-Otp-res", result);
        setIsOpen(!isOpen);
      });
    }
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
  const handleVerifyOTP = (formData: any) => {
    console.log("handleVerifyOTP-Data", formData);
    verifyOTP(formData.phone, formData.otp).then((result) => {
      console.log("veifyOtp-res", result);
      if (result) {
        handleSubmitRSVP(formData);
      }
    });
  };
  const handleSubmitRSVP = (formData: any) => {
    console.log("handleSubmitRSVP", formData);
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
      count: kidsCount + adultCount,
      comment: formData.note || "",
      kidsCount: kidsCount,
      adultsCount: adultCount,
    };
    submitRSVP(event.id, rsvp).then((res) => {
      console.log("submitRSVP-res", res);
      setShowSuccess(!showSuccess);
    });
  };
  const successRSVP = () => {
    reset();
    setShowSuccess(false);
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
    await addInvitationCards(files);
  };

  if (eventRelation.visitType === "unauthorized") {
    return <>Event does not exist or not authorized</>;
  }

  return (
    <IonPage>
      <Header
        showLogo={true}
        showGoBack={false}
        eventId={event.id}
        title={event.name}
        showMenu={true}
        showContactList={false}
        deleteEvent={deleteEvent}
        eventRelation={eventRelation}
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
                          src={
                            event.invitationCards?.at(0)?.downloadUrl ||
                            noPreview
                          }
                        />
                      </IonThumbnail>
                    </IonCol>
                    {/* <IonCol>
                      <IonThumbnail className="event_dp">
                        <IonImg src={noImage} />
                      </IonThumbnail>
                    </IonCol>
                    <IonCol>
                      <IonThumbnail className="event_dp">
                        <IonImg src={noImage} />
                      </IonThumbnail>
                    </IonCol>
                    <IonCol>
                      <IonThumbnail className="event_dp">
                        <IonImg src={noImage} />
                      </IonThumbnail>
                    </IonCol> */}
                  </IonRow>
                </IonGrid>
              )}
            {event.invitationCards && event.invitationCards.length > 0 && (
              <IonGrid className="invitation-cards">
                <IonRow className="ion-row">
                  <IonCol>
                    <IonThumbnail className="event_dp">
                      <IonImg
                        src={event.invitationCards?.at(0)?.downloadUrl}
                        alt="Event"
                      />
                      <span
                        className="edit-icon"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <IonImg src={EditIcon} />
                      </span>
                    </IonThumbnail>
                  </IonCol>
                  {/* <IonCol>
                    <IonThumbnail className="event_dp">
                      <IonImg src={noImage} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol>
                    <IonThumbnail className="event_dp">
                      <IonImg src={noImage} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol>
                    <IonThumbnail className="event_dp">
                      <IonImg src={noImage} />
                    </IonThumbnail>
                  </IonCol> */}
                </IonRow>
              </IonGrid>
            )}
            <IonText className="event_brief">
              <div
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></div>
            </IonText>
            <IonList className="listitems">
              {!["admin", "owner"].includes(eventRelation?.visitType) &&
                eventRelation?.rsvp && (
                  <IonItem className="ion-list">
                    <IonCard className="venue_info">
                      <IonThumbnail className="dp">
                        <IonImg src={goingIcon} alt=" " />
                      </IonThumbnail>
                      <IonCardContent className="event_titles">
                        <IonCardTitle
                          className={`event_title ${
                            eventRelation.rsvp.response === "attending"
                              ? "going"
                              : eventRelation.rsvp.response === "not-attending"
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
                )}
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
                      <AddressDisplay address={event.location?.name} />
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
        </IonGrid>
      </IonContent>
      {["admin"].includes(eventRelation?.visitType) && (
        <IonFooter className="ion-padding">
          <IonButton
            className="primary-btn rounded"
            onClick={() => inviteMembers(event.id)}
          >
            <IonImg src={Copy} />
            Copy link
          </IonButton>
        </IonFooter>
      )}
      {!["owner"].includes(eventRelation?.visitType) &&
        !(eventRelation?.rsvp && eventRelation.rsvp?.response) && (
          <IonFooter className="ion-padding-start ion-padding-end ion-padding-bottom">
            <IonCard className="rsvp_card">
              <IonLabel className="rsvp_title">Are you going?</IonLabel>
              <IonList class="rsvp_actions" onClick={toggleGogingClass}>
                <IonItem className="ionitem" onClick={() => handleClick("yes")}>
                  <IonText class="yes" className="iontext">
                    <Yes />
                    Yes
                  </IonText>
                </IonItem>
                <IonItem className="ionitem" onClick={() => handleClick("no")}>
                  <IonText class="no" className="iontext">
                    <No />
                    No
                  </IonText>
                </IonItem>
                <IonItem
                  className="ionitem"
                  onClick={() => handleClick("notSure")}
                >
                  <IonText class="notSure" className="iontext">
                    <NotSure />
                    Not sure
                  </IonText>
                </IonItem>
              </IonList>
            </IonCard>
          </IonFooter>
        )}

      {(["admin", "owner"].includes(eventRelation?.visitType) ||
        (["member"].includes(eventRelation?.visitType) &&
          eventRelation?.rsvp &&
          eventRelation.rsvp?.response)) && (
        <Footer
          eventId={event.id}
          activeTab={"invitation"}
          settings={event.settings}
          eventRelation={eventRelation}
        />
      )}

      <IonGrid
        className={`${isInviteActive ? "rsvp_modal active" : "rsvp_modal"}`}
      >
        {isInviteActive && (
          <>
            <IonHeader class="modal_header">
              <IonImg
                src={backArrow}
                alt="Page Back"
                onClick={toggleGogingClass}
              />
              <IonLabel>Are you going?</IonLabel>
            </IonHeader>
            <IonContent>
              <IonList className="rsvp_actions">
                <IonItem className="ionitem" onClick={() => handleClick("yes")}>
                  <IonText
                    className={`iontext yes ${
                      activeOption === "yes" ? "active" : ""
                    }`}
                  >
                    <Yes />
                    Yes
                  </IonText>
                </IonItem>
                <IonItem className="ionitem" onClick={() => handleClick("no")}>
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
                  {!profile && (
                    <>
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          <CustomInput
                            placeholder={"Enter your name"}
                            label={"Name"}
                            fieldName={"name"}
                            isRequired={true}
                            errors={errors}
                            errorText={"Name"}
                            register={register}
                          />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol className="form-group">
                          <CustomPhoneNumber
                            control={control}
                            fieldName="phone"
                            isRequired={true}
                            errors={errors}
                            register={register}
                            errorText={"Mobile Number"}
                            onPhoneChange={(e: any) => setPhoneNumber(e)}
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
              onClick={handleSubmit(handleGenerateOtp, onGenerateError)}
            >
              <IonButton className="primary-btn rounded">
                {profile ? "Submit" : "Send OTP"}
              </IonButton>
            </IonFooter>
          </>
        )}
      </IonGrid>

      {isOpen && (
        <IonGrid className={`rsvp_modal ${isOpen ? "active" : ""}`}>
          <FormProvider {...methods}>
            <IonContent>
              <OtpVerification
                control={control}
                phoneNumber={phoneNumber}
                errors={errors}
                fieldName="otp"
                isRequired={true}
              />
            </IonContent>
            <IonFooter>
              <IonButton
                expand="block"
                shape="round"
                className="primary-btn"
                onClick={handleSubmit(handleVerifyOTP, onGenerateError)}
              >
                {"Verify OTP"}
              </IonButton>
            </IonFooter>
          </FormProvider>
        </IonGrid>
      )}
      {showSuccess && (
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
            <IonButton className="primary-btn rounded" onClick={successRSVP}>
              Go back to invitation page
            </IonButton>
          </IonFooter>
        </IonGrid>
      )}
    </IonPage>
  );
};
export default EventDetailsPresenter;
