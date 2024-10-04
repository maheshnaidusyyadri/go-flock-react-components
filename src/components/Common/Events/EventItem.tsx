// src/components/EventItem.tsx

import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";
import { Event } from "@goflock/types/src/index";
import EventDP from "../../../images/event_DP.png";
import menuIcon from "../../../images/icons/menu_icon.svg";
import DisplayDate from "../../../utils/DisplayDate";

interface EventItemProps {
  event: Event;
  onOpen: (eventId: string) => void;
  onShowActionSheet: () => void;
}

const EventItem: React.FC<EventItemProps> = ({
  event,
  onOpen,
  onShowActionSheet,
}) => (
  <IonCard
    className="event_item"
    onClick={() => onOpen(event.id)}
  >
    <IonThumbnail className="display_pic">
      <IonImg
        className="events"
        alt="Events"
        src={EventDP}
      />
    </IonThumbnail>
    <IonCardContent className="event_info">
      <IonCardTitle className="event-name">{event.name}</IonCardTitle>
      <IonLabel className="event-date">
        <DisplayDate inputDate={event.time.startDate} />
      </IonLabel>
    </IonCardContent>
    <IonThumbnail
      className="actions_menu"
      onClick={onShowActionSheet}
    >
      <IonImg
        className="events"
        alt="Event Details"
        src={menuIcon}
      />
    </IonThumbnail>
  </IonCard>
);

export default EventItem;
