import React, { useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonCardContent,
  IonButton,
  IonInput,
  IonContent,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonLabel,
} from "@ionic/react";
import {
  CreateNewEventProps,
  LocationInfo,
  DraftEvent,
  Event,
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import Success from "../../images/celebration.svg";
import privateEventIcon from "../../images/icons/privateEvent.svg";
import publicEventIcon from "../../images/icons/publicEvent.svg";
import PlaceSearch from "./PlaceSearch";
import { EventType, EventVisibility } from "@goflock/types";

// import Header from '../Header/Header';

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
}) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationInfo | null>();
  const [eventName, setEventName] = useState<string>("");
  const [eventType, setEventType] = useState<EventType>();
  const [eventDescription, setEventDescription] = useState<string>("");
  // @ts-ignore
  const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  const [eventVisibility, setEventVisibility] = useState<EventVisibility>();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  // Handle creating an event
  const handleCreateEvent = async () => {
    if (!selectedLocation || eventName.trim() === "") return;

    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: eventName,
      type: eventType!,
      description: eventDescription,
      location: selectedLocation,
      visibility: eventVisibility,
      time: {
        startDate: startDate || new Date(),
        endDate,
        startTime,
        endTime,
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
  ////////////////
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const totalSteps = 3; // Define the total number of steps

  // Function to go to the next step
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
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
    console.log("Selected location:", location);
    setSelectedLocation(location);
  };

  return (
    <>
      {/* <IonCard>
      <IonCardHeader>
        <IonCardTitle>Create a New Event</IonCardTitle>
      </IonCardHeader>

    </IonCard> */}

      <IonContent className="create_event">
        {/* <Header /> */}
        {/* Stepper display */}
        <div className="stepper-container">{renderSteps()}</div>

        <div className="stepper-content">
          {/* Step content with prev, current, and next classes */}
          <div className={`step-content ${getStepClass(1)}`}>
            <div className="form-container">
              <IonCardContent className="pad0">
                <div className="form-group">
                  <IonInput
                    value={eventName}
                    label="Event Name*"
                    labelPlacement="stacked"
                    placeholder="Event Name"
                    onIonChange={(e) => setEventName(e.detail.value!)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Event Type*</label>
                  <IonSelect
                    className="ion-select"
                    aria-label="Event"
                    interface="action-sheet"
                    placeholder="Select Type"
                    onIonChange={(e) => setEventType(e.detail.value!)}
                  >
                    <IonSelectOption value="Birthday">Birthday</IonSelectOption>
                    <IonSelectOption value="Vacations">
                      Vacations
                    </IonSelectOption>
                    <IonSelectOption value="GetTogether">
                      Get together
                    </IonSelectOption>
                    <IonSelectOption value="Other">Other</IonSelectOption>
                  </IonSelect>
                </div>
                <div className="form-group">
                  <IonTextarea
                    className="ion-textarea"
                    rows={3}
                    label="Description*"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                    onIonChange={(e) => setEventDescription(e.detail.value!)}
                  ></IonTextarea>
                </div>
                <div className="form-group">
                  <IonLabel> Venue </IonLabel>
                  <PlaceSearch
                    searchLocation={searchLocation}
                    onSelectLocation={handleSelectLocation}
                  />
                </div>

                {selectedLocation && (
                  <div>
                    <p>Selected Location: {selectedLocation.name}</p>
                  </div>
                )}
              </IonCardContent>
            </div>
          </div>
          <div className={`step-content ${getStepClass(2)}`}>
            <div className="form-container">
              <IonCardContent className="pad0">
                <div className="form-group">
                  <label className="form-label">Start Date*</label>
                  {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  <IonDatetimeButton
                    className="ion-datetime-button date"
                    datetime="startDate"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      id="startDate"
                      presentation="date"
                      value="2023-11-02T01:22:00"
                      formatOptions={{
                        date: {
                          weekday: "short",
                          month: "long",
                          day: "2-digit",
                        },
                      }}
                    ></IonDatetime>
                  </IonModal>
                </div>
                <div className="form-group">
                  <label className="form-label">End Date*</label>
                  {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  <IonDatetimeButton
                    className="ion-datetime-button date"
                    datetime="endDate"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      id="endDate"
                      presentation="date"
                      value="2023-11-02T01:22:00"
                      formatOptions={{
                        date: {
                          weekday: "short",
                          month: "long",
                          day: "2-digit",
                        },
                      }}
                    ></IonDatetime>
                  </IonModal>
                </div>
                <div className="form-group">
                  <label className="form-label">Start Time*</label>
                  <IonDatetimeButton
                    className="ion-datetime-button time"
                    datetime="StartTime"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      presentation="time"
                      id="StartTime"
                      value="01:22:00"
                      formatOptions={{
                        time: {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      }}
                    ></IonDatetime>
                  </IonModal>
                </div>
                <div className="form-group">
                  <label className="form-label">End Time*</label>
                  <IonDatetimeButton
                    className="ion-datetime-button time"
                    datetime="endTime"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      presentation="time"
                      id="endTime"
                      value="01:22:00"
                      formatOptions={{
                        time: {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      }}
                    ></IonDatetime>
                  </IonModal>
                </div>

                {/* <IonButton
            onClick={handleCreateEvent}
            expand="block"
            disabled={isCreating || !selectedLocation || !eventName}
          >
            {isCreating ? "Creating Event..." : "Create Event"}
          </IonButton> */}
              </IonCardContent>
            </div>
          </div>
          <div className={`step-content ${getStepClass(3)}`}>
            <div className="form-container">
              <IonCardContent className="pad0">
                <div className="form-group">
                  <IonRadioGroup
                    className="ion-radio-group"
                    allowEmptySelection={true}
                    value="turtles"
                    onIonChange={(e) => setEventVisibility(e.detail.value!)}
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
                        Only users with phone numbers invited can access. This
                        is highly secure. You can change this option later.
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
                        numbers invited can access. This is highly secure. You
                        can change this option later.
                      </p>
                    </IonRadio>
                  </IonRadioGroup>
                </div>
              </IonCardContent>
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <div className="actions-container">
          <IonButton
            className="primary-btn actions"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </IonButton>
          <IonButton
            className="primary-btn actions"
            onClick={nextStep}
            disabled={currentStep === totalSteps}
          >
            Next
          </IonButton>
          {currentStep === totalSteps && (
            <IonButton
              className="primary-btn"
              onClick={() => handleCreateEvent()}
              expand="block"
              //disabled={isCreating || !selectedLocation || !eventName}
            >
              {isCreating ? "Creating Event..." : "Create Event"}
            </IonButton>
          )}
        </div>
      </IonContent>
      <div
        className="action_screen"
        style={{ display: "none" }}
      >
        <div className="action_screen_cnt">
          <img
            alt="Successfully Created Event"
            src={Success}
          />
          <h2>Successfully Created Event</h2>
          <p>
            Event Created! 🎉 Now, let's make it unforgettable. Invite friends
            and let the good times roll!
          </p>
        </div>
        <div className="action_screen_buttons">
          <IonButton className="primary-btn">Go To Event Details</IonButton>
          <IonButton className="secondary-btn">
            Invite Friends To The Event
          </IonButton>
        </div>
      </div>
    </>
  );
};

export default CreateNewEvent;
