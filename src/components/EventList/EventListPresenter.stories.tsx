import { StoryFn } from "@storybook/react";
import EventListPresenter from "./EventListPresenter"; // Adjust the import path based on your project structure
import { EventListProps } from "@goflock/types/src/index";

export default {
  title: "GoFlock/Presenters/EventListPresenter",
  component: EventListPresenter,
};

const Template: StoryFn<EventListProps> = (args) => (
  <EventListPresenter {...args} />
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
      emailNotifications: false,
      pushNotifications: true,
    },
  },
  events: [
    {
      id: "event_001",
      owner: "user_001",
      name: "Family Gathering",
      type: "family_event",
      description: "Annual family gathering at the park.",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      location: {
        name: "Central Park",
        lat: 40.785091,
        long: -73.968285,
      },
      time: {
        startDate: new Date(),
        startTime: "10:00 AM",
      },
      visibility: "private",
      members: [],
      invitationCard: {
        id: "card_001",
        cardType: "image",
        path: "/cards/invitation_card_001.jpg",
        configuration: "default",
        shared: true,
      },
      settings: {
        shareMedia: true,
        splitBills: false,
        enableChats: true,
        allowCheckList: true,
        currency: "USD",
        eventVisibility: "private",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
    },
    {
      id: "event_002",
      owner: "user_002",
      name: "Office Party",
      type: "party",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      description: "End of year office party.",
      location: {
        name: "Office Headquarters",
      },
      time: {
        startDate: new Date(),
        startTime: "6:00 PM",
      },
      visibility: "public",
      members: [],
      invitationCard: {
        id: "card_002",
        cardType: "image",
        path: "/cards/invitation_card_002.jpg",
        configuration: "default",
        shared: true,
      },
      settings: {
        shareMedia: true,
        splitBills: true,
        enableChats: true,
        allowCheckList: false,
        currency: "USD",
        eventVisibility: "public",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
    },
    {
      id: "event_003",
      owner: "user_003",
      name: "Birthday Party",
      type: "party",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      description: "End of year office party.",
      location: {
        name: "Office Headquarters",
      },
      time: {
        startDate: new Date(),
        startTime: "6:00 PM",
      },
      visibility: "public",
      members: [],
      invitationCard: {
        id: "card_002",
        cardType: "image",
        path: "/cards/invitation_card_002.jpg",
        configuration: "default",
        shared: true,
      },
      settings: {
        shareMedia: true,
        splitBills: true,
        enableChats: true,
        allowCheckList: false,
        currency: "USD",
        eventVisibility: "public",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
    },
  ],
  openEvent: (eventId: string) => {
    console.log("Opening event:", eventId);
  },
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...Default.args,
  events: [],
};

export const SingleEvent = Template.bind({});
SingleEvent.args = {
  ...Default.args,
  events: [
    {
      id: "event_003",
      owner: "user_003",
      name: "Birthday Party",
      type: "birthday",
      description: "Celebrating my 30th birthday!",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      location: {
        name: "My House",
      },
      time: {
        startDate: new Date(),
        startTime: "7:00 PM",
      },
      visibility: "private",
      members: [],
      invitationCard: {
        id: "card_003",
        cardType: "image",
        path: "/cards/invitation_card_003.jpg",
        configuration: "default",
        shared: true,
      },
      settings: {
        shareMedia: true,
        splitBills: false,
        enableChats: true,
        allowCheckList: true,
        currency: "USD",
        eventVisibility: "private",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
    },
  ],
};
