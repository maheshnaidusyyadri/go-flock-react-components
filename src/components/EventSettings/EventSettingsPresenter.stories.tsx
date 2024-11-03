import { Meta, StoryFn } from "@storybook/react";
import EventSettingsPresenter from "./EventSettingsPresenter";
import {
  Currency,
  EventVisibility,
  EventSettings,
} from "@goflock/types/src/index";
export default {
  title: "GoFlock/Presenters/EventSettingsPresenter",
  component: EventSettingsPresenter,
} as Meta<typeof EventSettingsPresenter>;
import { BirthdayEvent, OwnerProfile } from "../Common/MockData";

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
  profile: OwnerProfile,
  event: BirthdayEvent,
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
