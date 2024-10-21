import React from "react";
import { IonAvatar, IonLabel, IonThumbnail } from "@ionic/react";
import "./ProfileList.scss"; // Custom CSS file
import { EventMember } from "@goflock/types/src";
import unselect from "../../../images/icons/remove.svg";

interface ProfileListProps {
  eventId: string;
  eventMembers: EventMember[];
}

const ProfileList: React.FC<ProfileListProps> = ({ eventMembers }) => {
  console.log("eventMembers", eventMembers);
  const getDisplayName = (name: any) => {
    return name.length > 1
      ? name.slice(0, 2).toUpperCase()
      : name.toUpperCase();
  };
  return (
    <div className="profile-list">
      {eventMembers.map((eventMember) => (
        <div key={eventMember.id} className="profile-item">
          <IonThumbnail className="profile-avatar-wrapper">
            {eventMember.profileImg ? (
              <IonAvatar className="profile-avatar">
                <img src={eventMember.profileImg} alt={eventMember.name} />
              </IonAvatar>
            ) : (
              <IonAvatar className="profile-dp">
                {getDisplayName(eventMember?.name)}
              </IonAvatar>
            )}
            <img src={unselect} alt="status" className="remove_user" />
          </IonThumbnail>
          <IonLabel className="profile-name">{eventMember.name}</IonLabel>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
