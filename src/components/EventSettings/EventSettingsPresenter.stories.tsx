import { Meta, StoryFn } from "@storybook/react";
import EventSettingsPresenter from "./EventSettingsPresenter";
import {
  Currency,
  EventVisibility,
  Profile,
  EventSettings,
  Event,
} from "@goflock/types/src/index";
export default {
  title: "GoFlock/Presenters/EventSettingsPresenter",
  component: EventSettingsPresenter,
} as Meta<typeof EventSettingsPresenter>;
import EventDp from "../../images/event_DP.png";
// Mock data
const mockProfile: Profile = {
  id: "profile_001",
  prefName: "John Doe",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: false,
    pushNotifications: true,
  },
};

const mockEvent: Event = {
  id: "event_001",
  owner: "user_001",
  name: "Family Gathering",
  type: "anniversary",
  description: "Annual family gathering at the park.",
  hostedBy: "Me & Family",
  counters: {
    totalAdultsCount: 0,
    totalAttendingCount: 0,
    totalChildrenCount: 0,
    totalDeclinedCount: 0,
    totalInvitedCount: 0,
    totalMaybeCount: 0,
    totalRsvpCount: 0,
  },
  memberInvitationContactReference: ["+1234567890", "alice.smith@example.com"],
  location: { name: "Central Park" },
  time: { startDate: new Date(), startTime: "12:00 PM" },
  visibility: "private",
  members: [],
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
  transactions: [],
  deleted: false,
};

const mockEventSettings: EventSettings = {
  shareMedia: true,
  splitBills: true,
  enableChats: true,
  allowCheckList: true,
  currency: "USD",
  eventVisibility: "private",
};

// Template using StoryFn
const Template: StoryFn<typeof EventSettingsPresenter> = (args) => (
  <EventSettingsPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profile: mockProfile,
  event: mockEvent,
  eventSettings: mockEventSettings,
  enableMediaSharing: async () => {
    console.log("Enabling media sharing...");
    return true;
  },
  disableMediaSharing: async () => {
    console.log("Disabling media sharing...");
    return true;
  },
  enableSplitBills: async () => {
    console.log("Enabling split bills...");
    return true;
  },
  disableSplitBills: async () => {
    console.log("Disabling split bills...");
    return true;
  },
  updateCurrency: async (currency: Currency) => {
    console.log(`Updating currency to ${currency}...`);
    return true;
  },
  updateEventVisibility: async (visibility: EventVisibility) => {
    console.log(`Updating event visibility to ${visibility}...`);
    return true;
  },
};
