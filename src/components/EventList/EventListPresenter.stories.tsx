import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import EventListPresenter from "./EventListPresenter";
import { EventListProps } from "@goflock/types/src/index";
import EventListSkeletonPage from "./EventListSkeleton";
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
    action("openEvent")(`Opening event with ID: ${eventId}`);
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
const SkeletonTemplate: StoryFn = () => <EventListSkeletonPage />;

export const EventListSkeleton = SkeletonTemplate.bind({});
