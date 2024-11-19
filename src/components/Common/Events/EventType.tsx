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
const EventType: React.FC = ({}) => {
  const eventTypes = [
    { label: "Birthdays", icon: birthdayIcon },
    { label: "Vacation trips", icon: vacationIcon },
    { label: "Marriage", icon: marriageIcon },
    { label: "Graduation", icon: graduationIcon },
    { label: "Others", icon: moreIcon },
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
              <IonCol key={index} size="4" className="ion-col">
                <IonThumbnail className="icon-thumb">
                  <IonImg src={event.icon} alt={event.label} />
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

export default EventType;
