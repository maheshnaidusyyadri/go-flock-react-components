import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InviteMembersPresenter from "./InviteMembersPresenter";
import InviteGust from "./InviteGuest";
import {
  InviteMembersProps,
  EventMember,
  Contact,
} from "@goflock/types/src/index";
import {
  EventWithOneMember,
  OwnerProfile,
  MockContacts,
  ownerEventRelation,
} from "../Common/MockData";
import { withRouter } from "storybook-addon-remix-react-router";

export default {
  title: "GoFlock/Presenters/InviteMembersPresenter",
  component: InviteMembersPresenter,
  decorators: [withRouter],
};

const Template: StoryFn<InviteMembersProps> = (args) => (
  <InviteMembersPresenter {...args} />
);

export const EmptyContacts = Template.bind({});
EmptyContacts.args = {
  profile: OwnerProfile,
  eventId: EventWithOneMember.id,
  event: EventWithOneMember,
  eventRelation: ownerEventRelation,
  members: EventWithOneMember.members,
  //members: [],
  contacts: [],
  importContactsFromDevice: async () => {
    action("importContactsFromDevice")("Fetching members from contact list...");
  },
  addAdmin: async (member: EventMember) => {
    action("addAdmin")("Adding admin:", member);
    return member;
  },
  removeAdmin: async (member: EventMember) => {
    action("removeAdmin")("Removing admin:", member);
    return true;
  },
  addMembers: async (contacts: Contact[]) => {
    action("addMembers")("Adding members:", contacts);
    return contacts.length;
  },
  removeMember: async (member: EventMember) => {
    action("removeMember")("Removing member:", member);
    return true;
  },
};

export const WithValidNumberOfContacts = Template.bind({});
WithValidNumberOfContacts.args = {
  ...EmptyContacts.args,
  contacts: MockContacts,
};

export const WithEmptyMembersAndContacts = Template.bind({});
WithEmptyMembersAndContacts.args = {
  ...EmptyContacts.args,
  members: [],
  contacts: [],
};
const InviteGuestTemplate: StoryFn<InviteMembersProps> = (args) => (
  <InviteGust {...args} />
);
export const InviteGuest = InviteGuestTemplate.bind({});
InviteGuest.args = {
  profile: OwnerProfile,
  eventId: EventWithOneMember.id,
  event: EventWithOneMember,
  eventRelation: ownerEventRelation,
  members: EventWithOneMember.members,
  //members: [],
  //contacts: [],
  contacts: MockContacts,
  importContactsFromDevice: async () => {
    action("importContactsFromDevice")("Fetching members from contact list...");
  },
  addAdmin: async (member: EventMember) => {
    action("addAdmin")("Adding admin:", member);
    return member;
  },
  removeAdmin: async (member: EventMember) => {
    action("removeAdmin")("Removing admin:", member);
    return true;
  },
  addMembers: async (contacts: Contact[]) => {
    action("addMembers")("Adding members:", contacts);
    return contacts.length;
  },
  removeMember: async (member: EventMember) => {
    action("removeMember")("Removing member:", member);
    return true;
  },
};
