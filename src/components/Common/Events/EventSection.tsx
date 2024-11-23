// src/components/EventSection.tsx

import React from "react";
import { IonCol, IonRow, IonGrid } from "@ionic/react";
import EventItem from "./EventItem";
import { Event } from "@goflock/types/src/index";
import NoEvent from "./NoEvent";

interface EventSectionProps {
  title: string;
  events: Event[];
  onSeeAll?: () => void;
  onOpenEvent: (eventId: string) => void;
}

const EventSection: React.FC<EventSectionProps> = ({ events, onOpenEvent }) => (
  <>
    <IonGrid className="events_sec ion-no-padding ion-no-margin">
      <IonRow className="event-row">
        {events && events.length > 0 ? (
          events.map((event) => (
            <IonCol
              key={event.id}
              size="6"
              className="event-col"
            >
              <EventItem
                event={event}
                onOpen={onOpenEvent}
                onShowActionSheet={() => {}}
              />
            </IonCol>
          ))
        ) : (
          <IonCol
            size="12"
            className="no-events"
          >
            <NoEvent />
          </IonCol>
        )}
      </IonRow>
    </IonGrid>
  </>
);

export default EventSection;
