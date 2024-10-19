import { StoryFn } from "@storybook/react";
import EventDetailsPresenter from "./EventDetailsPresenter"; // Adjust the import path based on your project structure
import { EventProps } from "@goflock/types/src/index";
//import EventGuestViewPresenter from "./EventGuestViewPresenter";
// import EventGuestViewPresenter from "./EventGuestViewPresenter";
// import { JSX } from "react/jsx-runtime";

export default {
  title: "GoFlock/Presenters/EventDetailsPresenter",
  component: EventDetailsPresenter,
};

const Template: StoryFn<EventProps> = (args) => (
  <EventDetailsPresenter {...args} />
);

export const EventGuestView = Template.bind({});
EventGuestView.args = {
  profile: {
    id: "user_001",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: {
    id: "event_12345",
    owner: "user_001",
    name: "Annual Family Reunion",
    type: "reunion",
    hostedBy: "Me & Family",
    memberInvitationContactReference: [
      "+1234567890",
      "alice.smith@example.com",
    ],
    description: "An annual gathering of the extended family.",
    location: {
      place:"Astoria Park",
      name: "New York, NY",
      lat: 40.712776,
      long: -74.005974,
    },
    time: {
      startDate: new Date(),
      startTime: "12:00 PM",
      endTime: "4:00 PM",
      endDate: new Date()
    },
    visibility: "private",
    members: [
      {
        id: "member_001",
        eventId: "event_12345",
        name: "Charlie Brown",
        phoneNumber: "+1234567890",
        roles: ["admin"],
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
        roles: ["member"],
        rsvp: {
          response: "not-attending",
          count: 1,
        },
      },
      {
        id: "member_003",
        eventId: "event_12345",
        name: "Eve Davis",
        email: "eve.davis@example.com",
        roles: ["member"],
        rsvp: {
          response: "maybe",
          count: 1,
        },
      },
      {
        id: "member_004",
        eventId: "event_12345",
        name: "Frank Miller",
        email: "frank.miller@example.com",
        roles: ["member"],
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
        roles: ["member"],
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
    action:[
      {
        text: "Copy link",
        role: "destructive",
        data: {
          action: "delete",
        },
      },
    ]
     
  },
  eventRelation: {
    roles: [],
    visitType: "member",
  },
};

export const PublicEventHostView = Template.bind({});
PublicEventHostView.args = {
  profile: {
    id: "user_001",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: {
    id: "event_12345",
    owner: "user_001",
    name: "Annual Family Reunion",
    hostedBy: "Me & Family",
    memberInvitationContactReference: [
      "+1234567890",
      "alice.smith@example.com",
    ],
    type: "reunion",
    description: "An annual gathering of the extended family.",
    location: {
      place:"Astoria Park",
      name: "New York, NY",
      lat: 40.712776,
      long: -74.005974,
    },
    time: {
      startDate: new Date(),
      startTime: "12:00 PM",
      endTime: "4:00 PM",
      endDate: new Date()
    },
    visibility: "private",
    members: [
      {
        id: "member_001",
        eventId: "event_12345",
        name: "Charlie Brown",
        phoneNumber: "+1234567890",
        roles: ["admin"],
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
        roles: ["member"],
        rsvp: {
          response: "not-attending",
          count: 1,
        },
      },
      {
        id: "member_003",
        eventId: "event_12345",
        name: "Eve Davis",
        email: "eve.davis@example.com",
        roles: ["member"],
        rsvp: {
          response: "maybe",
          count: 1,
        },
      },
      {
        id: "member_004",
        eventId: "event_12345",
        name: "Frank Miller",
        email: "frank.miller@example.com",
        roles: ["member"],
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
        roles: ["member"],
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
    action:[
      {
        text: "Copy link",
        role: "destructive",
        data: {
          action: "delete",
        },
      },
      {
        text: "Edit Event",
        data: {
          action: "share",
        },
      },
      {
        text: "Add Checklist",
        data: {
          action: "cancel",
        },
      },
      {
        text: "Delete Event",
        data: {
          action: "cancel",
        },
      }
    ]
  },
  eventRelation: {
    roles: [],
    visitType: "admin",
  },
};

export const PrivateEventHostView = Template.bind({});
PrivateEventHostView.args = {
  profile: {
    id: "user_001",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: {
    id: "event_12345",
    owner: "user_001",
    name: "Annual Family Reunion",
    type: "reunion",
    hostedBy: "Me & Family",
    memberInvitationContactReference: [
      "+1234567890",
      "alice.smith@example.com",
    ],
    description: "An annual gathering of the extended family.",
    location: {
      place:"Astoria Park",
      name: "New York, NY",
      lat: 40.712776,
      long: -74.005974,
    },
    time: {
      startDate: new Date(),
      startTime: "12:00 PM",
      endTime: "4:00 PM",
      endDate: new Date()
    },
    visibility: "private",
    members: [
      {
        id: "member_001",
        eventId: "event_12345",
        name: "Charlie Brown",
        phoneNumber: "+1234567890",
        roles: ["admin"],
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
        roles: ["member"],
        rsvp: {
          response: "not-attending",
          count: 1,
        },
      },
      {
        id: "member_003",
        eventId: "event_12345",
        name: "Eve Davis",
        email: "eve.davis@example.com",
        roles: ["member"],
        rsvp: {
          response: "maybe",
          count: 1,
        },
      },
      {
        id: "member_004",
        eventId: "event_12345",
        name: "Frank Miller",
        email: "frank.miller@example.com",
        roles: ["member"],
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
        roles: ["member"],
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
    action:[
      {
        text: "Copy link",
        role: "destructive",
        data: {
          action: "delete",
        },
      },
      {
        text: "Edit Event",
        data: {
          action: "share",
        },
      },
      {
        text: "Add Checklist",
        data: {
          action: "cancel",
        },
      },
      {
        text: "Delete Event",
        data: {
          action: "cancel",
        },
      }
      ,
      {
        text: "InviteGuest",
        data: {
          action: "cancel",
        },
      }
    ]
  },
  eventRelation: {
    roles: [],
    visitType: "owner",
  },
};
