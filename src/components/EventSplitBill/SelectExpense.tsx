import React, { useState } from "react";
import "./EventSplitBillPresenter.scss";
import {
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonCardHeader,
  IonText,
  IonHeader,
  IonTitle,
  IonAvatar,
  IonContent,
} from "@ionic/react";
import backArrow from "../../images/icons/back-arrow.svg";
import { getDisplayName } from "../../utils/utils";
import selected from "../../images/icons/checked.svg";

interface SelectMembersProps {
  members: any[];
  isMultiple?: boolean;
  onMemberSelect: (selectedMembers: any[] | any | null) => void;
  modalClose: () => void;
  title?: string;
}

const SelectMembers: React.FC<SelectMembersProps> = ({
  members = [],
  isMultiple = false,
  onMemberSelect,
  modalClose,
  title,
}) => {
  const [selectedMembers, setSelectedMembers] = useState<any[]>([]);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const handleSelectMember = (member: any) => {
    if (isMultiple) {
      setSelectedMembers((prevSelectedMembers) => {
        const updatedSelectedMembers = prevSelectedMembers.includes(member)
          ? prevSelectedMembers.filter((m) => m.id !== member.id)
          : [...prevSelectedMembers, member];

        onMemberSelect(updatedSelectedMembers);
        return updatedSelectedMembers;
      });
    } else {
      const newSelectedMember =
        selectedMember?.id === member.id ? null : member;
      setSelectedMember(newSelectedMember);
      onMemberSelect(newSelectedMember);
    }
  };
  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]);
      onMemberSelect([]);
    } else {
      setSelectedMembers(members);
      onMemberSelect(members);
    }
  };
  const handleBack = () => {
    modalClose();
  };
  return (
    <>
      <IonHeader className="main-header">
        <div className="header-cnt">
          <IonImg src={backArrow} alt="Page Back" onClick={handleBack} />
          <IonTitle className="page-title">{title}</IonTitle>
        </div>
      </IonHeader>
      <IonContent className="members_cnt">
        <IonGrid className="aroundspace">
          <IonCardHeader className="card_header">
            <IonLabel className="ion-title">Members</IonLabel>
            {isMultiple && (
              <IonText className="list-action" onClick={handleSelectAll}>
                {selectedMembers.length === members.length
                  ? "Deselect All"
                  : "Select All"}
              </IonText>
            )}
          </IonCardHeader>

          <IonList className="list_wrap">
            {members.map((member: any, index: number) => (
              <IonItem
                key={index}
                className="user_item"
                onClick={() => handleSelectMember(member)}
              >
                <IonThumbnail slot="start" className="dp">
                  {member.profileImg ? (
                    <IonImg
                      src={member.profileImg}
                      alt={`${member.name}'s profile`}
                    />
                  ) : (
                    <IonAvatar className="profile-dp">
                      {getDisplayName(member?.name)}
                    </IonAvatar>
                  )}
                </IonThumbnail>
                <IonLabel className="user_name">
                  {member.name || member.phone}
                </IonLabel>
                {((isMultiple &&
                  selectedMembers.some((m) => m.id === member.id)) ||
                  (!isMultiple && selectedMember?.id === member.id)) && (
                  <IonImg src={selected} />
                )}
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default SelectMembers;
