import React from "react";
import './DashboardPresenter.scss';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonList,
  IonItem,
  IonContent,
  IonLabel,
} from "@ionic/react";
import { DashboardProps } from "@goflock/types/src/index";
import EventDP from '../../images/event_DP.png';

const DashboardPresenter: React.FC<DashboardProps> = ({
  profile,
  activeEvents,
  myEvents,
  createNewEvent,
  openEvent,
  seeAllMyEvents,
  seeAllEvents,
}) => {
  return (
    <IonContent className="dashboard">
      <IonCard className="db_profile">
        <IonCardHeader>
          <IonAvatar slot="start">
            <img
              src={profile.pictureUrl}
              alt="Profile"
            />
          </IonAvatar>
          <IonCardTitle>Welcome, {profile.prefName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {profile.isIntroShown ? (
            <p>Your preferences are set! Check out the latest events below.</p>
          ) : (
            <p>Welcome! Let's get started by setting up your preferences.</p>
          )}
          {/* <IonButton
            onClick={createNewEvent}
            expand="block"
          >
            Create New Event
          </IonButton> */}
        </IonCardContent>
      </IonCard>

      <IonCard className="events_sec">
        <IonCardHeader>
          <IonCardTitle>Active Events</IonCardTitle> 
          <span className="viewall"
            onClick={() => seeAllEvents("birthday")}
            expand="block"
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent >
          <IonList>
            {activeEvents.map((event) => (
              <div className="event_item"
                key={event.id}                
                onClick={() => openEvent(event.id)}
              > 
                <figure><img className="events" alt="Events" src={EventDP} /> </figure>
                <div className="event_info">
                  <IonLabel>{event.name}</IonLabel>
                  <span>May 16 - May 17</span>
                </div>
              </div>
            ))}
          </IonList>
          
        </IonCardContent>
      </IonCard>
      <IonCard className="events_sec">
        <IonCardHeader>
          <IonCardTitle>All Events</IonCardTitle> 
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <div className="events_list"> 
              <div className="event_info">
                <ul>
                  <li className="create">
                    <label>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9998 30.3334C8.09317 30.3334 1.6665 23.9067 1.6665 16C1.6665 8.09335 8.09317 1.66669 15.9998 1.66669C23.9065 1.66669 30.3332 8.09335 30.3332 16C30.3332 23.9067 23.9065 30.3334 15.9998 30.3334ZM15.9998 3.66669C9.19984 3.66669 3.6665 9.20002 3.6665 16C3.6665 22.8 9.19984 28.3334 15.9998 28.3334C22.7998 28.3334 28.3332 22.8 28.3332 16C28.3332 9.20002 22.7998 3.66669 15.9998 3.66669Z" fill="#71717A" />
                        <path d="M21.3332 17H10.6665C10.1198 17 9.6665 16.5467 9.6665 16C9.6665 15.4533 10.1198 15 10.6665 15H21.3332C21.8798 15 22.3332 15.4533 22.3332 16C22.3332 16.5467 21.8798 17 21.3332 17Z" fill="#71717A" />
                        <path d="M16 22.3334C15.4533 22.3334 15 21.88 15 21.3334V10.6667C15 10.12 15.4533 9.66669 16 9.66669C16.5467 9.66669 17 10.12 17 10.6667V21.3334C17 21.88 16.5467 22.3334 16 22.3334Z" fill="#71717A" />
                      </svg>
                    </label>
                    <span>Add events</span>
                  </li>
                  <li>
                    <label>
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#6764FD" />
                        <path d="M24 16C25.48 16 26.6667 14.8 26.6667 13.3333C26.6667 12.8267 26.5333 12.36 26.28 11.96L24 8L21.72 11.96C21.4667 12.36 21.3333 12.8267 21.3333 13.3333C21.3333 14.0406 21.6143 14.7189 22.1144 15.219C22.6145 15.719 23.2928 16 24 16ZM30.1333 29.3333L28.7067 27.8933L27.2667 29.3333C25.5333 31.0533 22.4933 31.0667 20.7467 29.3333L19.3333 27.8933L17.8667 29.3333C17 30.1867 15.84 30.6667 14.6133 30.6667C13.64 30.6667 12.7467 30.36 12 29.8533V36C12 36.3536 12.1405 36.6928 12.3905 36.9428C12.6406 37.1929 12.9797 37.3333 13.3333 37.3333H34.6667C35.0203 37.3333 35.3594 37.1929 35.6095 36.9428C35.8595 36.6928 36 36.3536 36 36V29.8533C35.2533 30.36 34.36 30.6667 33.3867 30.6667C32.16 30.6667 31 30.1867 30.1333 29.3333ZM32 20H25.3333V17.3333H22.6667V20H16C14.9391 20 13.9217 20.4214 13.1716 21.1716C12.4214 21.9217 12 22.9391 12 24V26.0533C12 27.4933 13.1733 28.6667 14.6133 28.6667C15.3333 28.6667 16 28.4 16.4533 27.9067L19.3333 25.0667L22.1467 27.9067C23.1333 28.8933 24.8533 28.8933 25.84 27.9067L28.6667 25.0667L31.5333 27.9067C32 28.4 32.6667 28.6667 33.3733 28.6667C34.8133 28.6667 36 27.4933 36 26.0533V24C36 22.9391 35.5786 21.9217 34.8284 21.1716C34.0783 20.4214 33.0609 20 32 20Z" fill="white" />
                      </svg>
                    </label>
                    <span>Birthdays</span>
                  </li>
                  <li>
                    <label><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#FD6612" />
                      <path d="M27.9998 32.72C30.8398 32.28 33.9998 32 37.3332 32V37.3334H14.6665C14.6665 36.4667 18.9332 34.48 25.3332 33.2V24.5334C24.2132 24.8667 23.2665 25.6134 22.6665 26.6C21.8532 25.24 20.3598 24.3334 18.6665 24.3334C16.9732 24.3334 15.4798 25.24 14.6665 26.6C14.7065 21.8267 19.3332 17.9067 25.3332 17.3867V17.3334C25.3332 16.9797 25.4736 16.6406 25.7237 16.3905C25.9737 16.1405 26.3129 16 26.6665 16C27.0201 16 27.3593 16.1405 27.6093 16.3905C27.8594 16.6406 27.9998 16.9797 27.9998 17.3334V17.3867C33.9998 17.9067 38.6132 21.8267 38.6665 26.6C37.8532 25.24 36.3598 24.3334 34.6665 24.3334C32.9732 24.3334 31.4798 25.24 30.6665 26.6C30.0665 25.6134 29.1198 24.8667 27.9998 24.52V32.72ZM17.3332 10.6667C17.3332 11.5422 17.1607 12.4091 16.8257 13.2179C16.4907 14.0267 15.9996 14.7617 15.3805 15.3807C14.7615 15.9998 14.0266 16.4909 13.2177 16.8259C12.4089 17.1609 11.542 17.3334 10.6665 17.3334V10.6667H17.3332Z" fill="white" />
                    </svg>
                    </label>
                    <span>Vacation trips</span>
                  </li>
                  <li>
                    <label><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#EA4335" />
                      <path d="M23.9998 36.4667L22.0665 34.7067C15.1998 28.48 10.6665 24.36 10.6665 19.3333C10.6665 15.2133 13.8932 12 17.9998 12C20.3198 12 22.5465 13.08 23.9998 14.7733C25.4532 13.08 27.6798 12 29.9998 12C34.1065 12 37.3332 15.2133 37.3332 19.3333C37.3332 24.36 32.7998 28.48 25.9332 34.7067L23.9998 36.4667Z" fill="white" />
                    </svg>
                    </label>
                    <span>Marriage</span>
                  </li>
                  <li>
                    <label><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#F7B20F" />
                      <path d="M24.0002 12L9.3335 20L24.0002 28L36.0002 21.4533V30.6667H38.6668V20M14.6668 25.5733V30.9067L24.0002 36L33.3335 30.9067V25.5733L24.0002 30.6667L14.6668 25.5733Z" fill="white" />
                    </svg>
                    </label>
                    <span>Graduation</span>
                  </li>
                  <li>
                    <label><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#34A853" />
                      <path d="M29.333 24.0003C29.333 23.293 29.614 22.6148 30.1141 22.1147C30.6142 21.6146 31.2924 21.3336 31.9997 21.3336C32.7069 21.3336 33.3852 21.6146 33.8853 22.1147C34.3854 22.6148 34.6663 23.293 34.6663 24.0003C34.6663 24.7075 34.3854 25.3858 33.8853 25.8859C33.3852 26.386 32.7069 26.667 31.9997 26.667C31.2924 26.667 30.6142 26.386 30.1141 25.8859C29.614 25.3858 29.333 24.7075 29.333 24.0003ZM21.333 24.0003C21.333 23.293 21.614 22.6148 22.1141 22.1147C22.6142 21.6146 23.2924 21.3336 23.9997 21.3336C24.7069 21.3336 25.3852 21.6146 25.8853 22.1147C26.3854 22.6148 26.6663 23.293 26.6663 24.0003C26.6663 24.7075 26.3854 25.3858 25.8853 25.8859C25.3852 26.386 24.7069 26.667 23.9997 26.667C23.2924 26.667 22.6142 26.386 22.1141 25.8859C21.614 25.3858 21.333 24.7075 21.333 24.0003ZM13.333 24.0003C13.333 23.293 13.614 22.6148 14.1141 22.1147C14.6142 21.6146 15.2924 21.3336 15.9997 21.3336C16.7069 21.3336 17.3852 21.6146 17.8853 22.1147C18.3854 22.6148 18.6663 23.293 18.6663 24.0003C18.6663 24.7075 18.3854 25.3858 17.8853 25.8859C17.3852 26.386 16.7069 26.667 15.9997 26.667C15.2924 26.667 14.6142 26.386 14.1141 25.8859C13.614 25.3858 13.333 24.7075 13.333 24.0003Z" fill="white" />
                    </svg>
                    </label>
                    <span>Others</span>
                  </li>
                </ul>
              </div>
            </div>
          </IonList>
          
        </IonCardContent>
      </IonCard>
      <IonCard className="events_sec">
        <IonCardHeader>
          <IonCardTitle>My Events</IonCardTitle>
          <span className="viewall"
            onClick={seeAllMyEvents}
            expand="block"
          >
            See all
          </span>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {myEvents.map((event) => (
              <div className="event_item"
                key={event.id} 
                onClick={() => openEvent(event.id)}
              > 
                <figure><img className="events" alt="Events" src={EventDP} /> </figure>
                <div className="event_info">
                <IonLabel>{event.name}</IonLabel>
                  <span>May 16 - May 17</span>
                </div>
              </div>
            ))}
          </IonList>
          
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default DashboardPresenter;
