import React, { useState } from "react";
import "./EventDetailsPresenter.scss";
import {
  IonButton, 
  IonLabel,
  IonText,  
  IonFooter,
  IonGrid, 
  IonImg,
  IonCard,
  IonThumbnail,
  IonList,
  IonItem,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonItemDivider, 
  IonRadioGroup,
  IonRadio,
  IonInput,
} from "@ionic/react";
// import {
//   EventProps,
//   DraftEvent,
//   Event,
// } from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";  
import { EventProps } from "@goflock/types";
import Header from "../Header/Header";
// import DisplayDate from "../../utils/DisplayDate";
import EventDp from "../../images/event_DP.png";
import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/pointer.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import CalanderIcon from "../../images/icons/calander_icon.svg";
import ProfileIcon from "../../images/profile.png"; 
import MessageIcon from "../../images/icons/message_icon.svg"; 


// import Header from '../Header/Header';

const EventGuestView: React.FC<EventProps> = ({
 
}) => {
  
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

 // const [eventVisibility] = useState<EventVisibility>();

  //const [, setIsCreating] = useState<boolean>(false);

  // Handle creating an event
//   const handleCreateEvent = async () => {
// //    if (!selectedLocation || eventName.trim() === "") return;

//     setIsCreating(true);
//     // const draftEvent: DraftEvent = {
//     //   // name: eventName,
//     //   // type: eventType!,
//     //   // description: eventDescription,
//     //   // location: selectedLocation,
//     //   visibility: eventVisibility,
//     //   time: {
//     //     startDate: startDate || new Date(),
//     //     endDate,
//     //     startTime,
//     //     endTime,
//     //   },
//     //   name: "",
//     //   type: "birthday"
//     // };

//     // try {
//     //   let newEvent: Event = await createEvent(draftEvent);
//     //   goToEvent(newEvent.id);
//     // } catch (error) {
//     //   console.error("Error creating event:", error);
//     // } finally {
//     //   setIsCreating(false);
//     // }
//   };
  
  const [isActive, setIsActive] = useState(false); // State to manage the class toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the class
    setIsOpen(false);
  };

  const toggleClass2 = () => {
    setIsActive(false);
    setIsOpen(!isOpen); // Toggle the class
  };

  return (
    <>  
      <Header         
        title=''
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonGrid className="event_details">
        <IonCard className="event_info guest_page">
          <IonLabel class="event_title">Giggles & Games Gala</IonLabel>
          <IonThumbnail className="event_dp">
            <IonImg
              src={EventDp}
              alt="Event"
            />
          </IonThumbnail>
          <IonText className="event_brief">
            {/* {event.description} */}
            Lorem ipsum dolor sit amet consectetur. Feugiat tristique adipiscing augue vestibulum comma. Nec facilisi accumsan at pretium tempor et magna.  
          </IonText>
          <IonList className="listitems">
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail className="dp">
                  <IonImg
                    src={clockIcon}
                    alt="Page Back"
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">
                    {/* <DisplayDate inputDate={event.time.startDate} /> */}
                    Mar 16 (Fri) - May 18 2021 (Mon)
                  </IonCardTitle>
                  <IonCardSubtitle className="event_subtitle">
                    {/* {event.time.startTime} - {event.time.endTime} */}
                    startTime - endTime
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
              <IonThumbnail
                className="event_type"                
              >
                <IonImg
                  src={CalanderIcon}
                  alt=""
                />
              </IonThumbnail>
            </IonItem>
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail
                  className="dp"
                  //onClick={() => navigateToEventLocation(event.id)}
                >
                  <IonImg
                    src={locationIcon}
                    alt=" "
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">
                    {/* {event.location.name} */}
                    location
                  </IonCardTitle>
                </IonCardContent>
              </IonCard>
              <IonThumbnail
                className="event_type"
               // onClick={() => navigateToEventLocation(event.id)}
              >
                <IonImg
                  src={GlobeIcon}
                  alt=""
                />
              </IonThumbnail>
            </IonItem>
            <IonItemDivider className="devider"></IonItemDivider>
            <IonItem className="ion-list">
              <IonCard className="venue_info">
                <IonThumbnail
                  className="dp"
                  //onClick={() => navigateToEventLocation(event.id)}
                >
                  <IonImg
                    src={ProfileIcon}
                    alt=" "
                  />
                </IonThumbnail>
                <IonCardContent className="event_titles">
                  <IonCardTitle className="event_title">
                      Hosted by
                  </IonCardTitle>
                  <IonCardSubtitle className="event_hostname">
                    Jackson Graham
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard> 
            </IonItem>
          </IonList> 
        </IonCard> 
        <IonFooter className="action_screen_buttons">
          <IonButton 
        //  onClick={handleSubmit}
          onClick={toggleClass}
          className="primary-btn rounded">
            Submit your response
          </IonButton> 
        </IonFooter>
      </IonGrid>
      <IonGrid  
        className={`popover_action ${isActive ? "active" : ""}`}
      >      
        <IonCardContent class="overlay" onClick={toggleClass}></IonCardContent>
        <IonCard className="action_cnt">
          <IonImg class="img_icon" src={MessageIcon} />
          <IonCardTitle className="card_title">
            Will you join the Event?
          </IonCardTitle> 
          <IonRadioGroup value="" class="list_radio_group" >
            <IonRadio value="Yes">Yes</IonRadio>
            <IonRadio value="No">No</IonRadio>
            <IonRadio value="NotSure">Not Sure</IonRadio>             
          </IonRadioGroup>
            
        <IonButton 
          onClick={toggleClass2}          
          className="primary-btn rounded">
          Submit your response
        </IonButton> 
        </IonCard>        
      </IonGrid>

      <IonGrid  
        className={`popover_action ${isOpen ? "active" : ""}`}
      >  
        <IonCardContent class="overlay" onClick={toggleClass2}></IonCardContent>
        <IonCard className="action_cnt">
          <IonImg class="img_icon" src={MessageIcon} />
          <IonCardTitle className="card_title">
            How many members will come with you?
          </IonCardTitle> 
          <IonList className="form-group">
            <IonInput 
              label=""
              labelPlacement="stacked"
              placeholder="Enter number" 
            />
          </IonList> 
          <IonButton 
            onClick={toggleClass2} 
            className="primary-btn rounded">
            Complete
          </IonButton> 
        </IonCard> 
      </IonGrid>
    </>
  );
};

export default EventGuestView;
