import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { DashboardProps } from "@goflock/types/src/index";

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
    <div className="dashboard">
      <IonCard>
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
          <IonButton
            onClick={createNewEvent}
            expand="block"
          >
            Create New Event
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Active Events</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {activeEvents.map((event) => (
              <IonItem
                key={event.id}
                button
                onClick={() => openEvent(event.id)}
              >
                <IonLabel>{event.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
          <IonButton
            onClick={() => seeAllEvents("birthday")}
            expand="block"
          >
            See All Active Events
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>My Events</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {myEvents.map((event) => (
              <IonItem
                key={event.id}
                button
                onClick={() => openEvent(event.id)}
              >
                <IonLabel>{event.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
          <IonButton
            onClick={seeAllMyEvents}
            expand="block"
          >
            See All My Events
          </IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default DashboardPresenter;
