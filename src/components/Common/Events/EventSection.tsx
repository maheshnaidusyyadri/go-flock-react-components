// src/components/EventSection.tsx

import React from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonCol,
  IonRow,
  IonGrid,
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
  <>
    <IonCardHeader className="events_head">
      <IonCardTitle className="events_title">{title}</IonCardTitle>
      {onSeeAll && (
        <IonLabel className="viewall" onClick={onSeeAll}>
          See all
        </IonLabel>
      )}
    </IonCardHeader>
    <IonGrid className="events_sec ion-no-padding ion-no-margin">
      <IonRow className="event-row">
        {events.map((event) => (
          <IonCol size="6" className="event-col">
            <EventItem
              key={event.id}
              event={event}
              onOpen={onOpenEvent}
              onShowActionSheet={() => {}}
            />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  </>
);

export default EventSection;
