import React from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  //IonContent,
  IonThumbnail,
  IonImg,
  IonText,
} from "@ionic/react";
import SettingsCircle from "../Common/Icons/SettingsCircle";
import allIcon from "../../images/rsvp/all.svg";
import attendingIcon from "../../images/rsvp/attending.svg";
import notAttendingIcon from "../../images/rsvp/notAttending.svg";
import notRespondedIcon from "../../images/rsvp/notResponded.svg";
import notSureIcon from "../../images/rsvp/notSure.svg";

// Define the props type
interface CustomSelectRecipientsProps {
  onChange?: (selectedEvent: string) => void;
  defaultValue: any;
}

// Use props with proper typing
const CustomSelectRecipients: React.FC<CustomSelectRecipientsProps> = ({
  onChange,
  defaultValue,
}) => {
  const eventTypes = [
    { label: "ALL (10)", icon: allIcon },
    { label: "Not Responding (5)", icon: attendingIcon },
    { label: "Attending (15)", icon: notAttendingIcon },
    { label: "Not Attending (5)", icon: notRespondedIcon },
    { label: "Not Sure (2)", icon: notSureIcon },
  ];

  const selectedValue = (selectedItem: any) => {
    console.log("selectedItem", selectedItem);
    if (onChange) {
      onChange(selectedItem.label);
    }
  };

  return (
    <>
      <IonGrid className="ion-no-margin ion-no-padding action-modal-cnt">
        <IonRow>
          <IonCol className="actions-head ion-padding-bottom">
            <SettingsCircle />
            <h3 className="ion-text-center action-title">Event type</h3>
            <p className="ion-text-center action-subtitle">Select event type</p>
          </IonCol>
        </IonRow>
        <IonRow className="action-grid">
          {eventTypes.map((event, index) => (
            <IonCol
              key={index}
              size="4"
              className={`ion-col ${
                defaultValue === event.label ? "selected" : ""
              }`}
              onClick={() => {
                selectedValue(event);
              }}
            >
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
    </>
  );
};

export default CustomSelectRecipients;
