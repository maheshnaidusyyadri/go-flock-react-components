import { StoryFn } from "@storybook/react";
import EventSettingsPresenter from "./EventSettingsPresenter"; // Adjust the import path based on your project structure
import { EventSettingsProps, Currency, EventVisibility } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/EventSettingsPresenter",
  component: EventSettingsPresenter,
};

const Template: StoryFn<EventSettingsProps> = (args) => (
  <EventSettingsPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  event: {
    id: "event_12345",
    owner: "user_001",
    name: "Annual Family Reunion",
    type: "reunion",
    description: "An annual gathering of the extended family.",
    location: {
      name: "Grandma's House",
      lat: 40.712776,
      long: -74.005974,
    },
    time: {
      startDate: new Date("2024-12-25T00:00:00Z"),
      startTime: "12:00 PM",
      endTime: "4:00 PM",
    },
    visibility: "private",
    admins: [
      {
        id: "admin_001",
        eventId: "event_12345",
        name: "Alice Smith",
        email: "alice.smith@example.com",
      },
      {
        id: "admin_002",
        eventId: "event_12345",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
      },
    ],
    members: [
      {
        id: "member_001",
        eventId: "event_12345",
        name: "Charlie Brown",
        phoneNumber: "+1234567890",
        rsvp: {
          response: "attending",
          count: 2,
        },
      },
      {
        id: "member_002",
        eventId: "event_12345",
        name: "David Clark",
        phoneNumber: "+1987654321",
        rsvp: {
          response: "maybe",
          count: 1,
        },
      },
      {
        id: "member_003",
        eventId: "event_12345",
        name: "Eve Davis",
        email: "eve.davis@example.com",
        rsvp: {
          response: "not-attending",
          count: 1,
        },
      },
      {
        id: "member_004",
        eventId: "event_12345",
        name: "Frank Miller",
        email: "frank.miller@example.com",
        rsvp: {
          response: "attending",
          count: 3,
        },
      },
      {
        id: "member_005",
        eventId: "event_12345",
        name: "Grace Lee",
        email: "grace.lee@example.com",
        rsvp: {
          response: "not-answered",
          count: 0,
        },
      },
    ],
    invitationCard: {
      id: "card_001",
      cardType: "image",
      path: "/cards/invitation_card_001.jpg",
      configuration: "default",
      shared: true,
    },
    settings: {
      shareMedia: true,
      splitBills: true,
      enableChats: true,
      allowCheckList: true,
      currency: "USD",
      eventVisibility: "private",
    },
    checkListQuestions: [],
    checkListResponses: [],
    media: [],
    transactions: [
      {
        id: "txn_001",
        eventId: "event_12345",
        paidUserId: "member_001",
        splitAmongUserIds: [
          "member_002",
          "member_003",
          "member_004",
          "member_005",
        ],
        description: "Catering service",
        amount: 500,
        date: "2024-12-01T00:00:00Z",
        deleted: false,
      },
      {
        id: "txn_002",
        eventId: "event_12345",
        paidUserId: "admin_001",
        splitAmongUserIds: ["admin_002", "member_001", "member_002"],
        description: "Venue booking",
        amount: 300,
        date: "2024-11-25T00:00:00Z",
        deleted: false,
      },
      {
        id: "txn_003",
        eventId: "event_12345",
        paidUserId: "member_003",
        splitAmongUserIds: ["member_004", "member_005"],
        description: "Decorations",
        amount: 150,
        date: "2024-12-20T00:00:00Z",
        deleted: false,
      },
    ],
    deleted: false,
  },
  eventSettings: {
    shareMedia: true,
    splitBills: false,
    enableChats: true,
    allowCheckList: true,
    eventVisibility: "private",
    currency: "USD" as Currency,
  },
  enableMediaSharing: async (eventId: string) => {
    console.log("Media sharing enabled for event:", eventId);
    return true;
  },
  disableMediaSharing: async (eventId: string) => {
    console.log("Media sharing disabled for event:", eventId);
    return true;
  },
  enableSplitBills: async (eventId: string) => {
    console.log("Split bills enabled for event:", eventId);
    return true;
  },
  disableSplitBills: async (eventId: string) => {
    console.log("Split bills disabled for event:", eventId);
    return true;
  },
  updateCurrency: async (currency: Currency) => {
    console.log("Currency updated to:", currency);
    return true;
  },
  updateEventVisibility: async (visibility: EventVisibility) => {
    console.log("Event visibility updated to:", visibility);
    return true;
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  enableMediaSharing: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
  disableMediaSharing: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
  enableSplitBills: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
  disableSplitBills: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
  updateCurrency: async (currency: Currency) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
  updateEventVisibility: async (visibility: EventVisibility) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  enableMediaSharing: async () => {
    throw new Error("Failed to enable media sharing");
  },
  disableMediaSharing: async () => {
    throw new Error("Failed to disable media sharing");
  },
  enableSplitBills: async () => {
    throw new Error("Failed to enable split bills");
  },
  disableSplitBills: async () => {
    throw new Error("Failed to disable split bills");
  },
  updateCurrency: async () => {
    throw new Error("Failed to update currency");
  },
  updateEventVisibility: async () => {
    throw new Error("Failed to update event visibility");
  },
};
