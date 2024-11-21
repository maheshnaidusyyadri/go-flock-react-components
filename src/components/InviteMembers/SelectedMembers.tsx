import React from "react";
import { IonButton, IonContent, IonFooter, IonLabel } from "@ionic/react";
import ProfileList from "../Common/Profiles/ProfileList";
import { EventMember } from "@goflock/types/src";

const SendSms: React.FC<{
  eventId: string;
  members: EventMember[];
  removeMember: (eventMember: EventMember) => Promise<boolean>;
  addMore?: () => void;
}> = ({ eventId, members, removeMember, addMore }) => {
  return (
    <>
      <IonContent className="ion-padding">
        <ProfileList
          eventId={eventId}
          eventMembers={members}
          removeMember={removeMember}
          type={"Grid"}
          addMore={addMore}
        />
      </IonContent>
      <IonFooter className="stickyFooter">
        <IonButton color="primary" shape="round" size="large" expand="block">
          Send sms for contacts
        </IonButton>
        <IonButton
          color="primary"
          fill="outline"
          shape="round"
          size="large"
          expand="block"
        >
          Share invitation link personally
        </IonButton>
        <IonLabel className="skip-btn ion-padding">Skip </IonLabel>
      </IonFooter>
    </>
  );
};

export default SendSms;
