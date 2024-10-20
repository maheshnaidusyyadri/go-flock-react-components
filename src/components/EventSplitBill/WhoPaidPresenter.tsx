import React, { useState } from "react";
import "./EventSplitBillPresenter.scss";
import {
  IonLabel,
  IonGrid,
  IonImg,
  IonThumbnail,
  IonItem,
  IonList,
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

const WhoPaidPresenter: React.FC<EventSplitBillProps> = ({ members = [] }) => {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // @ts-ignore
  const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

  // Function to handle selection
  const handleSelectMember = (memberId: string) => {
    // If the clicked member is already selected, unselect it; otherwise, select the clicked member
    setSelectedMemberId((prevSelectedMemberId) =>
      prevSelectedMemberId === memberId ? null : memberId
    );
  };

  return (
    <>
      <Header
        title="Who paid?"
        showMenu={false}
        showContactList={false}
        showProfile={true}
      />
      <IonGrid className="pageCnt bill_cnt">
        <IonList className="list_wrap">
          {members.map((member, index) => (
            <IonItem
              key={index}
              className={`user_item ${
                selectedMemberId === member.id ? "selected" : ""
              }`} // Conditionally apply "selected" class
              onClick={() => handleSelectMember(member.id)} // Handle click to select member
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

export default WhoPaidPresenter;
