import React from "react";
import { IonAvatar, IonImg, IonLabel, IonThumbnail } from "@ionic/react";
import "./ProfileList.scss";
import { EventMember } from "@goflock/types/src";
import attendingIcon from "../../../images/icons/Attending.svg";
import notAttendingIcon from "../../../images/icons/notAttending.svg";
import notSureIcon from "../../../images/icons/notSure.svg";
import AddMember from "../../../images/icons/add-more.svg";
import closeIcon from "../../../images/icons/close.svg";
interface ProfileListProps {
  eventId: string;
  eventMembers: EventMember[];
  type?: string;
  onSelectMember?: (member: EventMember) => void;
  removeMember?: (eventMember: EventMember) => Promise<boolean>;
  addMore?: () => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  eventMembers,
  onSelectMember,
  removeMember,
  type,
  addMore,
}) => {
  const getDisplayName = (name: string) => {
    return name?.length > 1
      ? name.slice(0, 2).toUpperCase()
      : name.toUpperCase();
  };

  const showStatusIcons = (eventMember: EventMember) => {
    if (eventMember?.rsvp && eventMember.rsvp?.response) {
      switch (eventMember.rsvp.response) {
        case "attending":
          return (
            attendingIcon.src || (attendingIcon.value as unknown as string)
          );
        case "not-attending":
          return (
            notAttendingIcon.src ||
            (notAttendingIcon.value as unknown as string)
          );
        case "maybe":
          return notSureIcon.src || (notSureIcon.value as unknown as string);
        default:
          return "";
      }
    }
    return "";
  };
  const removeSelectedMember = (selectedItem: any) => {
    if (onSelectMember) {
      onSelectMember(selectedItem);
    }
    if (removeMember) {
      removeMember(selectedItem);
    }
  };

  return (
    <div
      className={` ${
        type == "Grid" ? "profile-list profile-grid" : "profile-list"
      }`}
    >
      {eventMembers.map((eventMember) => (
        <div
          key={eventMember.id}
          className="profile-item"
          onClick={() => removeSelectedMember(eventMember)}
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
                {getDisplayName(eventMember?.name!)}
              </IonAvatar>
            )}
            {showStatusIcons(eventMember).length > 0 && (
              <img
                src={showStatusIcons(eventMember)}
                alt="status"
                className="remove_user"
              />
            )}
            <span className="remove_user">
              <IonImg
                src={closeIcon.src || (closeIcon.value as unknown as string)}
              />
            </span>
          </IonThumbnail>
          <IonLabel className="profile-name">{eventMember.name}</IonLabel>
        </div>
      ))}
      {type == "Grid" && (
        <div className="profile-item">
          <IonThumbnail
            onClick={() => {
              if (addMore) {
                addMore();
              }
            }}
          >
            <IonImg
              src={AddMember.src || (AddMember.value as unknown as string)}
            />
          </IonThumbnail>
          <IonLabel className="profile-name">Add more</IonLabel>
        </div>
      )}
    </div>
  );
};

export default ProfileList;
