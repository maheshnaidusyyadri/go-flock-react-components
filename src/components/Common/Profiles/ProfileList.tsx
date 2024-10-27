import React from "react";
import { IonAvatar, IonLabel, IonThumbnail } from "@ionic/react";
import "./ProfileList.scss"; // Custom CSS file
import { EventMember } from "@goflock/types/src";
import unselect from "../../../images/icons/remove.svg";
import attendingIcon from "../../../images/icons/Attending.svg";
import notAttendingIcon from "../../../images/icons/notAttending.svg";
import notSureIcon from "../../../images/icons/notSure.svg";

interface ProfileListProps {
  eventId: string;
  eventMembers: EventMember[];
  type?: string;
  onSelectMember?: (member: any) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  eventMembers,
  onSelectMember,
}) => {
  console.log("eventMembers", eventMembers);
  const getDisplayName = (name: any) => {
    return name.length > 1
      ? name.slice(0, 2).toUpperCase()
      : name.toUpperCase();
  };
  const showStatusIcons = (eventMember: any) => {
    if (eventMember.rsvp && eventMember.rsvp.response) {
      switch (eventMember.rsvp.response) {
        case "attending":
          return attendingIcon;
        case "not-attending":
          return notAttendingIcon;
        case "maybe":
          return notSureIcon;
        default:
          return unselect;
      }
    }
    return unselect;
  };
  return (
    <div className="profile-list">
      {eventMembers.map((eventMember) => (
        <div
          key={eventMember.id}
          className="profile-item"
          onClick={() => onSelectMember && onSelectMember(eventMember)}
        >
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
            <img
              src={showStatusIcons(eventMember)}
              alt="status"
              className="remove_user"
            />
          </IonThumbnail>
          <IonLabel className="profile-name">{eventMember.name}</IonLabel>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
