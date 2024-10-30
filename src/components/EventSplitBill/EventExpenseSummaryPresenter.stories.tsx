import { StoryFn } from "@storybook/react";
import EventSplitBillPresenter from "./EventExpenseSummaryPresenter";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import EventDp from "../../images/event_DP.png";
export default {
  title: "GoFlock/Presenters/EventExpenseSummaryPresenter",
  component: EventSplitBillPresenter,
};

const Template: StoryFn<EventExpenseSummaryProps> = (args) => (
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
      url: EventDp,
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
          {
            userId: "member_002",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_003",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_004",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_005",
            amount: 125,
            currency: "USD",
          },
        ],
        description: "Catering service",
        amount: 500,
        date: "2024-12-01T00:00:00Z",
        deleted: false,
        currency: "USD",
      },
      {
        id: "txn_002",
        eventId: "event_12345",
        paidUserId: "admin_001",
        splitAmongUserIds: [
          {
            userId: "admin_002",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_001",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_002",
            amount: 125,
            currency: "USD",
          },
        ],
        description: "Venue booking",
        amount: 300,
        date: "2024-11-25T00:00:00Z",
        deleted: false,
        currency: "USD",
      },
      {
        id: "txn_003",
        eventId: "event_12345",
        paidUserId: "member_003",
        splitAmongUserIds: [
          {
            userId: "member_004",
            amount: 125,
            currency: "USD",
          },
          {
            userId: "member_005",
            amount: 125,
            currency: "USD",
          },
        ],
        description: "Decorations",
        amount: 150,
        date: "2024-12-20T00:00:00Z",
        deleted: false,
        currency: "USD",
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
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_003",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Catering service",
      amount: 500,
      date: "2024-12-01T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_002",
      eventId: "event_12345",
      paidUserId: "admin_001",
      splitAmongUserIds: [
        {
          userId: "admin_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_001",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Venue booking",
      amount: 300,
      date: "2024-11-25T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_003",
      eventId: "event_12345",
      paidUserId: "member_003",
      splitAmongUserIds: [
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Decorations",
      amount: 150,
      date: "2024-12-20T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
  ],
};
