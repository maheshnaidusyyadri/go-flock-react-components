import { StoryFn } from "@storybook/react";
import CreateNewEventPresenter from "./CreateNewEventPresenter"; // Adjust the import path based on your project structure
import NoEventPresenter from "./NoEventPresenter"; 
import { CreateNewEventProps } from "@goflock/types/src/presenter";
import { DraftEvent, LocationInfo } from "@goflock/types/src";
import { JSX } from "react/jsx-runtime";
// import {
//   LocationInfo,
//   CreateNewEventProps,
//   DraftEvent,
// } from "@goflock/types/src/index";

export default {
  title: "GoFlock/Presenters/CreateNewEvent",
  component: CreateNewEventPresenter, NoEventPresenter
};

const Template: StoryFn<CreateNewEventProps> = (args) => (
  <CreateNewEventPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
  searchLocation: async (query: string) => {
    console.log(`Searching for location: ${query}`);
    return [
      { name: "Central Park", lat: 40.785091, long: -73.968285 },
      { name: "Times Square", lat: 40.758896, long: -73.98513 },
    ] as LocationInfo[];
  },
  createEvent: async (draftEvent: DraftEvent) => {
    console.log("Creating event:", draftEvent);
    return {
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
    };
  },
  goToEvent: (eventId: string) => {
    console.log("Navigating to event:", eventId);
  },
};

export const NoEvent = (args: JSX.IntrinsicAttributes & CreateNewEventProps) => (
  <NoEventPresenter {...args} />
);
NoEvent.args = {
  
}

export const CreatingEvent = Template.bind({});
CreatingEvent.args = {
  ...Default.args,
  createEvent: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
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
                response: "maybe",
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
                response: "not-attending",
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
        });
        console.log("Event created (after delay)");
      }, 2000);
    });
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  createEvent: async () => {
    throw new Error("Failed to create event");
  },
};
