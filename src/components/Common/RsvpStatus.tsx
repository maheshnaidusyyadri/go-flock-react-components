import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
  IonText,
} from "@ionic/react";

import userTickIcon from "../../images/icons/userTick.svg";
import helpIcon from "../../images/icons/help.svg";
import userCrossIcon from "../../images/icons/userCross.svg";
import { Event } from "@goflock/types/src/index";

interface RsvpStatusProps {
  event?: Event;
}

const RsvpStatus: React.FC<RsvpStatusProps> = ({ event }) => {
  console.log("event-event@@@", event);
  return (
    <IonGrid className="rsvp-status">
      {event?.counters && (
        <IonLabel className="status-title">RSVP Status</IonLabel>
      )}
      <IonRow className="status-cards">
        {Object.entries(event?.counters || {})
          .filter(([statusName]) =>
            ["attendingRSVP", "maybeRSVP", "declinedRSVP"].includes(statusName)
          )
          .map(([statusName, statusData]) => {
            if (!statusData) return null;

            const statusClass =
              statusName === "attendingRSVP"
                ? "status_card"
                : statusName === "declinedRSVP"
                ? "status_card error"
                : statusName === "maybeRSVP"
                ? "status_card warning"
                : "";

            const iconSrc =
              statusName === "attendingRSVP"
                ? userTickIcon
                : statusName === "maybeRSVP"
                ? helpIcon
                : userCrossIcon;

            const statusLabel =
              statusName === "attendingRSVP"
                ? "Attending"
                : statusName === "maybeRSVP"
                ? "Maybe"
                : "Declined";

            return (
              <IonCol key={statusName} className={statusClass}>
                <IonItem className="rvsp_info">
                  <IonAvatar className="avatar">
                    <IonImg className="ion-img" src={iconSrc} alt="Event" />
                  </IonAvatar>
                  <IonLabel className="ion-label">
                    {statusData.total}
                    <IonText className="rsvp_response">{statusLabel}</IonText>
                  </IonLabel>
                </IonItem>

                <IonLabel className="guests-count">
                  (<IonText className="count">{statusData.adults}</IonText>{" "}
                  Adults &{" "}
                  <IonText className="count">{statusData.kids}</IonText>{" "}
                  Children)
                </IonLabel>
              </IonCol>
            );
          })}
      </IonRow>
    </IonGrid>
  );
};

export default RsvpStatus;
