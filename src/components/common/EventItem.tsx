// src/components/EventItem.tsx

import React from "react";
import { IonImg, IonLabel, IonThumbnail } from "@ionic/react";
import { Event } from "@goflock/types/src/index";
import EventDP from "../../images/event_DP.png";
import menuIcon from "../../images/menuIcon.svg";
import DisplayDate from "../../utils/DisplayDate";

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
  <div
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
    <div className="event_info">
      <IonLabel className="event-name">{event.name}</IonLabel>
      <span>
        <DisplayDate inputDate={event.time.startDate} />
      </span>
    </div>
    <span
      className="actions_menu"
      onClick={onShowActionSheet}
    >
      <img
        className="events"
        alt="Event Details"
        src={menuIcon}
      />
    </span>
  </div>
);

export default EventItem;
