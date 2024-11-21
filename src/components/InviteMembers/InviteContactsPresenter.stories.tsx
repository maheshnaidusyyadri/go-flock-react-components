import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { EventMember, Contact } from "@goflock/types/src/index";
import {
  EventWithOneMember,
  OwnerProfile,
  MockContacts,
  ownerEventRelation,
} from "../Common/MockData";
import { withRouter } from "storybook-addon-remix-react-router";
import InviteContactsPresenter from "./InviteContactsPresenter";
import { InviteContactsProps } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/InviteContactsPresenter",
  component: InviteContactsPresenter,
  decorators: [withRouter],
};

const Template: StoryFn<InviteContactsProps> = (args) => (
  <InviteContactsPresenter {...args} />
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

const InviteContactsTemplate: StoryFn<InviteContactsProps> = (args) => (
  <InviteContactsPresenter {...args} />
);

export const InviteContacts = InviteContactsTemplate.bind({});
InviteContacts.args = {
  profile: OwnerProfile,
  eventId: EventWithOneMember.id,
  event: EventWithOneMember,
  eventRelation: ownerEventRelation,
  members: EventWithOneMember.members,
  contacts: MockContacts,
  importContactsFromDevice: async () => {
    action("importContactsFromDevice")("Fetching members from contact list...");
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
