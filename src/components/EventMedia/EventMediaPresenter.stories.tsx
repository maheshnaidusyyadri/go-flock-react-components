import { StoryFn } from "@storybook/react";
import EventMediaPresenter from "./EventMediaPresenter"; // Adjust the import path based on your project structure
import { EventMediaProps, Media } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/EventMediaPresenter",
  component: EventMediaPresenter,
};

const Template: StoryFn<EventMediaProps> = (args) => (
  <EventMediaPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  media: [
    {
      id: "1",
      eventId: "event_001",
      uploadedBy: "user_001",
      path: "https://via.placeholder.com/200",
      type: "image",
      createdAt: new Date().toISOString(),
      isDeleted: false,
    },
    {
      id: "2",
      eventId: "event_001",
      uploadedBy: "user_002",
      path: "https://via.placeholder.com/200",
      type: "image",
      createdAt: new Date().toISOString(),
      isDeleted: false,
    },
  ] as Media[],
  addMedia: async (imageAsString: string) => {
    console.log("Media added:", imageAsString);
    return {
      id: "3",
      eventId: "event_001",
      uploadedBy: "user_003",
      path: imageAsString,
      type: "image",
      createdAt: new Date().toISOString(),
      isDeleted: false,
    } as Media;
  },
  deleteMedia: async (mediaId: string) => {
    console.log("Media deleted:", mediaId);
    return {
      id: mediaId,
      eventId: "event_001",
      uploadedBy: "user_001",
      path: "",
      type: "image",
      createdAt: "",
      isDeleted: true,
    } as Media;
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  addMedia: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Media added (loading state)");
        resolve(Default.args!.media![0]);
      }, 2000)
    );
  },
  deleteMedia: async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Media deleted (loading state)");
        resolve(Default.args!.media![0]);
      }, 2000)
    );
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  addMedia: async () => {
    throw new Error("Failed to add media");
  },
  deleteMedia: async () => {
    throw new Error("Failed to delete media");
  },
};
