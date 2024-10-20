import React, { useState } from "react";
import "./EventSplitBillPresenter.scss";
import {
  IonLabel,
  IonText,
  IonGrid,
  IonImg,
  IonThumbnail,
  IonItem,
  IonList,
  IonCardHeader,
} from "@ionic/react";
import //EventSplitBillProps,
"@goflock/types/src/index"; // Adjust the import based on your file structure
import ProfileIcon from "../../images/profile.png";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface EventSplitBillProps {
  members: {
    id: string;
    name: string;
    phone: string;
    expanse: string;
    profileImage?: string;
    className: string;
  }[];
}

const SplitBetweenPresenter: React.FC<EventSplitBillProps> = ({
  members = [],
}) => {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  // @ts-ignore
  const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  // Function to handle selecting/deselecting a member
  const handleSelectMember = (memberId: string) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(memberId)) {
        // If already selected, remove from array (deselect)
        return prevSelectedMembers.filter((id) => id !== memberId);
      } else {
        // If not selected, add to array (select)
        return [...prevSelectedMembers, memberId];
      }
    });
  };

  // Function to handle "Select All" or "Deselect All"
  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      // If all members are selected, deselect all
      setSelectedMembers([]);
    } else {
      // Select all members
      setSelectedMembers(members.map((member) => member.id));
    }
  };

  return (
    <>
      <Header
        title="Split bill between these members"
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonGrid className="pageCnt bill_cnt">
        <IonCardHeader class="card_header">
          <IonLabel class="ion-title">Members</IonLabel>
          <IonText class="list-action" onClick={handleSelectAll}>
            {selectedMembers.length === members.length
              ? "Deselect All"
              : "Select All"}
          </IonText>
        </IonCardHeader>

        <IonList className="list_wrap">
          {members.map((member, index) => (
            <IonItem
              key={index}
              className={`user_item ${
                selectedMembers.includes(member.id) ? "selected" : ""
              }`} // Conditionally apply "selected" class
              onClick={() => handleSelectMember(member.id)} // Handle click to toggle selection
            >
              <IonThumbnail slot="start" className="dp">
                <IonImg src={ProfileIcon} alt={`${member.name}'s profile`} />
              </IonThumbnail>
              <IonLabel className="user_name">
                {member.name}
                {member.phone}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        {/* <IonFooter className="action_screen_buttons">
          <IonButton className="primary-btn rounded"><IonImg src={EditIcon} /> Edit Expense</IonButton> 
        </IonFooter> */}
      </IonGrid>
      <Footer eventId="" activeTab={"bills"} />
    </>
  );
};

export default SplitBetweenPresenter;
