import React from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
  IonThumbnail,
  IonImg,
  IonText,
} from "@ionic/react";
import SettingsCircle from "../Icons/SettingsCircle";
import vacationIcon from "../../../images/icons/vacation.svg";
import birthdayIcon from "../../../images/icons/birthday.svg";
import marriageIcon from "../../../images/icons/marriage.svg";
import graduationIcon from "../../../images/icons/graduation.svg";
import moreIcon from "../../../images/icons/more.svg";
import { EventType } from "@goflock/types";

interface EventTypeSelectionProps {
  createNewEvent: (eventType: EventType) => void;
}

interface EventTypeCollection {
  label: string;
  icon: string;
  type: EventType;
}

const EventTypeSelection: React.FC<EventTypeSelectionProps> = ({
  createNewEvent,
}) => {
  const eventTypes: EventTypeCollection[] = [
    {
      label: "Birthday",
      icon: birthdayIcon.src || (birthdayIcon.value as unknown as string),
      type: "birthday",
    },
    {
      label: "Baby shower",
      icon: marriageIcon.src || (marriageIcon.value as unknown as string),
      type: "baby_shower",
    },
    {
      label: "Graduation",
      icon: graduationIcon.src || (graduationIcon.value as unknown as string),
      type: "reunion",
    },
    {
      label: "Get togather",
      icon: marriageIcon.src || (marriageIcon.value as unknown as string),
      type: "get_togather",
    },
    {
      label: "Vacation trip",
      icon: vacationIcon.src || (vacationIcon.value as unknown as string),
      type: "vacation",
    },
    {
      label: "Others",
      icon: moreIcon.src || (moreIcon.value as unknown as string),
      type: "other",
    },
  ];

  return (
    <>
      <IonContent className="ion-padding ">
        <IonGrid className="ion-no-margin ion-no-padding">
          <IonRow>
            <IonCol className="actions-head ion-padding-bottom">
              <SettingsCircle />
              <h3 className="ion-text-center action-title">Event type</h3>
              <p className="ion-text-center action-subtitle">
                Select event type
              </p>
            </IonCol>
          </IonRow>

          <IonRow className="action-grid">
            {eventTypes.map((event, index) => (
              <IonCol
                key={index}
                size="4"
                className="ion-col"
                onClick={() => createNewEvent(event.type)}
              >
                <IonThumbnail className="icon-thumb">
                  <IonImg
                    src={event.icon}
                    alt={event.label}
                  />
                </IonThumbnail>

                <IonText className="card-label ion-text-center">
                  {event.label}
                </IonText>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default EventTypeSelection;
