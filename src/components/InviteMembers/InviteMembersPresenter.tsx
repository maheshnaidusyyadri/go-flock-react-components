import React, { useState } from "react";
import { EventMember, InviteMembersProps } from "@goflock/types/src/index";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({
  admins,
  members,
  getMembersFromContactList,
  addAdmin,
  removeAdmin,
  addMember,
  removeMember,
}) => {
  const [membersFromContacts, setMembersFromContacts] = useState<EventMember[]>(
    []
  );
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
      const membersFromContacts: EventMember[] =
        await getMembersFromContactList();
      setMembersFromContacts(membersFromContacts);
    } catch (err) {
      setError("Failed to get members from contact list");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Invite Members to Event</h2>

      <div>
        <h3>Admins</h3>
        <ul>
          {admins.map((admin) => (
            <li key={admin.id}>
              {admin.name}
              <button
                onClick={() => handleRemoveAdmin(admin)}
                disabled={isLoading}
              >
                Remove Admin
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Members</h3>
        <ul>
          {members.map((member) => (
            <li key={member.id}>
              {member.name}
              <button
                onClick={() => handleAddAdmin(member)}
                disabled={isLoading}
              >
                Make Admin
              </button>
              <button
                onClick={() => handleRemoveMember(member)}
                disabled={isLoading}
              >
                Remove Member
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Add Member from Contact List</h3>
        <button
          onClick={handleGetMembersFromContactList}
          disabled={isLoading}
        >
          Get Member from Contacts
        </button>
        {membersFromContacts && (
          <div>
            <p onClick={() => handleAddMember(membersFromContacts[0])}>
              New member list {membersFromContacts.length}
            </p>
          </div>
        )}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InviteMembersPresenter;
