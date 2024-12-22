import { StoryFn } from "@storybook/react";
import EventMediaPresenter from "./EventMediaPresenter";
import {
  EventWithInvitation,
  ImageAndVideosMixedMedia,
  ImagesMedia,
  ownerEventRelation,
  OwnerProfile,
} from "../Common/MockData";

import { action } from "@storybook/addon-actions";
import { withRouter } from "storybook-addon-remix-react-router";
import EventMediaSkeletonPage from "./EventMediaSkeleton";

export default {
  title: "GoFlock/Presenters/EventMediaPresenter",
  component: EventMediaPresenter,
  decorators: [withRouter],
};

const Template: StoryFn<typeof EventMediaPresenter> = (args) => (
  <EventMediaPresenter {...args} />
);

export const WithNoMedia = Template.bind({});
WithNoMedia.args = {
  profile: OwnerProfile,
  eventId: "event_001",
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
  media: [],

  // Mock function to add media
  addMedia: async (files: FileList) => {
    action("addMedia")(files);

    return ImagesMedia;
  },

  // Mock function to delete media
  deleteMedia: async (mediaIds: string[]) => {
    action("deleteMedia")(mediaIds);

    return true;
  },
};

export const WithImagesMedia = Template.bind({});
WithImagesMedia.args = {
  ...WithNoMedia.args,
  media: ImagesMedia,
};

export const WithImagesAndMixedMedia = Template.bind({});
WithImagesAndMixedMedia.args = {
  ...WithNoMedia.args,
  media: ImageAndVideosMixedMedia,
};

const SkeletonTemplate: StoryFn<typeof EventMediaPresenter> = () => (
  <EventMediaSkeletonPage />
);
export const EventMediaSkeleton = SkeletonTemplate.bind({});
EventMediaSkeleton.args = {};
