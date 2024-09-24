import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonToast,
  IonText,
} from "@ionic/react";
import {
  Contact,
  EventMember,
  InviteMembersProps,
} from "@goflock/types/src/index";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({
  admins,
  members,
  getMembersFromContactList,
  addAdmin,
  removeAdmin,
  addMember,
  removeMember,
}) => {
  const [membersFromContacts, setMembersFromContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddAdmin = async (member: EventMember) => {
    setIsLoading(true);
    setError(null);
    try {
      await addAdmin(member);
    } catch (err) {
      setError("Failed to add admin");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveAdmin = async (member: EventMember) => {
    setIsLoading(true);
    setError(null);
    try {
      await removeAdmin(member);
    } catch (err) {
      setError("Failed to remove admin");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddMember = async (member: EventMember) => {
    setIsLoading(true);
    setError(null);
    try {
      await addMember(member);
    } catch (err) {
      setError("Failed to add member");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveMember = async (member: EventMember) => {
    setIsLoading(true);
    setError(null);
    try {
      await removeMember(member);
    } catch (err) {
      setError("Failed to remove member");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetMembersFromContactList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const contacts: Contact[] = await getMembersFromContactList();
      console.log("Contacts fetched:", contacts);

      setMembersFromContacts(contacts);
    } catch (err) {
      setError("Failed to get members from contact list");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Invite Members to Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Admins List */}
        <IonList>
          <IonItem>
            <IonLabel>Admins ({admins.length})</IonLabel>
          </IonItem>
          {admins.map((admin) => (
            <IonItem key={admin.id}>
              <IonLabel>{admin.name}</IonLabel>
              <IonButton
                onClick={() => handleRemoveAdmin(admin)}
                disabled={isLoading}
                color="danger"
              >
                Remove Admin
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Members List */}
        <IonList>
          <IonItem>
            <IonLabel>Members ({members.length})</IonLabel>
          </IonItem>
          {members.map((member) => (
            <IonItem key={member.id}>
              <IonLabel>{member.name}</IonLabel>
              <IonButton
                onClick={() => handleAddAdmin(member)}
                disabled={isLoading}
              >
                Make Admin
              </IonButton>
              <IonButton
                onClick={() => handleRemoveMember(member)}
                disabled={isLoading}
                color="danger"
              >
                Remove Member
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Add Member from Contact List */}
        <IonItem>
          <IonLabel>Add Member from Contact List</IonLabel>
        </IonItem>
        <IonButton
          onClick={handleGetMembersFromContactList}
          disabled={isLoading}
        >
          Get Members from Contacts
        </IonButton>

        {/* Contact List with isInvitedForEvent Check */}
        {membersFromContacts.length > 0 && (
          <IonList>
            <IonItem>
              <IonLabel>
                Select Contacts to Invite ({membersFromContacts.length})
              </IonLabel>
            </IonItem>
            {membersFromContacts.map((contact, index) => (
              <IonItem
                key={index}
                lines="full"
                color={contact.isInvitedForEvent ? "light" : ""}
              >
                <IonLabel>{contact.name}</IonLabel>
                <IonText
                  slot="end"
                  color={contact.isInvitedForEvent ? "medium" : ""}
                >
                  {contact.isInvitedForEvent ? "Already Invited" : ""}
                </IonText>
                <IonButton
                  onClick={() => handleAddMember(contact)}
                  disabled={isLoading || contact.isInvitedForEvent}
                  color="primary"
                  fill={contact.isInvitedForEvent ? "outline" : "solid"}
                >
                  Invite
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}

        {/* Loading Spinner */}
        {isLoading && <IonSpinner name="crescent" />}

        {/* Error Toast */}
        {error && (
          <IonToast
            isOpen={!!error}
            message={error}
            duration={2000}
            color="danger"
            onDidDismiss={() => setError(null)}
          />
        )}
      </IonContent>
    </IonContent>
  );
};

export default InviteMembersPresenter;
