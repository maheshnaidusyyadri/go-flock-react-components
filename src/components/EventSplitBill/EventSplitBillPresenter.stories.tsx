import { StoryFn } from "@storybook/react";
import EventSplitBillPresenter from "./EventSplitBillPresenter";
import { EventSplitBillProps, Transaction } from "@goflock/types/src/index";

export default {
  title: "GoFlock/Presenters/EventSplitBillPresenter",
  component: EventSplitBillPresenter,
};

const Template: StoryFn<EventSplitBillProps> = (args) => (
  <EventSplitBillPresenter {...args} />
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
        roles: ["admin"],
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
        roles: ["admin", "member"],
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
        roles: ["member"],
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
        roles: ["member"],
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
        roles: ["member"],
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
  addTransaction: async (transaction: Transaction) => {
    console.log("Transaction added:", transaction);
    return transaction;
  },
  updateTransaction: async (transaction: Transaction) => {
    console.log("Transaction updated:", transaction);
    return transaction;
  },
  deleteTransaction: async (transactionId: string) => {
    console.log("Transaction deleted:", transactionId);
    return true;
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  addTransaction: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Transaction added (loading state)");
        resolve(Default.args!.transactions![0]);
      }, 2000)
    ); // Simulate a loading state
  },
  updateTransaction: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Transaction updated (loading state)");
        resolve(Default.args!.transactions![0]);
      }, 2000)
    ); // Simulate a loading state
  },
  deleteTransaction: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Transaction deleted (loading state)");
        resolve(true);
      }, 2000)
    ); // Simulate a loading state
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  addTransaction: async () => {
    throw new Error("Failed to add transaction");
  },
  updateTransaction: async () => {
    throw new Error("Failed to update transaction");
  },
  deleteTransaction: async () => {
    throw new Error("Failed to delete transaction");
  },
};
