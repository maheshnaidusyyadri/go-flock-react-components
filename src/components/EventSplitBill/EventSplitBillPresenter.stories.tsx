import { StoryFn } from "@storybook/react";
import EventSplitBillPresenter from "./EventSplitBillPresenter";
import {
  Contact,
  EventMember,
  EventSplitBillProps,
  Transaction,
} from "@goflock/types/src/index";
import EventBillPresenter from "./EventBill";
import AddExpense from "./AddExpense";
import ExpensesPresenter from "./Expenses";

export default {
  title: "GoFlock/Presenters/EventSplitBillPresenter",
  component: EventSplitBillPresenter,
};

const Template: StoryFn<EventSplitBillProps> = (args) => (
  <EventSplitBillPresenter {...args} />
);

export const EventBill = (
  args: JSX.IntrinsicAttributes & EventSplitBillProps
) => <EventBillPresenter {...args} />;
EventBill.args = {};

export const Expenses = (
  args: JSX.IntrinsicAttributes & EventSplitBillProps
) => (
  <ExpensesPresenter
    members={[
      {
        name: "Jackson Graham",
        phone: "",
        expanse: "+833.33",
        className: "green",
      },
      {
        name: "Jane Cooper",
        phone: "",
        expanse: "$166.67",
        className: "red",
      },
      {
        name: "Cameron Williamson",
        phone: "",
        expanse: "$166.67",
        className: "red",
      },
      {
        name: "Jenny Wilson",
        phone: "",
        expanse: "$166.67",
        className: "red",
      },
      {
        name: "Kristin Watson",
        phone: "",
        expanse: "$166.67",
        className: "red",
      },
      {
        name: "",
        phone: "(307) 555-0133",
        expanse: "$166.67",
        className: "red",
      },
    ]}
    {...args}
  />
);
Expenses.args = {};

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
    profileImg: "https://i.pravatar.cc/150?img=1",
  },
];
export const AddExpenseView = (
  args: JSX.IntrinsicAttributes & EventSplitBillProps
) => (
  <AddExpense
    members={{
      name: "",
      phone: "",
      expanse: "",
      profileImage: undefined,
      className: "",
    }}
    getMembersFromContactList={function (): Promise<Contact[]> {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);
AddExpenseView.args = {
  getMembersFromContactList: async () => {
    console.log("Fetching members from contact list...");
    return mockMembers;
  },
};

export const WithTransactions = Template.bind({});
WithTransactions.args = {
  event: {
    id: "event_12345",
    owner: "user_001",
    name: "Annual Family Reunion",
    type: "reunion",
    description: "An annual gathering of the extended family.",
    hostedBy: "Me & Family",
    memberInvitationContactReference: [
      "+1234567890",
      "alice.smith@example.com",
    ],
    counters: {
      totalDeclinedCount: 0,
      totalAdultsCount: 0,
      totalAttendingCount: 0,
      totalChildrenCount: 0,
      totalMaybeCount: 0,
      totalInvitedCount: 0,
      totalRsvpCount: 0,
    },
    location: {
      name: "Grandma's House",
      // place:"",
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
