import { Meta, StoryFn } from "@storybook/react";
import PhoneBookPresenter from "./PhoneBookPresenter";
import { EventMember } from "@goflock/types";

// Mock data
const mockAdmins: EventMember[] = [
  {
    id: "admin_001",
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: "John Doe",
    phoneNumber: "1234567890",
  },
  {
    id: "admin_002",
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: "Jane Smith",
    phoneNumber: "0987654321",
  },
];

const mockMembers: EventMember[] = [
  {
    id: 'member_001',
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: 'Alice Cooper',
    phoneNumber: '555-1234',
    email: '', 
  },
  {
    id: "member_002",
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: "Bob Dylan",
    phoneNumber: "555-5678",
  },
  {
    id: "member_003",
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: "Charlie Brown",
    phoneNumber: "555-9012",
  },
  {
    id: "member_004",
    flockId: '',
    eventId: '',
    rsvp: {
      response: 'attending',   
      count: 1,               
      comment: '',  
    },   
    name: "David Bowie",
    phoneNumber: "555-3456",
  },
];

export default {
  title: "GoFlock/Presenters/PhoneBookPresenter",
  component: PhoneBookPresenter,
} as Meta<typeof PhoneBookPresenter>;

const Template: StoryFn<typeof PhoneBookPresenter> = (args) => (
  <PhoneBookPresenter {...args} />
);

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
  admins: mockAdmins,
  members: mockMembers,
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
  addMember: async (member) => {
    console.log("Adding member:", member);
    return member;
  },
  removeMember: async (member) => {
    console.log("Removing member:", member);
    return true;
  },
};
