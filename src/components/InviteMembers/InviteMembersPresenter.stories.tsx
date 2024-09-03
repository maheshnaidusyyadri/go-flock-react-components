import { StoryFn } from "@storybook/react";
import InviteMembersPresenter from "./InviteMembersPresenter";
import { EventMember, InviteMembersProps } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/InviteMembersPresenter",
  component: InviteMembersPresenter,
};

const Template: StoryFn<InviteMembersProps> = (args) => (
  <InviteMembersPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  admins: [
    {
      id: "1",
      name: "Admin 1",
      eventId: "",
      rsvp: {
        response: "attending",
        count: 0,
      },
    },
  ],
  members: [
    {
      id: "3",
      name: "Member 1",
      eventId: "",
      rsvp: {
        response: "attending",
        count: 1,
      },
    },
    {
      id: "4",
      name: "Member 2",
      eventId: "",
      rsvp: {
        response: "not-attending",
        count: 0,
      },
    },
    {
      id: "5",
      name: "Member 3",
      eventId: "",
      rsvp: {
        response: "attending",
        count: 0,
      },
    },
  ],
  getMembersFromContactList: async () => {
    return {
      id: "6",
      name: "New Member",
      phoneNumber: "1234567890",
      email: "new@example.com",
      eventId: "",
      rsvp: { response: "attending", count: 0 },
    };
  },
  addAdmin: async (member: EventMember) => {
    console.log("Admin added:", member);
    return member;
  },
  removeAdmin: async (member: EventMember) => {
    console.log("Admin removed:", member);
    return true;
  },
  addMember: async (member: EventMember) => {
    console.log("Member added:", member);
    return member;
  },
  removeMember: async (member: EventMember) => {
    console.log("Member removed:", member);
    return true;
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  getMembersFromContactList: async () => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            id: "6",
            name: "New Member",
            phoneNumber: "1234567890",
            email: "new@example.com",
            eventId: "",
            rsvp: { response: "attending", count: 0 },
          }),
        2000
      )
    ); // Simulate a loading state with a delay
  },
  addAdmin: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
  removeAdmin: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
  addMember: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
  removeMember: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  getMembersFromContactList: async () => {
    throw new Error("Failed to get members from contact list");
  },
  addAdmin: async () => {
    throw new Error("Failed to add admin");
  },
  removeAdmin: async () => {
    throw new Error("Failed to remove admin");
  },
  addMember: async () => {
    throw new Error("Failed to add member");
  },
  removeMember: async () => {
    throw new Error("Failed to remove member");
  },
};
