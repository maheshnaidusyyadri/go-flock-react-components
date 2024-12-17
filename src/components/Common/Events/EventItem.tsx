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
import DisplayDate from "../../../utils/DisplayDate";
import birthdayIcon from "../../../images/icons/birthday.svg";
import vacationIcon from "../../../images/icons/vacation.svg";
import marriageIcon from "../../../images/icons/marriage.svg";
import graduationIcon from "../../../images/icons/graduation.svg";
import moreIcon from "../../../images/icons/more.svg";
import defaultEvent from "../../../images/icons/default.png";
interface EventItemProps {
  event: Event;
  onOpen: (eventId: string) => void;
  onShowActionSheet: () => void; // You may not need this prop if using local state
}

const EventItem: React.FC<EventItemProps> = ({ event, onOpen }) => {
  const showIcons = (eventType: any) => {
    if (eventType === "birthday") {
      return birthdayIcon;
    } else if (eventType === "vacation") {
      return vacationIcon;
    } else if (eventType === "marriage") {
      return marriageIcon;
    } else if (eventType === "graduation") {
      return graduationIcon;
    } else if (eventType === "Others") {
      return moreIcon;
    }
    return defaultEvent;
  };
  const getBackGround = (eventType: string) => {
    if (eventType === "birthday") {
      return "#6764fd";
    } else if (eventType === "vacation") {
      return "#fd6612";
    } else if (eventType === "marriage") {
      return "#ea4335";
    } else if (eventType === "graduation") {
      return "#f7b20f";
    }
    return "#34a853";
  };

  return (
    <>
      <IonCard className="event-item" onClick={() => onOpen(event.id)}>
        {event.invitationCards?.[0].downloadUrl ? (
          <IonThumbnail className="display_pic">
            <IonImg
              className="events"
              alt="Events"
              src={event.invitationCards?.[0].downloadUrl}
            />
          </IonThumbnail>
        ) : (
          <IonCardContent
            className="default_event_dp"
            style={{ background: getBackGround(event.type) }}
          >
            <IonThumbnail className="icon-thumb">
              <IonImg src={showIcons(event.type)}></IonImg>
            </IonThumbnail>
          </IonCardContent>
        )}
        <IonCardContent className="event-info">
          <IonCardTitle className="event-name">{event.name}</IonCardTitle>
          <IonLabel className="event-date">
            <DisplayDate inputDate={event.time} />
          </IonLabel>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default EventItem;
