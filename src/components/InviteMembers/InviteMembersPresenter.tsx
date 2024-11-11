import React, { useState } from "react";
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
  IonCard,
  IonText,
} from "@ionic/react";
import { InviteMembersProps } from "@goflock/types/src/index";
import Selected from "../../images/icons/selected.svg";
import GoArrow from "../../images/icons/GoArrow.svg";
import Header from "../Header/Header";
import ProfileList from "../Common/Profiles/ProfileList";
import Menu from "../../images/icons/menu.svg";
import noContacts from "../../images/no-contacts.svg";
import noMembers from "../../images/no-members.svg";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({
  eventId,
  importContactsFromDevice,
  addMembers,
  members,
  contacts,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "Members" | "Contacts"
  >("Members");
  const [searchText, setSearchText] = useState(""); // State to track search input
  const [selectedContacts, setSelectedContacts] = useState<any>([]);
  const [selectedMembers, _] = useState<any[]>([]);
  const [showAction, setShowAction] = useState(false);

  // Filter members based on search text
  const filteredContacts = contacts?.filter(
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
      setSelectedContacts(selectedContacts.filter((c: any) => c !== contact));
    } else {
      // Add to selected list
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const getContactsList = () => {
    importContactsFromDevice().then(() => {
      console.log("Contacts imported");
    });
  };
  const addSelectedContactsToEvent = async () => {
    await addMembers(selectedContacts);
    setShowAction(false);
    setSelectedContacts([]);
    setSelectedSegment("Members");
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
                {members && members.length > 0 ? (
                  <IonList className="list_wrap event_members">
                    {members.map((member, index) => (
                      <IonItem
                        key={index}
                        className="list_item"
                      >
                        <IonThumbnail
                          slot="start"
                          className="dp"
                        >
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
                          <span className="selection">
                            <img
                              src={Selected}
                              alt="Selected"
                            />
                          </span>
                        </IonThumbnail>
                        <IonLabel className="member-info">
                          <h2>{member.name}</h2>
                          <p>{member.phoneNumber}</p>
                        </IonLabel>
                        <IonAvatar
                          className="action_menu"
                          onClick={() => setShowAction(true)}
                        >
                          <IonImg
                            src={Menu}
                            alt="More Details"
                          />
                        </IonAvatar>
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <IonCard className="nodata">
                    <IonImg src={noMembers} />
                    <IonLabel class="title">No invitees</IonLabel>
                    <IonText class="subtitle">
                      Go to contacts and add members
                    </IonText>
                  </IonCard>
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
                          <IonThumbnail
                            slot="start"
                            className="dp"
                          >
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
                                <img
                                  src={Selected}
                                  alt="Selected"
                                />
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
                <IonCard className="nodata">
                  <IonImg src={noContacts} />
                  <IonLabel className="title">No Contacts Found</IonLabel>
                  <IonText className="subtitle">
                    Import contacts and add members
                  </IonText>
                </IonCard>
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
              <IonButton
                className="primary-btn rounded"
                onClick={() => getContactsList()}
              >
                {contacts.length === 0 ? "Import contacts" : "Sync contacts"}
              </IonButton>
            )}
          </IonFooter>
          {selectedContacts &&
            selectedContacts.length > 0 &&
            selectedSegment === "Contacts" && (
              <IonFooter class="stickyFooter">
                <IonButton
                  className="goarrow"
                  onClick={addSelectedContactsToEvent}
                >
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
