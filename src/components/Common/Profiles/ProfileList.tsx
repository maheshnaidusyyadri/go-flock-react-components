import React from "react";
import { IonAvatar, IonLabel, IonThumbnail } from "@ionic/react";
import "./ProfileList.css"; // Custom CSS file
import { EventMember } from "@goflock/types/src";
import Selected from "../../../images/icons/selected.svg";

interface ProfileListProps {
  eventId: string;
  eventMembers: EventMember[];
}

const ProfileList: React.FC<ProfileListProps> = ({ eventMembers }) => {
  console.log("eventMembers",eventMembers);
  const getDisplayName = (name: any) => {
    return name.length > 1 ? name.slice(0, 2).toUpperCase() : name.toUpperCase();
  };
  return (
    <div className="profile-list">
      {eventMembers.map((eventMember) => (
        <div
          key={eventMember.id}
          className="profile-item"
        >
          <IonThumbnail className="profile-avatar-wrapper">
            
            {eventMember.profileImg ? (
                <IonAvatar className="profile-avatar">
                <img
                  src={eventMember.profileImg}
                  alt={eventMember.name}
                />
              </IonAvatar>
              ) : (
                <IonAvatar className="profile-dp">
                  {getDisplayName(eventMember?.name)}
                </IonAvatar>
             )}
            <img
              src={Selected}
              alt="status"
              className="status-icon"
            />
          </IonThumbnail>
          <IonLabel className="profile-name">{eventMember.name}</IonLabel>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
