import { Meta, StoryFn } from "@storybook/react";
import EventMediaPresenter from "./EventMediaPresenter";
import {
  ImageAndVideosMixedMedia,
  ImagesMedia,
  OwnerProfile,
} from "../Common/MockData";
import { UserMediaMetadata } from "@goflock/types/src";
import { action } from "@storybook/addon-actions";

export default {
  title: "GoFlock/Presenters/EventMediaPresenter",
  component: EventMediaPresenter,
} as Meta<typeof EventMediaPresenter>;

const Template: StoryFn<typeof EventMediaPresenter> = (args) => (
  <EventMediaPresenter {...args} />
);

export const WithNoMedia = Template.bind({});
WithNoMedia.args = {
  profile: OwnerProfile,
  eventId: "event_001",
  media: [],

  // Mock function to add media
  addMedia: async (
    mediaAsStrings: string[],
    metadataList: UserMediaMetadata[]
  ) => {
    action("addMedia")(mediaAsStrings);
    action("addMedia")(metadataList);

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
  ...WithNoMedia,
  media: ImagesMedia,
};

export const WithImagesAndMixedMedia = Template.bind({});
WithImagesAndMixedMedia.args = {
  ...WithNoMedia,
  media: ImageAndVideosMixedMedia,
};
