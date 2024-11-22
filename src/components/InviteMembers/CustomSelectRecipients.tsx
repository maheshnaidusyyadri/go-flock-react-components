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
import vacationIcon from "../../images/icons/vacation.svg";
import birthdayIcon from "../../images/icons/birthday.svg";
import marriageIcon from "../../images/icons/marriage.svg";
import graduationIcon from "../../images/icons/graduation.svg";
import moreIcon from "../../images/icons/more.svg";

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
    { label: "ALL(10)", icon: birthdayIcon },
    { label: "Not Responding(5)", icon: vacationIcon },
    { label: "Attending(15)", icon: marriageIcon },
    { label: "Not Attending(5)", icon: graduationIcon },
    { label: "Not Sure(2)", icon: moreIcon },
  ];

  const selectedValue = (selectedItem: any) => {
    console.log("selectedItem", selectedItem);
    if (onChange) {
      onChange(selectedItem.label);
    }
  };

  return (
    <>
      <IonGrid className="ion-no-margin ion-no-padding">
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
