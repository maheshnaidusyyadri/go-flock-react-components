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
  // getMembersList,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "Members" | "Contacts"
  >("Members");
  const [searchText, setSearchText] = useState(""); // State to track search input
  const [contacts, setContacts] = useState<Contact[]>([]); // State to track search input
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<any[]>([]);
  const [showAction, setShowAction] = useState(false);

  // Filter members based on search text
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phone?.includes(searchText)
  );
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
      addMember(contact);
    }
  };
  const getContactsList = () => {
    getMembersFromContactList().then((contacts) => {
      setContacts(contacts);
    });
  };
  const getSelectedMembers = () => {
    setSelectedMembers(selectedContacts);
    setSelectedSegment("Members");
    // getMembersList().then((member) => {
    //   console.log("member-member", member);
    // });
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
              <div className="menbers_list ">
                {selectedMembers && selectedMembers.length > 0 ? (
                  <IonList className="list_wrap event_members">
                    {selectedMembers.map((member, index) => (
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
                        <IonAvatar
                          className="action_menu"
                          onClick={() => setShowAction(true)}
                        >
                          <IonImg src={Menu} alt="More Details" />
                        </IonAvatar>
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <IonLabel> No Members Found</IonLabel>
                )}
              </div>
            </div>
          )}
          {selectedSegment === "Contacts" && (
            <div className="members_page">
              {contacts && contacts.length > 0 ? (
                <div>
                  <IonToolbar>
                    <IonSearchbar
                      value={searchText}
                      onIonInput={(e) => setSearchText(e.detail.value!)}
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
                  <span className="devider"></span>
                  <div className="menbers_list">
                    <h6>All Members</h6>
                    <IonList className="list_wrap">
                      {filteredContacts.map((member, index) => (
                        <IonItem
                          key={index}
                          className="list_item"
                          //onClick={() => addMember(member)}
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
              ) : (
                <IonLabel> No Contacts Found</IonLabel>
              )}
            </div>
          )}

          <IonFooter className="stickyFooter hasFooter bottomSticky">
            {selectedSegment === "Members" && selectedMembers.length == 0 ? (
              <IonButton
                className="primary-btn rounded"
                onClick={() => setSelectedSegment("Contacts")}
              >
                Go to Contacts
              </IonButton>
            ) : (
              contacts.length == 0 && (
                <IonButton
                  className="primary-btn rounded"
                  onClick={() => getContactsList()}
                >
                  Import contacts
                </IonButton>
              )
            )}
          </IonFooter>
          {selectedContacts &&
            selectedContacts.length > 0 &&
            selectedSegment === "Contacts" && (
              <IonFooter class="stickyFooter">
                <IonButton className="goarrow" onClick={getSelectedMembers}>
                  <IonImg src={GoArrow} />
                </IonButton>
              </IonFooter>
            )}
        </IonContent>
      </IonPage>
      <IonActionSheet
        isOpen={showAction}
        onDidDismiss={() => setShowAction(false)}
        className="action-menu-end"
        header="Manage Member"
        subHeader="Make/remove admin or remove the member"
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
