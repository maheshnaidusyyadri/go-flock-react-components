import React, { useState } from "react";
import "./CreateNewEventPresenter.scss";
import {
  IonButton, 
  IonLabel,
  IonText,  
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
import noEvent from "../../images/noEvent.svg"; 
import { EventType, EventVisibility } from "@goflock/types";
import Header from "../Header/Header";

// import Header from '../Header/Header';

const NoEvent: React.FC<CreateNewEventProps> = ({
  createEvent,
  goToEvent,
}) => {
  const [selectedLocation] =
    useState<LocationInfo | null>();
  // const [eventName, setEventName] = useState<string>("");
  // const [eventType, setEventType] = useState<EventType>();
  // const [eventDescription, setEventDescription] = useState<string>("");
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

  return (
    <>  
      <Header         
        title=''
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonGrid
        className="action_screen h-auto"        
      >
        <IonGrid className="action_screen_cnt">
          <IonImg
            alt="Successfully Created Event"
            src={noEvent}
          />
          <IonLabel className="action_title">Planning a party with friends?</IonLabel>
          <IonText className="action_info">
            Create an event and share with your friends in an easy and simple way
          </IonText>
        </IonGrid>
        <IonFooter className="action_screen_buttons">
          <IonButton onClick={handleCreateEvent} className="primary-btn">Create Event</IonButton> 
        </IonFooter>
      </IonGrid>
    </>
  );
};

export default NoEvent;
