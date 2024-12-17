import React, { useState } from "react";
import {
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonAvatar,
  IonImg,
  IonCard,
  IonText,
  IonContent,
  IonPage,
} from "@ionic/react";
import noContacts from "../../images/no-contacts.svg";
import Selected from "../../images/icons/selected.svg";
import { InviteContactsProps } from "@goflock/types";
import ProfileList from "../Common/Profiles/ProfileList";
import { getDisplayName } from "../../utils/utils";
import Header from "../Header/Header";
import "./InviteContactsPresenter.scss";
import SendSms from "./SelectedMembers";

const InviteContactsPresenter: React.FC<InviteContactsProps> = ({
  eventId,
  contacts,
  removeMember,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<any[]>([]);
  const [isSmsSend, setIsSmsSend] = useState(false);

  const handleSelectContact = (contact: any) => {
    setSelectedContacts((prev) =>
      prev.includes(contact)
        ? prev.filter((item) => item !== contact)
        : [...prev, contact]
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  // const getContactsList = () => {
  //   importContactsFromDevice().then(() => {
  //     console.log("Contacts imported");
  //   });
  // };
  // const addSelectedContactsToEvent = async () => {
  //   await addMembers(selectedContacts);
  //   setIsSmsSend(true);
  // };

  return (
    <IonPage>
      <Header eventId={eventId} title="Manage members" showMenu={false} />
      {!isSmsSend ? (
        <>
          <IonContent className="members-page ion-padding">
            {contacts && contacts.length > 0 ? (
              <div>
                <IonToolbar>
                  <IonSearchbar
                    value={searchText}
                    onIonInput={(e) => setSearchText(e.detail.value!)}
                    placeholder="Search name or phone number"
                  />
                </IonToolbar>
                <div className="users_list">
                  <ProfileList
                    eventId={eventId}
                    eventMembers={selectedContacts}
                    onSelectMember={handleSelectContact}
                    removeMember={removeMember}
                  />
                </div>
                <span className="devider"></span>
                <div className="menbers-list">
                  <h6>All Members</h6>
                  <IonList className="list_wrap">
                    {filteredContacts.map((member, index) => (
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
                            <IonAvatar className="profile-dp">
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
              <IonCard className="nodata">
                <IonImg src={noContacts} />
                <IonLabel className="title">No Contacts Found</IonLabel>
                <IonText className="subtitle">
                  Import contacts and add members
                </IonText>
              </IonCard>
            )}
          </IonContent>
          {/* <IonFooter className="stickyFooter">
            {contacts.length === 0 && (
              <>
                <IonButton
                  className="primary-btn rounded"
                  onClick={() => getContactsList()}
                >
                  {"Import phone contacts"}
                </IonButton>
                <IonButton
                  className="primary-btn rounded"
                  onClick={() => importContactsFromGoogleContacts()}
                >
                  {"Import google contacts"}
                </IonButton>
              </>
            )}
            {selectedContacts && selectedContacts.length > 0 && (
              <IonFooter class="stickyFooter">
                <IonButton
                  className="goarrow"
                  onClick={addSelectedContactsToEvent}
                >
                  <IonImg src={GoArrow} />
                </IonButton>
              </IonFooter>
            )}
          </IonFooter> */}
        </>
      ) : (
        <SendSms
          //members={members}
          members={selectedContacts}
          eventId={eventId}
          removeMember={removeMember}
          addMore={() => {
            setIsSmsSend(false);
            console.log("addMore");
          }}
          removeSelectedMember={handleSelectContact}
        />
      )}
    </IonPage>
  );
};

export default InviteContactsPresenter;
