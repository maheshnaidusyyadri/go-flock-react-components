import React, { useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonCardContent,
  IonButton,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonText, 
  IonList,
  IonFooter,
  IonGrid, 
  IonImg,
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
import Header from "../Header/Header";
import { FormProvider, useForm } from 'react-hook-form';
import CustomInput from "../Common/CustomInput";
import IonTextarea from "../Common/CustomTextarea";
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
  //const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  //const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  const [eventVisibility, setEventVisibility] = useState<EventVisibility>();

  const [isCreating, setIsCreating] = useState<boolean>(false);
  

  const currentDate = new Date();
  const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));
  const tomorrowISOString = tomorrow.toISOString();
  
  // Date States
  const [startDate, setStartDate] = useState<string>(tomorrowISOString); // Default to next day
  const [endDate, setEndDate] = useState<string>(tomorrowISOString); // Default to next day
  const methods = useForm();
  const {  handleSubmit, formState: { errors },register } = useForm();

  // Handle Start Date Change
  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
    setEndDate(newStartDate); // Auto-fill end date with start date
  };
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
  const nextStep = (formData:any) => {
    console.log('formData',formData)
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };
  const onError = (error:any)=>{
    console.log("error-error",error)
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
      <Header         
        title='Create Event'
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonContent className="create_event"> 
        <IonList className="stepper-container">{renderSteps()}</IonList>

        <FormProvider {...methods}>
        
        <IonGrid className="stepper-content">
          {/* Step content with prev, current, and next classes */}
          {currentStep==1&&<IonGrid className={`step-content ${getStepClass(1)}`}>

            <IonGrid className="form-container">
              <IonCardContent className="pad0">
                <IonList className="form-group">
                  <CustomInput
                  placeholder={'Event Name'}
                  label={'Event Name'}
                  fieldName={'event'}
                  isRequired={true}
                  errors={errors}
                  errorText={'Event Name'}
                  //control={control}
                  register={register}
                  />
                </IonList>
                <IonList className="form-group">
                  <IonLabel className="form-label">Event Type*</IonLabel>
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
                </IonList>
                <IonList className="form-group">
                  <IonTextarea
                  placeholder={'Description'}
                  label={'Description'}
                  fieldName={'description'}
                  isRequired={true}
                  errors={errors}
                  errorText={'Description'}
                  register={register}
                  />
                </IonList>
                <IonList className="form-group mb-0">
                  <IonLabel className="form-label">Venue</IonLabel>
                  <PlaceSearch
                    searchLocation={searchLocation}
                    onSelectLocation={handleSelectLocation}
                  />
                </IonList>

                {selectedLocation && (
                  <IonLabel className="location_selection">Selected Location:<IonText className="location"> {selectedLocation.name}</IonText></IonLabel> 
                )}
              </IonCardContent>
            </IonGrid>

          </IonGrid>}

          {currentStep==2&&<IonGrid className={`step-content ${getStepClass(2)}`}>
            <IonGrid className="form-container">
              <IonCardContent className="pad0">
                <IonList className="form-group">
                  <IonLabel className="form-label">Start Date*</IonLabel>
                  {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  <IonDatetimeButton
                    className="ion-datetime-button date"
                    datetime="startDate"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                  <IonDatetime
                    value={startDate} // Default next day
                    min={tomorrowISOString} // Disable current date, allow future dates
                    id="startDate"
                    presentation="date"
                    // formatOptions={{
                    //   weekday: "short",
                    //   month: "long",
                    //   day: "2-digit",
                    // }}
                    showDefaultButtons={true} // Show "Done" button
                    onIonChange={(e:any) => handleStartDateChange(e.detail.value!)}
                  />
                  </IonModal>
                </IonList>
                <IonList className="form-group">
                  <IonLabel className="form-label">End Date*</IonLabel>
                  {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                  <IonDatetimeButton
                    className="ion-datetime-button date"
                    datetime="endDate"
                  ></IonDatetimeButton>
                  <IonModal keepContentsMounted={true}>
                  <IonDatetime
                      value={endDate} // Auto-fill end date with start date
                      min={startDate} // End date cannot be earlier than start date
                      id="endDate"
                      presentation="date"
                      // formatOptions={{
                      //   weekday: "short",
                      //   month: "long",
                      //   day: "2-digit",
                      // }}
                      showDefaultButtons={true} // Show "Done" button
                      onIonChange={(e: any) => setEndDate(e.detail.value!)}
                    />
                  </IonModal>
                </IonList>
                <IonList className="form-group">
                  <IonLabel className="form-label">Start Time*</IonLabel>
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
                </IonList>
                <IonList className="form-group">
                  <IonLabel className="form-label">End Time*</IonLabel>
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
                </IonList>

                {/* <IonButton
            onClick={handleCreateEvent}
            expand="block"
            disabled={isCreating || !selectedLocation || !eventName}
          >
            {isCreating ? "Creating Event..." : "Create Event"}
          </IonButton> */}
              </IonCardContent>
            </IonGrid>
          </IonGrid>}

          {currentStep==3&&<IonGrid className={`step-content ${getStepClass(3)}`}>
            <IonGrid className="form-container">
              <IonCardContent className="pad0">
                <IonList className="form-group">                
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
                </IonList>
              </IonCardContent>
            </IonGrid>
          </IonGrid>}

        </IonGrid>
        {/* Navigation buttons */}
        <IonFooter className="actions-container">
          <IonButton
            className="primary-btn actions"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </IonButton>
          <IonButton
            className="primary-btn actions"
           // onClick={nextStep}
           //type="submit"
           onClick={handleSubmit(nextStep, onError)}
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
        </IonFooter>

        </FormProvider>
        
      </IonContent>
      <IonGrid
        className="action_screen" style={{ display: "none" }}
        
      >
        <IonGrid className="action_screen_cnt">
          <IonImg
            alt="Successfully Created Event"
            src={Success}
          />
          <IonLabel className="action_title">Successfully Created Event</IonLabel>
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
    </>
  );
};

export default CreateNewEvent;
