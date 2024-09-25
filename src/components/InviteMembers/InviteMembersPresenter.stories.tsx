import { StoryFn, Meta } from "@storybook/react";
import InviteMembersPresenter from "./InviteMembersPresenter"; // Path to your component
import {
  InviteMembersProps,
  EventMember,
  Contact,
} from "@goflock/types/src/index";

// Dummy data for testing
const mockAdmins: EventMember[] = [
  { id: "1", name: "John Doe", roles: ["admin"] },
  { id: "2", name: "Jane Smith", roles: ["admin"] },
];

const mockMembers: EventMember[] = [
  { id: "3", name: "Tom Brown", roles: ["member"] },
  { id: "4", name: "Alice Johnson", roles: ["member"] },
];

const mockContacts: Contact[] = [
  { name: "Tom Hanks", phone: "123-456-7890", isInvitedForEvent: false },
  { name: "Julia Roberts", phone: "987-654-3210", isInvitedForEvent: true },
];

// Mock functions
const getMembersFromContactList = async (): Promise<Contact[]> => {
  return mockContacts;
};

const addAdmin = async (eventMember: EventMember): Promise<EventMember> => {
  console.log("Admin added:", eventMember);
  return eventMember;
};

const removeAdmin = async (eventMember: EventMember): Promise<boolean> => {
  console.log("Admin removed:", eventMember);
  return true;
};

const addMember = async (eventMember: EventMember): Promise<EventMember> => {
  console.log("Member added:", eventMember);
  return eventMember;
};

const removeMember = async (eventMember: EventMember): Promise<boolean> => {
  console.log("Member removed:", eventMember);
  return true;
};

// Storybook metadata
export default {
  title: "InviteMembersPresenter",
  component: InviteMembersPresenter,
} as Meta;

// Template for the story
const Template: StoryFn<InviteMembersProps> = (args) => (
  <InviteMembersPresenter {...args} />
);

// Primary Story
export const Primary = Template.bind({});
Primary.args = {
  profile: {
    id: "user_001",
    prefName: "Jane Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  eventId: "event123", // Example event ID
  admins: mockAdmins,
  members: mockMembers,
  getMembersFromContactList,
  addAdmin,
  removeAdmin,
  addMember,
  removeMember,
};

// Story with no admins and members
export const NoAdminsAndMembers = Template.bind({});
NoAdminsAndMembers.args = {
  profile: {
    id: "user_001",
    prefName: "Jane Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  eventId: "event123",
  admins: [],
  members: [],
  getMembersFromContactList,
  addAdmin,
  removeAdmin,
  addMember,
  removeMember,
};

// Story with loading state
export const LoadingState = Template.bind({});
LoadingState.args = {
  profile: {
    id: "user_001",
    prefName: "Jane Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  eventId: "event123",
  admins: mockAdmins,
  members: mockMembers,
  getMembersFromContactList,
  addAdmin,
  removeAdmin,
  addMember,
  removeMember,
};
