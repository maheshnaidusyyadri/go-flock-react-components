import React, { useEffect, useState } from "react";
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
} from "@ionic/react";
import ProfileIcon from "../../images/profile.png";
import backArrow from "../../images/icons/back-arrow.svg";

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
  // Handle member selection
  const handleSelectMember = (member: any) => {
    if (isMultiple) {
      setSelectedMembers((prevSelectedMembers) => {
        const updatedSelectedMembers = prevSelectedMembers.includes(member)
          ? prevSelectedMembers.filter((m) => m.id !== member.id) // Deselect if already selected
          : [...prevSelectedMembers, member]; // Select if not selected

        onMemberSelect(updatedSelectedMembers); // Pass selected members to parent
        return updatedSelectedMembers;
      });
    } else {
      const newSelectedMember =
        selectedMember?.id === member.id ? null : member;
      setSelectedMember(newSelectedMember);
      onMemberSelect(newSelectedMember); // Pass selected member to parent
    }
  };
  // Handle "Select All" or "Deselect All" for multiple selection
  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]); // Deselect all
      onMemberSelect([]); // Pass deselected state to parent
    } else {
      setSelectedMembers(members); // Select all members
      onMemberSelect(members); // Pass all selected members to parent
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
      <IonGrid className="pageCnt bill_cnt">
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
              className={`user_item ${
                (isMultiple &&
                  selectedMembers.some((m) => m.id === member.id)) ||
                (!isMultiple && selectedMember?.id === member.id)
                  ? "selected"
                  : ""
              }`} // Conditional class for selection
              onClick={() => handleSelectMember(member)} // Handle selection
            >
              <IonThumbnail slot="start" className="dp">
                <IonImg
                  src={member.profileImage || ProfileIcon}
                  alt={`${member.name}'s profile`}
                />
              </IonThumbnail>
              <IonLabel className="user_name">
                {member.name}
                {member.phone}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonGrid>
    </>
  );
};

export default SelectMembers;
