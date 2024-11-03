import { StoryFn } from "@storybook/react";
import CreateNewEventPresenter from "./CreateNewEventPresenter";
import { CreateNewEventProps } from "@goflock/types/src/presenter";
import { DraftEvent, LocationInfo } from "@goflock/types/src";
import { EventWithMembers, OwnerProfile } from "../Common/MockData";
import { action } from "@storybook/addon-actions";

export default {
  title: "GoFlock/Presenters/CreateNewEvent",
  component: CreateNewEventPresenter,
};

const Template: StoryFn<CreateNewEventProps> = (args) => (
  <CreateNewEventPresenter {...args} />
);

export const CreateEventFlow = Template.bind({});
CreateEventFlow.args = {
  profile: OwnerProfile,
  searchLocation: async (query: string) => {
    console.log(`Searching for location: ${query}`);
    return [
      { name: "Central Park", lat: 40.785091, long: -73.968285 },
      { name: "Times Square", lat: 40.758896, long: -73.98513 },
    ] as LocationInfo[];
  },
  createEvent: async (draftEvent: DraftEvent) => {
    action("createEvent")(draftEvent);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EventWithMembers);
        console.log("Event created (after delay)");
      }, 5000);
    });
  },
  goToEvent: (eventId: string) => {
    action("goToEvent")(eventId);
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...CreateEventFlow.args,
  createEvent: async (draftEvent: DraftEvent) => {
    action("createEvent failed for")(draftEvent);
    throw new Error("Failed to create event");
  },
};
