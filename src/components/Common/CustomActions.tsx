import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonImg,
  IonText,
  IonModal,
  IonContent,
} from "@ionic/react";
import clockIcon from "../../images/Clock.svg";
import SettingsCircle from "./Icons/SettingsCircle";

interface CustomActionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomActions: React.FC<CustomActionsProps> = ({ isOpen, onClose }) => {
  const options = [
    {
      icon: clockIcon,
      label: "Delete",
      type: "delete",
    },
  ];

  return (
    <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.6}
      breakpoints={[0, 0.6, 0.75]}
      onDidDismiss={onClose} // Notify parent when modal is closed
      className="action-modal ion-padding-top"
    >
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-margin ion-no-padding">
          <IonRow>
            <IonCol className="actions-head ion-padding-bottom">
              <SettingsCircle />
              <h3 className="ion-text-center action-title">Manage Event</h3>
              <p className="ion-text-center action-subtitle">
                Try these options to manage your event.
              </p>
            </IonCol>
          </IonRow>
          <IonRow className="action-grid">
            {options.map((event, index) => (
              <IonCol
                key={index}
                size="4"
                className={`ion-col ion-text-center`}
              >
                <IonThumbnail className="icon-thumb">
                  <IonImg src={event.icon} alt={event.label} />
                </IonThumbnail>
                <IonText className="card-label">{event.label}</IonText>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default CustomActions;
