import React, { useEffect, useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonCardContent,
  IonButton,
  IonContent,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonText,
  IonList,
  IonFooter,
  IonGrid,
  IonImg,
  IonPage,
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
import PlaceSearch from "./PlaceSearch";
import { EventType, EventVisibility } from "@goflock/types";
import Header from "../Header/Header";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import IonTextarea from "../Common/CustomTextarea";
import CustomSelect from "../Common/CustomSelect";
import CustomDateTime from "../Common/CustomDateTime";

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
}) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationInfo | null>();
  //const [eventType, setEventType] = useState<EventType>();
  const [eventVisibility, setEventVisibility] = useState<EventVisibility>();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const currentDate = new Date();
  const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));
  const tomorrowISOString = tomorrow.toISOString();
  // Date States,
  const [startDate, setStartDate] = useState<string>(tomorrowISOString); // Default to next day
  const [endDate, setEndDate] = useState<string>(tomorrowISOString); // Default to next day
  const [locationError, setLocationError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const totalSteps = 3; // Define the total number of steps
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
      setValue("endDate", startDate);
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
    console.log("handleCreateEvent-Data", data);
    if (!selectedLocation || !data.event || data.event.trim() === "") return;
    // if (!selectedLocation || data.event.trim() === "") return;
    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: data.event,
      type: data.eventType,
      description: data.description,
      location: selectedLocation,
      visibility: eventVisibility,
      time: {
        startDate: data.startDate || new Date(),
        endDate: data.endDate,
        startTime: data.startTime,
        endTime: data.endTime,
      },
    };
    try {
      let newEvent: Event = await createEvent(draftEvent);
      goToEvent(newEvent.id);
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsCreating(false);
    }
  };
  // Function to go to the next step
  const nextStep = () => {
    if (!selectedLocation) {
      setLocationError(true);
      return;
    }
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };
  const onError = () => {
    if (!selectedLocation) {
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

  return (
    <IonPage>
      <Header
        title="Create Event"
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonContent className="create_event">
        <IonList className="stepper-container">{renderSteps()}</IonList>

        <FormProvider {...methods}>
          <IonGrid className="stepper-content">
            {/* Step content with prev, current, and next classes */}
            {currentStep == 1 && (
              <IonGrid className={`step-content ${getStepClass(1)}`}>
                <IonGrid className="form-container">
                  <IonCardContent className="pad0">
                    <IonList className="form-group">
                      <CustomInput
                        placeholder={"Event Name"}
                        label={"Event Name"}
                        fieldName={"event"}
                        isRequired={true}
                        errors={errors}
                        errorText={"Event Name"}
                        register={register}
                      />
                    </IonList>
                    <IonList className="form-group">
                      <CustomSelect
                        control={control}
                        label="Event Type"
                        fieldName="eventType"
                        placeholder="Select Type"
                        options={[
                          { value: "Birthday", label: "Birthday" },
                          { value: "Vacations", label: "Vacations" },
                          { value: "GetTogether", label: "Get together" },
                          { value: "Other", label: "Other" },
                        ]}
                        isRequired={true}
                        errors={errors}
                        errorText="Event Type"
                        //onIonChange={(e: any) => setEventType(e)}
                      />
                    </IonList>
                    <IonList className="form-group">
                      <IonTextarea
                        placeholder={"Description"}
                        label={"Description"}
                        fieldName={"description"}
                        isRequired={true}
                        errors={errors}
                        errorText={"Description"}
                        register={register}
                      />
                    </IonList>
                    <IonList className="form-group mb-0 pb-0">
                      <IonLabel className="form-label">Venue</IonLabel>
                      <PlaceSearch
                        searchLocation={searchLocation}
                        onSelectLocation={handleSelectLocation}
                      />
                    </IonList>
                    {locationError && (
                      <IonText
                        color="danger"
                        style={{ fontSize: 12 }}
                      >
                        * Venue is required
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
                  </IonCardContent>
                </IonGrid>
              </IonGrid>
            )}

            {currentStep == 2 && (
              <IonGrid className={`step-content ${getStepClass(2)}`}>
                <IonGrid className="form-container">
                  <IonCardContent className="pad0">
                    <CustomDateTime
                      placeHolder={"Select Date"}
                      className={"ion-datetime-button date"}
                      presentation={"date"}
                      control={control}
                      label={"Start Date"}
                      fieldName="startDate"
                      minDate={tomorrowISOString}
                      isRequired={true}
                      errorText="Start Date"
                      errors={errors}
                      defaultValue={startDate}
                      onDateChange={(value: any) => {
                        setStartDate(value); // Update the Start Date
                        setEndDate(value); // Set End Date to the same as Start Date
                      }}
                      formatOptions={{
                        weekday: "short",
                        month: "long",
                        day: "2-digit",
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
                      isRequired={true}
                      errorText="End Date"
                      errors={errors}
                      formatOptions={{
                        weekday: "short",
                        month: "long",
                        day: "2-digit",
                      }}
                      defaultValue={endDate}
                      onDateChange={(value: any) => {
                        setEndDate(value);
                      }}
                    />
                    <CustomDateTime
                      placeHolder={"Select Time"}
                      className={"ion-datetime-button time"}
                      presentation={"time"}
                      control={control}
                      label={"Start Time"}
                      fieldName="startTime"
                      isRequired={true}
                      errorText="Start Time"
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
                      placeHolder={"Select Time"}
                      className={"ion-datetime-button time"}
                      presentation={"time"}
                      control={control}
                      label={"End Time"}
                      fieldName="endTime"
                      isRequired={true}
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
                      //disabled={!startTime}
                    />
                  </IonCardContent>
                </IonGrid>
              </IonGrid>
            )}

            {currentStep == 3 && (
              <IonGrid className={`step-content ${getStepClass(3)}`}>
                <IonGrid className="form-container">
                  <IonCardContent className="pad0">
                    <IonList className="form-group">
                      <IonRadioGroup
                        className="ion-radio-group"
                        allowEmptySelection={true}
                        //value="turtles
                        {...register("eventVisibility", { required: false })}
                        value={eventVisibility}
                        onIonChange={(e) => setEventVisibility(e.detail.value)}
                      >
                        <IonRadio
                          className="ion-radio"
                          value={"private"}
                          justify="space-between"
                        >
                          <span>
                            <img
                              src={privateEventIcon}
                              alt="Private Event"
                            />
                          </span>
                          <p>
                            <strong>Private Event</strong>
                            Only users with phone numbers invited can access.
                            This is highly secure. You can change this option
                            later.
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
                              alt="Public Event"
                            />
                          </span>
                          <p>
                            <strong>Public Event</strong>Only users with phone
                            numbers invited can access. This is highly secure.
                            You can change this option later.
                          </p>
                        </IonRadio>
                      </IonRadioGroup>
                    </IonList>
                  </IonCardContent>
                </IonGrid>
              </IonGrid>
            )}
          </IonGrid>
          {/* Navigation buttons */}
          <IonFooter className="actions-container stickyFooter">
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
                //disabled={isCreating || !selectedLocation || !eventName}
                disabled={!eventVisibility}
              >
                {isCreating ? "Creating Event..." : "Create Event"}
              </IonButton>
            )}
          </IonFooter>
        </FormProvider>
      </IonContent>
      <IonGrid
        className="action_screen"
        style={{ display: "none" }}
      >
        <IonGrid className="action_screen_cnt">
          <IonImg
            alt="Successfully Created Event"
            src={Success}
          />
          <IonLabel className="action_title">
            Successfully Created Event
          </IonLabel>
          <IonText className="action_info">
            Event Created! 🎉 Now, let's make it unforgettable. Invite friends
            and let the good times roll!
          </IonText>
        </IonGrid>
        <IonFooter className="action_screen_buttons">
          <IonButton className="primary-btn">Go To Event Details</IonButton>
          <IonButton className="secondary-btn">
            Invite Friends To The Event
          </IonButton>
        </IonFooter>
      </IonGrid>
    </IonPage>
  );
};

export default CreateNewEvent;
