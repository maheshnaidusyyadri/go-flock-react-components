import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonList,
} from "@ionic/react";
import { EventListProps } from "@goflock/types";

const EventList: React.FC<EventListProps> = ({ profile, events }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonAvatar slot="start">
          <img
            src={profile.pictureUrl}
            alt="Profile"
          />
        </IonAvatar>
        <IonCardTitle>{profile.prefName}'s Events</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {events.length === 0 ? (
          <p>No events to display.</p>
        ) : (
          <IonList>
            {events.map((event) => (
              <IonItem key={event.id}>
                <IonLabel>
                  <h2>{event.name}</h2>
                  <p>{event.description}</p>
                  <p>{new Date().toLocaleDateString()}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default EventList;
