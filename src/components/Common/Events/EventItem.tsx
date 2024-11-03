// src/components/EventItem.tsx

import React, { useEffect, useState } from "react";
import {
  IonActionSheet,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";
import { Event } from "@goflock/types/src/index";
import menuIcon from "../../../images/icons/menu_icon.svg";
import DisplayDate from "../../../utils/DisplayDate";

interface EventItemProps {
  event: Event;
  onOpen: (eventId: string) => void;
  onShowActionSheet: () => void; // You may not need this prop if using local state
}

const EventItem: React.FC<EventItemProps> = ({ event, onOpen }) => {
  const [showFirstActionSheet, setShowFirstActionSheet] = useState(false);

  const handleActionSheetDismiss = () => {
    setShowFirstActionSheet(false);
  };
  useEffect(() => {
    console.log("event-event", event);
  }, []);

  const handleAction = (action: string) => {
    switch (action) {
      case "edit":
        // Handle edit action
        break;
      case "checklist":
        // Handle add checklist action
        break;
      case "delete":
        // Handle delete action
        break;
      default:
        break;
    }
    handleActionSheetDismiss(); // Dismiss the action sheet after an action is taken
  };

  return (
    <>
      <IonCard
        className="event_item"
        onClick={() => onOpen(event.id)}
      >
        <IonThumbnail className="display_pic">
          <IonImg
            className="events"
            alt="Events"
            src={event.invitationCard?.url}
          />
        </IonThumbnail>
        <IonCardContent className="event_info">
          <IonCardTitle className="event-name">{event.name}</IonCardTitle>
          <IonLabel className="event-date">
            <DisplayDate inputDate={event.time} />
          </IonLabel>
        </IonCardContent>
        <IonThumbnail
          className="actions_menu"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onCardClick
            setShowFirstActionSheet(true);
          }}
        >
          <IonImg
            className="events"
            alt="Event Details"
            src={menuIcon}
          />
        </IonThumbnail>
      </IonCard>

      <IonActionSheet
        isOpen={showFirstActionSheet}
        onDidDismiss={handleActionSheetDismiss}
        buttons={[
          {
            text: "Copy link",
            role: "destructive",
            data: { action: "copy" },
            handler: () => handleAction("copy"),
          },
          {
            text: "Edit Event",
            data: { action: "edit" },
            handler: () => handleAction("edit"),
          },
          {
            text: "Add Checklist",
            data: { action: "checklist" },
            handler: () => handleAction("checklist"),
          },
          {
            text: "Delete Event",
            role: "destructive",
            data: { action: "delete" },
            handler: () => handleAction("delete"),
          },
        ]}
      />
    </>
  );
};

export default EventItem;
