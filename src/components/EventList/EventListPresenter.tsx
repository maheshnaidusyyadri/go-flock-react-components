import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
  IonList,
} from "@ionic/react";
import { EventListProps } from "@goflock/types/src/index";
import EventItem from "../common/EventItem";

const EventListPresenter: React.FC<EventListProps> = ({
  profile,
  events,
  openEvent,
}) => {
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
              <EventItem
                key={event.id}
                event={event}
                onOpen={openEvent}
                onShowActionSheet={() => {}}
              />
            ))}
          </IonList>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default EventListPresenter;
