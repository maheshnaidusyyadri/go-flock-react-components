import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonLabel,
  IonPage,
} from "@ionic/react";
import ProfileList from "../Common/Profiles/ProfileList";
import { EventMember } from "@goflock/types/src";

const SendSms: React.FC<{
  eventId: string;
  members: EventMember[];
  removeMember: (eventMember: EventMember) => Promise<boolean>;
}> = ({ eventId, members, removeMember }) => {
  const [updatedMembers, setUpdatedMembers] = useState<EventMember[]>([]);

  useEffect(() => {
    const staticMember: EventMember = {
      id: "Add",
      name: "Add More",
    };
    setUpdatedMembers([staticMember, ...members]);
  }, [members]);

  return (
    <>
      <IonContent className="ion-padding">
        <ProfileList
          eventId={eventId}
          eventMembers={updatedMembers}
          removeMember={removeMember}
        />
      </IonContent>
      <IonFooter className="stickyFooter">
        <IonButton color="primary" shape="round" size="large" expand="block">
          Send sms for contacts
        </IonButton>
        <IonButton color="primary" shape="round" size="large" expand="block">
          Share invitation link personally
        </IonButton>
        <IonLabel className="skip-btn ion-padding">Skip </IonLabel>
      </IonFooter>
    </>
  );
};

export default SendSms;
