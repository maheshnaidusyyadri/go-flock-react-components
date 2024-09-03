import { StoryFn } from "@storybook/react";
import EventPresenter from "./EventPresenter"; // Adjust the import path based on your project structure
import { EventProps, RSVP } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/EventPresenter",
  component: EventPresenter,
};

const Template: StoryFn<EventProps> = (args) => <EventPresenter {...args} />;

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
  event: {
    id: "event_001",
    owner: "user_001",
    name: "Birthday Party",
    type: "birthday",
    description: "Celebrating my 30th birthday!",
    location: {
      name: "My House",
    },
    time: {
      startDate: new Date(),
      startTime: "7:00 PM",
    },
    visibility: "private",
    admins: [],
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
  deleteEvent: (eventId: string) => {
    console.log("Event deleted:", eventId);
  },
  submitRSVP: async (eventId: string, rsvpUserId: string, rsvp: RSVP) => {
    console.log(`RSVP for ${eventId} by ${rsvpUserId}:`, rsvp);
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  submitRSVP: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("RSVP submitted (loading state)");
        resolve();
      }, 2000)
    );
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  submitRSVP: async () => {
    throw new Error("Failed to submit RSVP");
  },
};
