import React, { useEffect, useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonButton,
  IonContent,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonText,
  IonFooter,
  IonGrid,
  IonImg,
  IonPage,
  IonSelect,
  IonItem,
  IonSelectOption,
  IonThumbnail,
  IonCol,
  IonRow,
} from "@ionic/react";
import {
  CreateNewEventProps,
  LocationInfo,
  DraftEvent,
  Event,
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
import Success from "../../images/celebration.svg";
import privateEventIcon from "../../images/icons/privateEvent.svg";
import publicEventIcon from "../../images/icons/publicEvent.svg";
import mediaIcon from "../../images/icons/media_circle.svg";
import recordsIcon from "../../images/icons/record_circle.svg";
import currencyIcon from "../../images/icons/currency.svg";
import nextIcon from "../../images/icons/next.svg";

import PlaceSearch from "./PlaceSearch";
import { EventVisibility } from "@goflock/types";
import Header from "../Header/Header";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import CustomSelect from "../Common/CustomSelect";
import CustomDateTime from "../Common/CustomDateTime";
//import { formatTime } from "../../utils/utils";
import moment from "moment";
import LexicalEditor from "../Common/LexicalEditor/CustomLexicalEditor";

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
  mode = "detail",
}) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationInfo | null>();
  const [eventVisibility, setEventVisibility] = useState<EventVisibility>();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const currentDate = new Date();
  const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));
  const tomorrowISOString = tomorrow.toISOString();
  const [startDate, setStartDate] = useState<string>(tomorrowISOString); // Default to next day
  const [endDate, setEndDate] = useState<string>(tomorrowISOString); // Default to next day
  const [locationError, setLocationError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [currentMode, setCurrentMode] = useState(mode);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newEventId, setNewEventId] = useState("");

  const totalSteps = currentMode == "detail" ? 5 : 3; // Define the total number of steps
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    setValue,
    clearErrors,
  } = useForm();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (startDate) {
      // setValue("endDate", startDate);
    }
    if (startDate && endDate && startTime && startDate == endDate) {
      const startDateObj = new Date(startDate);
      const startTimeObj = new Date(startTime);
      const hours = startTimeObj.getHours();
      const minutes = startTimeObj.getMinutes();
      startDateObj.setHours(hours);
      startDateObj.setMinutes(minutes);
      setEndTime(startDateObj.toISOString());
    }
  }, [startDate, startTime, endDate]);
  // Handle creating an event
  const handleCreateEvent = async (data: any) => {
    console.log("formData", data);

    if (
      (currentMode == "detail" && !selectedLocation) ||
      !data.event ||
      data.event.trim() === ""
    )
      return;
    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: data.event,
      type: data.eventType,
      description: data.description,
      location: selectedLocation || undefined,
      visibility: eventVisibility,
      hostedBy: data.hostedBy,
      time: {
        startDate: moment(data.startDate || new Date()).format(
          "YYYY-MM-DDTHH:mm:ss"
        ),
        endDate: data.endDate
          ? moment(data.endDate).format("YYYY-MM-DDTHH:mm:ss")
          : "",
        startTime: data.startTime
          ? moment(data.startTime).format("YYYY-MM-DDTHH:mm:ss")
          : "",
        endTime: data.endTime
          ? moment(data.endTime).format("YYYY-MM-DDTHH:mm:ss")
          : "",
      },
      settings: {
        shareMedia: selectedMedia,
        splitBills: selectedRecord,
        enableChats: false,
        allowCheckList: false,
        currency: selectedRecord && selectedCurrency ? selectedCurrency : "USD",
        eventVisibility: eventVisibility || "private",
      },
    };
    try {
      let newEvent: Event = await createEvent(draftEvent);
      if (newEvent.id) {
        setShowSuccess(true);
        setNewEventId(newEvent.id);
        goToEvent(newEvent.id);
      }
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsCreating(false);
    }
  };
  // Function to go to the next step
  const nextStep = (formData: any) => {
    console.log("nextStep-currentStep", currentStep);
    console.log("nextStep-formData", formData);
    if (currentMode == "detail" && !selectedLocation) {
      setLocationError(true);
      return;
    }
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };
  const onError = (err: any) => {
    console.log("onError-currentStep", currentStep);
    console.log("onError-err", err);
    if (currentMode == "detail" && !selectedLocation) {
      setLocationError(true);
    }
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Render steps dynamically based on the total number of steps
  const renderSteps = () => {
    return Array.from({ length: totalSteps }, (_, index) => (
      <div
        key={index}
        className={`step ${index + 1 <= currentStep ? "active" : ""}`}
      ></div>
    ));
  };

  const getStepClass = (step: number) => {
    if (step < currentStep) return "prev";
    if (step === currentStep) return "current";
    if (step > currentStep) return "next";
    return "";
  };

  const handleSelectLocation = (location: LocationInfo) => {
    setSelectedLocation(location);
    setLocationError(false);
  };

  const changeMode = () => {
    setCurrentMode((prevMode) => (prevMode === "detail" ? "quick" : "detail"));
    console.log("changeMode", currentMode);
  };

  return (
    <>
      <IonPage>
        <Header
          title="Create Event"
          showMenu={false}
          showContactList={false}
          showProfile={true}
        />

        {showSuccess ? (
          <>
            <IonContent className="ion-padding action_screen">
              <IonGrid className="action_screen_cnt">
                <IonImg
                  alt="Successfully Created Event"
                  src={Success}
                />
                <IonLabel className="action_title">
                  Successfully Created Event
                </IonLabel>
                <IonText className="action_info">
                  Event Created! 🎉 Now, let's make it unforgettable. Invite
                  friends and let the good times roll!
                </IonText>
              </IonGrid>
            </IonContent>

            <IonFooter className="action_screen_buttons ion-padding">
              <IonButton
                className="primary-btn rounded ion-no-margin"
                onClick={() => {
                  goToEvent(newEventId);
                }}
              >
                Go To Event Details
              </IonButton>
              <IonButton className="secondary-btn ion-margin-top">
                Invite Friends To The Event
              </IonButton>
            </IonFooter>
          </>
        ) : (
          <>
            {currentStep == 1 && (
              <IonLabel
                className="event-type-action ion-padding-horizontal"
                onClick={changeMode}
              >
                {
                  <>
                    {currentMode === "detail" ? (
                      <p>
                        Short on time? Create an event{" "}
                        <IonText class="type">instantly!</IonText>
                      </p>
                    ) : (
                      <p>
                        Want more control? Create a{" "}
                        <IonText class="type">detailed event.</IonText>
                      </p>
                    )}
                  </>
                }
                <IonImg
                  className="next"
                  src={nextIcon}
                />
              </IonLabel>
            )}
            <IonContent className="ion-padding create_event">
              <IonLabel className="stepper-container ion-no-margin ion-margin-bottom">
                {renderSteps()}
              </IonLabel>
              <FormProvider {...methods}>
                <>
                  {currentStep == 1 && (
                    <IonGrid
                      className={`ion-no-padding step-content ${getStepClass(
                        1
                      )}`}
                    >
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          <CustomInput
                            placeholder={"Event Name"}
                            label={"Event Name"}
                            fieldName={"event"}
                            isRequired={true}
                            errors={errors}
                            errorText={"Event Name"}
                            register={register}
                          />
                        </IonCol>
                      </IonRow>
                      {currentMode === "detail" && (
                        <>
                          <IonRow>
                            <IonCol className="form-group ion-padding-bottom">
                              <CustomSelect
                                control={control}
                                label="Event Type"
                                fieldName="eventType"
                                placeholder="Select Type"
                                options={[
                                  { value: "Birthday", label: "Birthday" },
                                  { value: "Vacations", label: "Vacations" },
                                  {
                                    value: "GetTogether",
                                    label: "Get together",
                                  },
                                  { value: "Other", label: "Other" },
                                ]}
                                isRequired={true}
                                errors={errors}
                                errorText="Event Type"
                                //onIonChange={(e: any) => setEventType(e)}
                              />
                            </IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol className="form-group ion-padding-bottom">
                              <IonLabel className="form-label">
                                Location*
                              </IonLabel>
                              <PlaceSearch
                                searchLocation={searchLocation}
                                onSelectLocation={handleSelectLocation}
                              />
                              {locationError && (
                                <IonText className="error">
                                  *Location is required
                                </IonText>
                              )}
                              {selectedLocation && (
                                <IonLabel className="location_selection">
                                  Selected Location:
                                  <IonText className="location">
                                    {" "}
                                    {selectedLocation.name}
                                  </IonText>
                                </IonLabel>
                              )}
                            </IonCol>
                          </IonRow>
                          <IonRow>
                            <IonCol className="form-group ion-padding-bottom">
                              <CustomInput
                                placeholder={"Hosted by"}
                                label={"Hosted by"}
                                fieldName={"hostedBy"}
                                isRequired={true}
                                errors={errors}
                                errorText={"Hosted by"}
                                register={register}
                              />
                            </IonCol>
                          </IonRow>
                        </>
                      )}
                    </IonGrid>
                  )}
                  {currentStep == 2 && currentMode === "detail" && (
                    <IonGrid
                      className={`ion-no-padding step-content ${getStepClass(
                        2
                      )}`}
                    >
                      <CustomDateTime
                        placeHolder={"Select Date"}
                        className={"ion-datetime-button date"}
                        presentation={"date"}
                        control={control}
                        label={"Date"}
                        fieldName="startDate"
                        minDate={tomorrowISOString}
                        isRequired={true}
                        errorText="Date"
                        errors={errors}
                        defaultValue={startDate}
                        onDateChange={(value: any) => {
                          setStartDate(value);
                          //setEndDate(value);
                        }}
                        formatOptions={{
                          weekday: "short",
                          month: "long",
                          day: "2-digit",
                        }}
                      />
                      <CustomDateTime
                        placeHolder={"Select Time"}
                        className={"ion-datetime-button time"}
                        presentation={"time"}
                        control={control}
                        label={"Time"}
                        fieldName="startTime"
                        isRequired={true}
                        errorText="Time"
                        errors={errors}
                        onIonFocus={() => {
                          const currentTimeUTC = new Date();
                          const currentTimeIST = new Date(
                            currentTimeUTC.getTime() + 5.5 * 60 * 60 * 1000
                          );
                          setValue("startTime", currentTimeIST.toISOString());
                          //setValue("endTime", " ");
                          setStartTime(currentTimeIST.toISOString());
                          clearErrors("startTime");
                        }}
                        formatOptions={{
                          time: {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        }}
                      />
                      <CustomDateTime
                        placeHolder={"Select Date"}
                        className={"ion-datetime-button date"}
                        presentation={"date"}
                        control={control}
                        label={"End Date"}
                        fieldName="endDate"
                        minDate={startDate}
                        isRequired={false}
                        errorText="End Date"
                        errors={errors}
                        formatOptions={{
                          weekday: "short",
                          month: "long",
                          day: "2-digit",
                        }}
                        //  defaultValue={endDate}
                        onDateChange={(value: any) => {
                          setEndDate(value);
                        }}
                      />
                      <CustomDateTime
                        placeHolder={"Select Time"}
                        className={"ion-datetime-button time"}
                        presentation={"time"}
                        control={control}
                        label={"End Time"}
                        fieldName="endTime"
                        isRequired={false}
                        errorText="End Time"
                        errors={errors}
                        minDate={endTime}
                        onIonFocus={() => {
                          const currentTimeUTC = new Date();
                          const currentTimeIST = new Date(
                            currentTimeUTC.getTime() + 5.5 * 60 * 60 * 1000
                          );
                          setValue("endTime", currentTimeIST.toISOString());
                          clearErrors("endTime");
                        }}
                        formatOptions={{
                          time: {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        }}
                      />
                    </IonGrid>
                  )}
                  {currentStep == 3 && currentMode === "detail" && (
                    <IonGrid
                      className={`ion-no-padding step-content ${getStepClass(
                        3
                      )}`}
                    >
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          {/* <IonTextarea
                            placeholder={"Description"}
                            label={"Description"}
                            fieldName={"description"}
                            isRequired={true}
                            errors={errors}
                            errorText={"Description"}
                            register={register}
                          /> */}
                          <LexicalEditor
                            initialHtml={
                              "<p>Hello, <strong>world</strong>!</p>"
                            }
                            onExport={function (exportedHtml: string): void {
                              setValue("description", exportedHtml);
                            }}
                          />
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  )}
                  {((currentStep == 4 && currentMode === "detail") ||
                    (currentMode === "quick" && currentStep == 2)) && (
                    <IonGrid
                      className={`ion-no-padding step-content ${
                        currentMode === "detail" && currentStep === 4
                          ? getStepClass(4)
                          : currentMode === "quick" && currentStep === 2
                            ? getStepClass(2)
                            : ""
                      }`}
                    >
                      <IonLabel className="step_title">
                        Event Category*
                      </IonLabel>
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          <IonRadioGroup
                            className="ion-radio-group"
                            allowEmptySelection={false}
                            onIonChange={(e) => {
                              register("eventVisibility").onChange(e);
                              setEventVisibility(e.detail.value);
                            }}
                            value={eventVisibility}
                            {...register("eventVisibility", {
                              required: "Event Category is required",
                            })}
                          >
                            <IonRadio
                              className="ion-radio"
                              value="private"
                              justify="space-between"
                            >
                              <span>
                                <img
                                  src={privateEventIcon}
                                  alt="Personal Event"
                                />
                              </span>
                              <p>
                                <strong>Personal Event</strong>
                                Exclusively invite your guests by their contact.
                                You can keep your invitation private and share
                                the event happenings securely. You can change
                                this option later.
                              </p>
                            </IonRadio>
                            <IonRadio
                              class="ion-radio"
                              value="public"
                              justify="space-between"
                            >
                              <span>
                                <img
                                  src={publicEventIcon}
                                  alt="Community Event"
                                />
                              </span>
                              <p>
                                <strong>Community Event</strong> Anyone with the
                                link can access the event, RSVP etc. You can
                                change this option later.
                              </p>
                            </IonRadio>
                          </IonRadioGroup>
                          {errors?.eventVisibility && (
                            <IonText
                              color="danger"
                              style={{ fontSize: 12 }}
                            >
                              *{" "}
                              {typeof errors.eventVisibility.message ===
                              "string"
                                ? errors.eventVisibility.message
                                : ""}
                            </IonText>
                          )}
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  )}
                  {((currentMode === "detail" && currentStep == 5) ||
                    (currentMode === "quick" && currentStep == 3)) && (
                    <IonGrid
                      className={`ion-no-padding step-content ${
                        currentMode === "detail" && currentStep === 5
                          ? getStepClass(5)
                          : currentMode === "quick" && currentStep === 3
                            ? getStepClass(3)
                            : ""
                      }`}
                    >
                      <IonLabel className="step_title">Settings*</IonLabel>
                      <IonRow>
                        <IonCol className="form-group ion-padding-bottom">
                          <IonRadioGroup
                            className="ion-radio-group"
                            allowEmptySelection={true}
                            value={selectedMedia ? "media" : ""}
                            onIonChange={(e) => {
                              const value = e.detail.value;
                              const isMediaSelected = value === "media";
                              setSelectedMedia(isMediaSelected);
                              // setSelectedRecord(false);
                              register("media").onChange(e);
                            }}
                            {...register("media", {
                              required: selectedRecord
                                ? false
                                : "Please select an option",
                            })}
                          >
                            <IonRadio
                              className="ion-radio"
                              value="media"
                              justify="space-between"
                            >
                              <span>
                                <img
                                  src={mediaIcon}
                                  alt="Media"
                                />
                              </span>
                              <p>
                                <strong>Media</strong> Securely share pictures
                                with the event attendees.
                              </p>
                            </IonRadio>
                          </IonRadioGroup>
                          <IonRadioGroup
                            className="ion-radio-group"
                            allowEmptySelection={true}
                            value={selectedRecord ? "record" : ""}
                            onIonChange={(e) => {
                              const value = e.detail.value;
                              const isRecordSelected = value === "record";
                              setSelectedRecord(isRecordSelected);
                              // setSelectedMedia(false);
                              register("record").onChange(e);
                            }}
                            {...register("record", {
                              required: selectedMedia
                                ? false
                                : "Please select an option",
                            })}
                          >
                            <IonRadio
                              className="ion-radio"
                              value="record"
                              justify="space-between"
                            >
                              <span>
                                <img
                                  src={recordsIcon}
                                  alt="Record expenses"
                                />
                              </span>
                              <p>
                                <strong>Record expenses</strong> Securely
                                maintain the expenses between hosts & co-hosts.
                              </p>
                            </IonRadio>
                          </IonRadioGroup>
                          {selectedRecord && (
                            <IonItem className="currency_selection">
                              <IonThumbnail>
                                <IonImg src={currencyIcon} />
                              </IonThumbnail>
                              <IonLabel className="item-title">
                                Currency
                                <IonText className="item-subtitle">
                                  Securely maintain the expenses between hosts &
                                  co-hosts
                                </IonText>
                              </IonLabel>
                              <IonSelect
                                className="ion-select"
                                value={selectedCurrency}
                                interface="action-sheet"
                                onIonChange={(e) => {
                                  setSelectedCurrency(e.detail.value);
                                  register("currency").onChange(e);
                                }}
                                {...register("currency", {
                                  required: selectedRecord
                                    ? "Please select a currency"
                                    : false,
                                })}
                              >
                                <IonSelectOption value="USD">
                                  USD
                                </IonSelectOption>
                                <IonSelectOption value="EUR">
                                  EUR
                                </IonSelectOption>
                                <IonSelectOption value="INR">
                                  INR
                                </IonSelectOption>
                              </IonSelect>
                            </IonItem>
                          )}
                          {/* Error message for Currency */}
                          {errors?.currency && selectedRecord && (
                            <IonText
                              color="danger"
                              style={{ fontSize: 12 }}
                            >
                              *
                              {typeof errors.currency.message === "string"
                                ? errors.currency.message
                                : ""}
                            </IonText>
                          )}
                          {errors?.record && !selectedMedia && (
                            <IonText
                              color="danger"
                              style={{ fontSize: 12 }}
                            >
                              *
                              {typeof errors.record.message === "string"
                                ? errors.record.message
                                : ""}
                            </IonText>
                          )}
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  )}
                </>
              </FormProvider>
            </IonContent>

            <IonFooter className="actions-container stickyFooter ion-padding">
              <IonButton
                className="primary-btn actions"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </IonButton>
              <IonButton
                className="primary-btn actions"
                onClick={handleSubmit(nextStep, onError)}
                disabled={currentStep === totalSteps}
              >
                Next
              </IonButton>
              {currentStep === totalSteps && (
                <IonButton
                  className="primary-btn"
                  onClick={handleSubmit(handleCreateEvent, onError)}
                  expand="block"
                >
                  {isCreating ? "Creating Event..." : "Create Event"}
                </IonButton>
              )}
            </IonFooter>
          </>
        )}
      </IonPage>
    </>
  );
};

export default CreateNewEvent;
