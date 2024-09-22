import React, { useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonCardContent,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
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

// import Header from '../Header/Header';

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
}) => {
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [locationResults, setLocationResults] = useState<LocationInfo[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(
    {
      name: "Everett",
      lat: 0,
      long: 0,
    }
  );
  const [eventName, setEventName] = useState<string>("");
  const [isCreating, setIsCreating] = useState<boolean>(false);

  // Handle location search
  // @ts-ignore
  const handleSearchLocation = async () => {
    if (locationQuery.trim() === "") return;
    const results = await searchLocation(locationQuery);
    setLocationResults(results);
  };

  // Handle creating an event
  const handleCreateEvent = async () => {
    if (!selectedLocation || eventName.trim() === "") return;

    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: eventName,
      type: "birthday",
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
              <IonCardContent>
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
                    aria-label="Event"
                    interface="action-sheet"
                    placeholder="Select Type"
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
                    rows={3}
                    label="Description*"
                    labelPlacement="stacked"
                    placeholder="Enter text"
                  ></IonTextarea>
                </div>
                <div className="form-group">
                  <IonInput
                    value={locationQuery}
                    label="Event Name*"
                    labelPlacement="stacked"
                    placeholder="Search for a location"
                    onIonChange={(e) => setLocationQuery(e.detail.value!)}
                  />
                </div>

                {/* <IonButton
                onClick={handleSearchLocation}
                expand="block"
              >
                Search Location
              </IonButton> */}

                {locationResults.length > 0 && (
                  <IonList>
                    {locationResults.map((location) => (
                      <IonItem
                        key={""}
                        button
                        onClick={() => setSelectedLocation(location)}
                      >
                        <IonLabel>{location.name}</IonLabel>
                      </IonItem>
                    ))}
                  </IonList>
                )}

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
              <IonCardContent>
                <div className="form-group">
                  <label className="form-label">Start Date*</label>
                  {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  <IonDatetimeButton
                    className="date"
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
                    className="date"
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
                    className="time"
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
                    className="time"
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
              <IonCardContent>
                <div className="form-group">
                  <IonRadioGroup
                    allowEmptySelection={true}
                    value="turtles"
                  >
                    <IonRadio
                      value="Private Event"
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
                      value="Public Event"
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
