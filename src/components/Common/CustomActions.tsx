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
import SettingsCircle from "./Icons/SettingsCircle";
import inviteIcon from "../../images/icons/invite.svg";
import editIcon from "../../images/icons/Edit.svg";
import imageIcon from "../../images/icons/image.svg";
import copyIcon from "../../images/icons/copy2.svg";
import checklistIcon from "../../images/icons/checklist2.svg";
import eyeIcon from "../../images/icons/Eye.svg";
import deleteIcon from "../../images/icons/Delete.svg";

interface CustomActionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomActions: React.FC<CustomActionsProps> = ({ isOpen, onClose }) => {
  const options = [
    {
      icon: inviteIcon,
      label: "Invite",
      type: "invite",
    },
    {
      icon: editIcon,
      label: "Edit",
      type: "edit",
    },
    {
      icon: imageIcon,
      label: "Image",
      type: "image",
    },
    {
      icon: copyIcon,
      label: "Copy",
      type: "copy",
    },
    {
      icon: checklistIcon,
      label: "Checklist",
      type: "checklist",
    },
    {
      icon: eyeIcon,
      label: "Guest View",
      type: "guest",
    },
    {
      icon: deleteIcon,
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
          <IonRow className="action-grid v2">
            {options.map((event, index) => (
              <IonCol
                key={index}
                size="4"
                className={`ion-col ion-text-center`}
              >
                <IonThumbnail className="icon-thumb">
                  <IonImg src={event.icon} alt={event.label} />
                  <IonText className="card-label">{event.label}</IonText>
                </IonThumbnail>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default CustomActions;
