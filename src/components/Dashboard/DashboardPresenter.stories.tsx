import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DashboardPresenter from "./DashboardPresenter";
import { DashboardProps } from "@goflock/types/src/index";
import {
  OwnerProfile,
  HalloweenEvent,
  BirthdayEvent,
  IphoneDeviceContext,
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
  deviceContext: IphoneDeviceContext,
  activeEvents: [HalloweenEvent, BirthdayEvent],
  myEvents: [BirthdayEvent],

  createNewEvent: action("createNewEvent"),
  openEvent: (eventId) => action("openEvent")(eventId),
  seeAllMyEvents: action("seeAllMyEvents"),
  seeAllEvents: (listType) => action("seeAllEvents")(listType),
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
