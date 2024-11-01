import { Meta, StoryFn } from "@storybook/react";
import InviteMembersPresenter from "./InviteMembersPresenter";
import { EventMember } from "@goflock/types/src/index";
import { useState } from "react";

// Mock data
// const mockAdmins: EventMember[] = [
//   {
//     id: "admin_001",
//     name: "John Doe",
//     phoneNumber: "1234567890",
//   },
//   {
//     id: "admin_002",
//     name: "Jane Smith",
//     phoneNumber: "0987654321",
//   },
// ];

const mockMembers: EventMember[] = [
  {
    id: "member_001",
    name: "Alice Cooper",
    phoneNumber: "555-1234",
    profileImg: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "member_002",
    name: "Bob Dylan",
    phoneNumber: "555-5678",
    profileImg: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "member_003",
    name: "Charlie Brown",
    phoneNumber: "555-9012",
    profileImg: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "member_004",
    name: "David Bowie",
    phoneNumber: "555-3456",
  },
];

export default {
  title: "GoFlock/Presenters/InviteMembersPresenter",
  component: InviteMembersPresenter,
} as Meta<typeof InviteMembersPresenter>;

const Template: StoryFn<typeof InviteMembersPresenter> = (args) => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleAddMembers = async (members: any) => {
    setSelectedMembers(members);
    console.log("Adding members:", members);
    return members;
  };
  return (
    <InviteMembersPresenter
      {...args}
      members={selectedMembers}
      addMembers={handleAddMembers}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  profile: {
    id: "profile_001",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: false,
      pushNotifications: true,
    },
  },
  eventId: "event_001",
  // admins: mockAdmins,
  getMembersFromContactList: async () => {
    console.log("Fetching members from contact list...");
    return mockMembers;
  },
  addAdmin: async (member) => {
    console.log("Adding admin:", member);
    return member;
  },
  removeAdmin: async (member) => {
    console.log("Removing admin:", member);
    return true;
  },
};
