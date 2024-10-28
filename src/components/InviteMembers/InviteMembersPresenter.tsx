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
  IonFooter,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonActionSheet,
} from "@ionic/react";
import { Contact, InviteMembersProps } from "@goflock/types/src/index";
//import memberDp from "../../images/member.png";
import Selected from "../../images/icons/selected.svg";
import GoArrow from "../../images/icons/GoArrow.svg";
import Header from "../Header/Header";
import ProfileList from "../Common/Profiles/ProfileList";
import Menu from "../../images/icons/menu.svg";
// import HostIcon from "../../images/icons/host.svg";
// import CoHostIcon from "../../images/icons/co-host.svg";
//import unselect from "../../images/icons/remove.svg";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({
  eventId,
  getMembersFromContactList,
  addMember,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "Members" | "Contacts"
  >("Members");
  const [searchText, setSearchText] = useState(""); // State to track search input
  const [contacts, setContacts] = useState<Contact[]>([]); // State to track search input
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);

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
    return name.length > 1
      ? name.slice(0, 2).toUpperCase()
      : name.toUpperCase();
  };
  const handleSelectContact = (contact: any) => {
    if (selectedContacts.includes(contact)) {
      // Remove if already selected
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    } else {
      // Add to selected list
      setSelectedContacts([...selectedContacts, contact]);
    }
  };
  return (
    <>
      <IonPage className="invite_page">
        <Header
          title="Manage members"
          showMenu={false}
          showContactList={true}
        />
        <IonContent className="invite_members">
          <IonSegment
            className="segment_tabs"
            value={selectedSegment}
            onIonChange={(e) =>
              setSelectedSegment(e.detail.value as "Members" | "Contacts")
            }
          >
            <IonSegmentButton value="Members">
              <IonLabel>Members</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Contacts">
              <IonLabel>Contacts</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {selectedSegment === "Members" && (
            <div className="members_page">
              {/* <div className="users_list">
                <ProfileList
                  eventId={eventId}
                  eventMembers={selectedContacts}
                  onSelectMember={handleSelectContact}
                />
              </div>  */}
              <div className="menbers_list ">
                <IonList className="list_wrap event_members">
                  {filteredContacts.map((member, index) => (
                    <IonItem key={index} className="list_item">
                      <IonThumbnail slot="start" className="dp">
                        {/* <IonImg className="type" src={HostIcon} /> */}
                        {/* <IonImg className="type co" src={CoHostIcon} /> */}
                        {member.profileImg ? (
                          <IonImg
                            src={member.profileImg}
                            alt={`${member.name}'s profile`}
                          />
                        ) : (
                          <IonAvatar class="profile-dp">
                            {getDisplayName(member.name || "")}
                          </IonAvatar>
                        )}
                        {selectedContacts.includes(member) && (
                          <span className="selection">
                            <img src={Selected} alt="Selected" />
                          </span>
                        )}
                      </IonThumbnail>
                      <IonLabel className="member-info">
                        <h2>{member.name}</h2>
                        <p>{member.phone}</p>
                      </IonLabel>
                      <IonAvatar className="action_menu" id="open-action-sheet">
                        <IonImg src={Menu} alt="More Details" />
                      </IonAvatar>
                    </IonItem>
                  ))}
                </IonList>
              </div>
            </div>
          )}
          {selectedSegment === "Contacts" && (
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
                  eventMembers={selectedContacts}
                  onSelectMember={handleSelectContact}
                />
              </div>
              {/* {selectedContacts && selectedContacts.length > 0 && (
            <div className="profile-list">
              <IonList className="horizontal_list" style={{ display: "flex" }}>
                {selectedContacts.map((member, index) => (
                  <IonItem
                    key={index}
                    className="list_item"
                    onClick={() => handleSelectContact(member)}
                  >
                    <IonThumbnail slot="start" className="dp">
                      {member.profileImg ? (
                        <IonImg
                          src={member.profileImg}
                          alt={`${member.name}'s profile`}
                        />
                      ) : (
                        <IonAvatar class="profile-dp">
                          {getDisplayName(member.name || "")}
                        </IonAvatar>
                      )}
                      <span className="selection">
                        <img src={unselect} alt="Selected" />
                      </span>
                    </IonThumbnail>
                    <IonLabel className="member-info">
                      <h2>{member.name}</h2>
                      <p>{member.phone}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
              <span className="divider"></span>
            </div>
          )} */}
              <span className="devider"></span>
              <div className="menbers_list">
                <h6>All Members</h6>
                <IonList className="list_wrap">
                  {filteredContacts.map((member, index) => (
                    <IonItem
                      key={index}
                      className="list_item"
                      onClick={() => addMember(member)}
                      //onClick={() => handleSelectContact(member)}
                    >
                      <IonThumbnail slot="start" className="dp">
                        {member.profileImg ? (
                          <IonImg
                            src={member.profileImg}
                            alt={`${member.name}'s profile`}
                          />
                        ) : (
                          <IonAvatar class="profile-dp">
                            {getDisplayName(member.name || "")}
                          </IonAvatar>
                        )}
                        {selectedContacts.includes(member) && (
                          <span className="selection">
                            <img src={Selected} alt="Selected" />
                          </span>
                        )}
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
          )}
          <IonFooter class="stickyFooter">
            <IonButton className="goarrow">
              <IonImg src={GoArrow} />
            </IonButton>
            {/* <IonButton className="secondary-btn rounded">
            Send Invitation Link
          </IonButton>
          <IonButton className="primary-btn rounded">Done</IonButton> */}
          </IonFooter>
        </IonContent>
      </IonPage>
      <IonActionSheet
        trigger="open-action-sheet"
        className="action-menu-end"
        header="Manage Member"
        subHeader="Make/remove admin or remove the member"
        // Controls visibility of delete action sheet
        // Dismiss delete action sheet
        buttons={[
          {
            text: "Make co-host",
            role: "destructive",
            data: {
              action: "delete",
            },
            cssClass: "fill-btn dark-btn",
            handler: () => {},
          },
          {
            text: "Cancel",
            data: {
              action: "cancel",
            },
            cssClass: "rounded",
          },
        ]}
      ></IonActionSheet>
    </>
  );
};

export default InviteMembersPresenter;
