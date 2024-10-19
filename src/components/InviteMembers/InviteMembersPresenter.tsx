import React, { useEffect, useState } from "react";
import "./InviteMembersPresenter.scss";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonSearchbar,
  IonToolbar,
  IonThumbnail,
  IonImg,
  IonAvatar,
} from "@ionic/react";
import { Contact, InviteMembersProps } from "@goflock/types/src/index";
//import memberDp from "../../images/member.png";
import Selected from "../../images/icons/selected.svg";
import Header from "../Header/Header";
import ProfileList from "../Common/Profiles/ProfileList";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({
  eventId,
  members,
  getMembersFromContactList,
  addMember,
}) => {
  const [searchText, setSearchText] = useState(""); // State to track search input
  const [contacts, setContacts] = useState<Contact[]>([]); // State to track search input

  // Filter members based on search text
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phone?.includes(searchText)
  );

  useEffect(() => {
    getMembersFromContactList().then((contacts) => {
      setContacts(contacts);
      //console.log('contactscontacts',contacts)
    });
  }, []);
  const getDisplayName = (name: string) => {
    return name.length > 1 ? name.slice(0, 2).toUpperCase() : name.toUpperCase();
  }
  return (
    <>
      <IonContent className="invite_members">
        <Header
          title="Manage members"
          showMenu={false}
          showContactList={true}
        />
        <div className="members_page">
          <IonToolbar>
            <IonSearchbar
              value={searchText}
              onIonInput={(e) => setSearchText(e.detail.value!)} // Update search text
              placeholder="Search by name or phone"
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
              {filteredContacts.map((member, index) => (
                <IonItem
                  key={index}
                  className="list_item"
                  onClick={() => addMember(member)}
                >
                  <IonThumbnail
                    slot="start"
                    className="dp"
                  >
                    {/* <IonImg
                      src={memberDp}
                      alt={`${member.name}'s profile`}
                    /> */}
                    {member.profileImg?<IonImg
                     src={member.profileImg}
                      alt={`${member.name}'s profile`}
                    />:
                    <IonAvatar class="profile-dp">
                      {getDisplayName(member.name||"")}
                    </IonAvatar>}


                    <span className="selection">
                      <img
                        src={Selected}
                        alt="Select"
                      />
                    </span>
                  </IonThumbnail>
                  <IonLabel className="member-info">
                    <h2>{member.name}</h2>
                    <p>{member.phone}</p>
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

export default InviteMembersPresenter;
