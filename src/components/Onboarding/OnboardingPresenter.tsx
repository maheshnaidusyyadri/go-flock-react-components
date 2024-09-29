import React, { useState } from "react";
import "./OnboardingPresenter.scss";
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
  IonTitle,
  IonText,
} from "@ionic/react";
import {
  OnboardingProps,
  LocationInfo,
  DraftEvent,
  Event,
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";
import Success from "../../images/celebration.svg";
import EventsIcon from "../../images/auth-1.png";
import mediaIcon from "../../images/auth-2.png";
import chatIcon from "../../images/auth-3.png";
import expancesIcon from "../../images/auth-4.png";
 

// import Header from '../Header/Header';

const Onboarding: React.FC<OnboardingProps> = ({
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
  const totalSteps = 4; // Define the total number of steps

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
    <IonContent className="create_event">
      {/* <Header /> */}
      {/* Stepper display */}
      <div className="stepper-container">{renderSteps()}</div>

      <div className="stepper-content">
        {/* Step content with prev, current, and next classes */}
        <div className={`step-content ${getStepClass(1)}`}>
          <div className="auth_screen">
            <img src={EventsIcon} alt="Private Event" />
            <IonTitle className="ion-title">Create Events</IonTitle>
            <IonText className="ion-text">And invite guests or friends receive RSVP</IonText>
          </div>
        </div>
        <div className={`step-content ${getStepClass(2)}`}>
          <div className="auth_screen">
            <img src={mediaIcon} alt="Private Event" />
            <IonTitle className="ion-title">Share Photos</IonTitle>
            <IonText className="ion-text">Capture the fleeting moment in photographs!</IonText>
          </div>
        </div>
        <div className={`step-content ${getStepClass(3)}`}>
          <div className="auth_screen">
            <img src={chatIcon} alt="Private Event" />
            <IonTitle className="ion-title">Chat with the Group</IonTitle>
            <IonText className="ion-text">Engage in lively conversation among members and ravel in the event!</IonText>
          </div>
        </div>
        <div className={`step-content ${getStepClass(4)}`}>
          <div className="auth_screen">
            <img src={expancesIcon} alt="Private Event" />
            <IonTitle className="ion-title">Split expenses</IonTitle>
            <IonText className="ion-text">Capture the fleeting moment in photographs!</IonText>
          </div>
        </div>
      </div>



      {/* Navigation buttons */}
      <div className="actions-container">           
        <IonButton
          className="primary-btn actions"
          onClick={nextStep} 
        >
          Next
        </IonButton>
        <span className="skip">Skip</span> 
      </div>
    </IonContent>  
  );
};

export default Onboarding;
