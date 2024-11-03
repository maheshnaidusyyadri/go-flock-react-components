import { StoryFn } from "@storybook/react";
import DashboardPresenter from "./DashboardPresenter";
import { DashboardProps, ListType } from "@goflock/types/src/index";
import {
  OwnerProfile,
  HalloweenEvent,
  BirthdayEvent,
} from "../Common/MockData";
export default {
  title: "GoFlock/Presenters/DashboardPresenter",
  component: DashboardPresenter,
};

const Template: StoryFn<DashboardProps> = (args) => (
  <DashboardPresenter {...args} />
);

export const WithActiveAndMyEvents = Template.bind({});
WithActiveAndMyEvents.args = {
  profile: OwnerProfile,
  activeEvents: [HalloweenEvent, BirthdayEvent],
  myEvents: [BirthdayEvent],

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
  ...WithActiveAndMyEvents.args,
  activeEvents: [],
};

export const NoMyEvents = Template.bind({});
NoMyEvents.args = {
  ...WithActiveAndMyEvents.args,
  myEvents: [],
};

export const NoActiveOrMyEvents = Template.bind({});
NoActiveOrMyEvents.args = {
  ...WithActiveAndMyEvents.args,
  myEvents: [],
  activeEvents: [],
};
