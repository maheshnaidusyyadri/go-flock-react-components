import React, { useState } from "react";
import "./PhoneBookPresenter.scss";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonSearchbar,
  IonToolbar,
  IonThumbnail,
  IonImg,
} from "@ionic/react";
import { InviteMembersProps } from "@goflock/types/src/index";
import memberDp from "../../images/member.png";
import Selected from "../../images/icons/selected.svg";
import Header from "../Header/Header";
import ProfileList from "../Common/Profiles/ProfileList";

const PhoneBookPresenter: React.FC<InviteMembersProps> = ({
  eventId,
  members,
}) => {
  const [searchText, setSearchText] = useState(""); // State to track search input

  // Filter members based on search text
  const filteredMembers = members.filter(
    (member) =>
      member.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      member.phoneNumber?.includes(searchText)
  );

  return (
    <>
      <IonContent className="create_event">
        <Header
          showMenu={false}
          showContactList={false}
          title={""}
        />
        <div className="members_page">
          <IonToolbar>
            <IonSearchbar
              value={searchText}
              onIonInput={(e) => setSearchText(e.detail.value!)} // Update search text
              placeholder="Search contacts"
              className="ion-searchbar"
            />
          </IonToolbar>
          <div className="users_list">
            <ProfileList
              eventId={eventId}
              eventMembers={members}
            />
          </div>
          <span className="devider"></span>
          <div className="menbers_list">
            <h6>All Members</h6>
            <IonList className="list_wrap">
              {filteredMembers.map((member, index) => (
                <IonItem
                  key={index}
                  className="list_item"
                >
                  <IonThumbnail
                    slot="start"
                    className="dp"
                  >
                    <IonImg
                      src={memberDp}
                      alt={`${member.name}'s profile`}
                    />
                    <span className="selection">
                      <img
                        src={Selected}
                        alt="Select"
                      />
                    </span>
                  </IonThumbnail>
                  <IonLabel className="member-info">
                    <h2>{member.name}</h2>
                    <p>{member.phoneNumber}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default PhoneBookPresenter;