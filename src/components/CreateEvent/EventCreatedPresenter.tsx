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
import Success from "../../images/celebration.svg";
import { EventVisibility } from "@goflock/types";
import Header from "../Header/Header";

// import Header from '../Header/Header';

const EventCreatedPresenter: React.FC<CreateNewEventProps> = ({
  createEvent,
  goToEvent,
}) => {
  const [] =
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

  const [eventVisibility] = useState<EventVisibility>();

  const [, setIsCreating] = useState<boolean>(false);

  // Handle creating an event
  const handleCreateEvent = async () => {
    //if (!selectedLocation || eventName.trim() === "") return;

    setIsCreating(true);
    const draftEvent: DraftEvent = {
      // name: eventName,
      // type: eventType!,
      // description: eventDescription,
      // location: selectedLocation,
      visibility: eventVisibility,
      time: {
        startDate: startDate || new Date(),
        endDate,
        startTime,
        endTime,
      },
      name: "",
      type: "birthday"
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
        className="action_screen has_header">
        <IonGrid className="action_screen_cnt">
          <IonImg className="ion-img"
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
          <IonButton className="secondary-btn" onClick={handleCreateEvent}>
            Invite Friends To The Event
          </IonButton>
        </IonFooter>
      </IonGrid>
    </>
  );
};

export default EventCreatedPresenter;
