import { StoryFn } from "@storybook/react";
import DashboardPresenter from "./DashboardPresenter"; // Adjust the import path based on your project structure
import { DashboardProps, ListType } from "@goflock/types/src/index";

export default {
  title: "GoFlock/Presenters/DashboardPresenter",
  component: DashboardPresenter,
};

const Template: StoryFn<DashboardProps> = (args) => (
  <DashboardPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profile: {
    id: "user_001",
    prefName: "Jane Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  activeEvents: [
    {
      id: "event_001",
      owner: "user_002",
      name: "Team Meeting",
      type: "get_togather",
      description: "Weekly team sync-up.",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      location: {
        name: "Office",
        //place:'',
      },
      time: {
        startDate: new Date(),
        startTime: "9:00 AM",
        endDate: new Date()
      },
      visibility: "public",
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
        allowCheckList: false,
        currency: "USD",
        eventVisibility: "public",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
      action:[]
    },
    {
      id: "event_002",
      owner: "user_003",
      name: "Birthday Party",
      type: "birthday",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      description: "Celebrating Sarah's birthday!",
      location: {
        name: "Sarah's House",
      },
      time: {
        startDate: new Date(),
        startTime: "7:00 PM",
        endDate: new Date()
      },
      visibility: "private",
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
        allowCheckList: true,
        currency: "USD",
        eventVisibility: "private",
      },
      checkListQuestions: [],
      checkListResponses: [],
      media: [],
      transactions: [],
      deleted: false,
      action:[]
    },
  ],
  myEvents: [
    {
      id: "event_003",
      owner: "user_001",
      name: "Wedding Planning",
      type: "wedding",
      description: "Planning the big day!",
      hostedBy: "Me & Family",
      memberInvitationContactReference: [
        "+1234567890",
        "alice.smith@example.com",
      ],
      location: {
        name: "Downtown Hall",
      },
      time: {
        startDate: new Date(),
        startTime: "12:00 PM",
        endDate: new Date()
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
      action:[]
    },
  ],
  createNewEvent: () => {
    console.log("Creating a new event...");
  },
  openEvent: (eventId: string) => {
    console.log("Opening event:", eventId);
  },
  seeAllMyEvents: () => {
    console.log("Seeing all my events...");
  },
  seeAllEvents: (listType: ListType) => {
    console.log("Seeing all events of type:", listType);
  },
};

export const NoActiveEvents = Template.bind({});
NoActiveEvents.args = {
  ...Default.args,
  activeEvents: [],
};

export const NoMyEvents = Template.bind({});
NoMyEvents.args = {
  ...Default.args,
  myEvents: [],
};
