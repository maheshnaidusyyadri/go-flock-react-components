import React, { useState, useEffect } from "react";
import { IonPage } from "@ionic/react";
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
    <IonPage>
      <ProfileList
        eventId={eventId}
        eventMembers={updatedMembers}
        removeMember={removeMember}
      />
    </IonPage>
  );
};

export default SendSms;
