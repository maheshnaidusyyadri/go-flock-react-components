import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import EventSettingsPresenter from "./EventSettingsPresenter";
import {
  Currency,
  EventVisibility,
  EventSettings,
} from "@goflock/types/src/index";
import { BirthdayEvent, OwnerProfile } from "../Common/MockData";

export default {
  title: "GoFlock/Presenters/EventSettingsPresenter",
  component: EventSettingsPresenter,
} as Meta<typeof EventSettingsPresenter>;

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

  enableMediaSharing: async (eventId: string) => {
    action("enableMediaSharing")(`Enabling media sharing for event ${eventId}`);
    return true;
  },
  disableMediaSharing: async (eventId: string) => {
    action("disableMediaSharing")(
      `Disabling media sharing for event ${eventId}`
    );
    return true;
  },

  enableSplitBills: async (eventId: string) => {
    action("enableSplitBills")(`Enabling split bills for event ${eventId}`);
    return true;
  },
  disableSplitBills: async (eventId: string) => {
    action("disableSplitBills")(`Disabling split bills for event ${eventId}`);
    return true;
  },

  updateCurrency: async (currency: Currency) => {
    action("updateCurrency")(`Updating currency to ${currency}`);
    return true;
  },

  updateEventVisibility: async (visibility: EventVisibility) => {
    action("updateEventVisibility")(
      `Updating event visibility to ${visibility}`
    );
    return true;
  },
};
