import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonImg,
  IonText,
  IonModal,
  IonContent,
  IonActionSheet,
} from "@ionic/react";
import SettingsCircle from "./Icons/SettingsCircle";
import inviteIcon from "../../images/icons/invite.svg";
import editIcon from "../../images/icons/Edit.svg";
import copyIcon from "../../images/icons/copy2.svg";
import eyeIcon from "../../images/icons/Eye.svg";
import deleteIcon from "../../images/icons/Delete.svg";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";
import { Media } from "@goflock/types";

interface CustomActionsProps {
  isOpen: boolean;
  onClose: () => void;
  deleteEvent?: (eventId: string) => void;
  eventRelation?: EventRelation;
  eventId?: string;
  inviteMembers?: (eventId: string) => void;
  addInvitationCards?: (files: FileList) => Promise<Media[]>;
  copyEventLink?: (eventId: string) => void;
  editEvent?: (eventId: string) => void;
  openGuestView?: (eventId: string) => void;
}

const CustomActions: React.FC<CustomActionsProps> = ({
  isOpen,
  onClose,
  deleteEvent,
  eventId,
  inviteMembers,
  //addInvitationCards,
  copyEventLink,
  editEvent,
  openGuestView,
  eventRelation,
}) => {
  const [showDeleteActionSheet, setShowDeleteActionSheet] = useState(false);
  let actionList = [
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
      icon: copyIcon,
      label: "Copy",
      type: "copy",
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
  const filteredActions = actionList.filter((action) => {
    switch (eventRelation?.visitType) {
      case "admin":
        return true;
      case "owner":
        return true;
      case "member":
        return ["copy"].includes(action.type);
      case "visitor":
        return ["copy"].includes(action.type);
      case "pass":
        return ["copy"].includes(action.type);
      case "unauthorized":
        return ["copy"].includes(action.type);
      default:
        return false;
    }
  });
  const handleAction = (selectedAction: any) => {
    console.log("handleAction", selectedAction);
    console.log("handleAction-type", selectedAction.type);

    switch (selectedAction.type) {
      case "delete":
        setShowDeleteActionSheet(true);
        break;
      case "invite":
        inviteMembers?.(eventId!);
        break;
      case "edit":
        editEvent?.(eventId!);
        break;
      case "copy":
        copyEventLink?.(eventId!);
        break;
      case "guest":
        openGuestView?.(eventId!);
        break;
      default:
        console.warn("Unknown action type:", selectedAction.type);
    }
  };

  return (
    <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.5}
      breakpoints={[0, 0.5, 0.75]}
      onDidDismiss={onClose}
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
            {filteredActions.map((action, index) => (
              <IonCol
                key={index}
                size="3"
                className={`ion-col ion-text-center`}
                onClick={() => handleAction(action)}
              >
                <IonThumbnail className="icon-thumb">
                  <IonImg
                    src={action.icon}
                    alt={action.label}
                  />
                  <IonText className="card-label">{action.label}</IonText>
                </IonThumbnail>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonActionSheet
        className="action-menu-end"
        isOpen={showDeleteActionSheet}
        onDidDismiss={() => setShowDeleteActionSheet(false)}
        buttons={[
          {
            text: "Delete Event",
            role: "destructive",
            data: {
              action: "delete",
            },
            cssClass: "fill-btn",
            handler: () => {
              deleteEvent?.(eventId!);
              onClose();
            },
          },
          {
            text: "Cancel",
            data: {
              action: "cancel",
            },
            cssClass: "rounded",
          },
        ]}
      />
    </IonModal>
  );
};

export default CustomActions;
