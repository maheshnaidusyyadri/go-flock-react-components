// src/components/EventSection.tsx

import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonButton,
} from "@ionic/react";
import EventItem from "./EventItem";
import { Event } from "@goflock/types/src/index";

interface EventSectionProps {
  title: string;
  events: Event[];
  onSeeAll?: () => void;
  onOpenEvent: (eventId: string) => void;
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  events,
  onSeeAll,
  onOpenEvent,
}) => (
  <IonCard className="events_sec">
    <IonCardHeader className="events_head">
      <IonCardTitle className="events_title">{title}</IonCardTitle>
      {onSeeAll && (
        <IonButton
          className="viewall"
          onClick={onSeeAll}
        >
          See all
        </IonButton>
      )}
    </IonCardHeader>
    <IonCardContent className="events_cnt">
      <IonList className="ion-list">
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onOpen={onOpenEvent}
            onShowActionSheet={() => {}}
          />
        ))}
      </IonList>
    </IonCardContent>
  </IonCard>
);

export default EventSection;
