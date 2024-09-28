import { Meta, StoryFn } from "@storybook/react";
import InviteMembersPresenter from "./InviteMembersPresenter"; // Adjust the import path
import {
  InviteMembersProps,
  Profile,
  EventMember,
  Contact,
} from "@goflock/types/src/index"; // Adjust based on your structure
import { IonContent } from "@ionic/react";

// Mock data for the story

// Mock Profile data
const mockProfile: Profile = {
  id: "profile_1",
  prefName: "John Doe",
  isIntroShown: true,
  pictureUrl: "https://example.com/johndoe.jpg",
  preferences: {
    smsNotifications: true,
    emailNotifications: false,
  },
};

// Mock Event Members
const mockAdmins: EventMember[] = [
  {
    id: "1",
    flockId: "admin_flock_1",
    eventId: "event_123",
    name: "Admin 1",
    phoneNumber: "1234567890",
    email: "admin1@example.com",
    roles: ["admin"],
  },
  {
    id: "2",
    flockId: "admin_flock_2",
    eventId: "event_123",
    name: "Admin 2",
    phoneNumber: "9876543210",
    email: "admin2@example.com",
    roles: ["admin"],
  },
];

const mockMembers: EventMember[] = [
  {
    id: "3",
    flockId: "member_flock_1",
    eventId: "event_123",
    name: "Member 1",
    phoneNumber: "1111111111",
    email: "member1@example.com",
    roles: ["member"],
  },
  {
    id: "4",
    flockId: "member_flock_2",
    eventId: "event_123",
    name: "Member 2",
    phoneNumber: "2222222222",
    email: "member2@example.com",
    roles: ["member"],
  },
  {
    id: "5",
    flockId: "member_flock_3",
    eventId: "event_123",
    name: "Member 3",
    phoneNumber: "3333333333",
    email: "member3@example.com",
    roles: ["member"],
  },
];

// Mock Contacts data
const mockContacts: Contact[] = [
  {
    name: "Contact 1",
    email: "contact1@example.com",
    phone: "555-1111",
    isInvitedForEvent: false,
  },
  {
    name: "Contact 2",
    email: "contact2@example.com",
    phone: "555-2222",
    isInvitedForEvent: true, // Already invited
  },
  {
    name: "Contact 3",
    email: "contact3@example.com",
    phone: "555-3333",
    isInvitedForEvent: false,
  },
];

// Define the story metadata
export default {
  title: "GoFlock/Presenters/InviteMembersPresenter",
  component: InviteMembersPresenter,
} as Meta;

// Define the Story Template
const Template: StoryFn<InviteMembersProps> = (args) => (
  <IonContent>
    <InviteMembersPresenter {...args} />
  </IonContent>
);

// Define the default story
export const Default = Template.bind({});
Default.args = {
  profile: mockProfile,
  eventId: "event_123",
  admins: mockAdmins,
  members: mockMembers,
  getMembersFromContactList: async () => {
    console.log("Fetching contacts from contact list...");
    return Promise.resolve(mockContacts);
  },
  addAdmin: async (eventMember: EventMember) => {
    console.log(`Admin added: ${eventMember.name}`);
    return Promise.resolve(eventMember);
  },
  removeAdmin: async (eventMember: EventMember) => {
    console.log(`Admin removed: ${eventMember.name}`);
    return Promise.resolve(true);
  },
  addMember: async (eventMember: EventMember) => {
    console.log(`Member added: ${eventMember.name}`);
    return Promise.resolve(eventMember);
  },
  removeMember: async (eventMember: EventMember) => {
    console.log(`Member removed: ${eventMember.name}`);
    return Promise.resolve(true);
  },
};
