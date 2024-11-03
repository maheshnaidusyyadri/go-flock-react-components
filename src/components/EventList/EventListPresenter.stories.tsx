import { StoryFn } from "@storybook/react";
import EventListPresenter from "./EventListPresenter"; // Adjust the import path based on your project structure
import { EventListProps } from "@goflock/types/src/index";
import {
  BirthdayEvent,
  HalloweenEvent,
  OwnerProfile,
} from "../Common/MockData";
export default {
  title: "GoFlock/Presenters/EventListPresenter",
  component: EventListPresenter,
};

const Template: StoryFn<EventListProps> = (args) => (
  <EventListPresenter {...args} />
);

export const MultipleEvents = Template.bind({});
MultipleEvents.args = {
  profile: OwnerProfile,
  events: [BirthdayEvent, HalloweenEvent, BirthdayEvent, HalloweenEvent],
  openEvent: (eventId: string) => {
    console.log("Opening event:", eventId);
  },
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...MultipleEvents.args,
  events: [],
};

export const SingleEvent = Template.bind({});
SingleEvent.args = {
  ...MultipleEvents.args,
  events: [BirthdayEvent],
};
