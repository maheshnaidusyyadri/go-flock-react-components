import { Meta, StoryFn } from "@storybook/react";
import EventMediaPresenter from "./EventMediaPresenter";
import { Media, UserGallaryItem } from "@goflock/types";

// Mock media data
const mockMedia: Media[] = [
  {
    id: "media_001",
    uploadedBy: "user_001",
    eventId: "event_001",
    type: "image",
    path: "https://via.placeholder.com/200",
    downloadUrl: "https://via.placeholder.com/200",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 780,
  },
  {
    id: "media_002",
    uploadedBy: "user_002",
    eventId: "event_001",
    type: "image",
    path: "https://via.placeholder.com/300",
    downloadUrl: "https://via.placeholder.com/300",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 1620,
  },
  {
    id: "media_002",
    uploadedBy: "user_002",
    eventId: "event_001",
    type: "video",
    path: "https://via.placeholder.com/300",
    downloadUrl: "https://via.placeholder.com/300",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 1620,
  },
  // {
  //   id: "media_003",
  //   uploadedBy: "user_003",
  //   eventId: "event_001",
  //   type: "video",
  //   path: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //   width: 1080,
  //   height: 1620,
  // },
];

// Mock gallery items
const mockGalleryItems: UserGallaryItem[] = [
  {
    webviewPath: "https://via.placeholder.com/400",
    filepath: "Image1",
  },
  {
    webviewPath: "https://via.placeholder.com/500",
    filepath: "Image2",
  },
];

export default {
  title: "GoFlock/Presenters/EventMediaPresenter",
  component: EventMediaPresenter,
} as Meta<typeof EventMediaPresenter>;

const Template: StoryFn<typeof EventMediaPresenter> = (args) => (
  <EventMediaPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profile: {
    id: "user_001",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://via.placeholder.com/150",
    preferences: {
      smsNotifications: true,
      emailNotifications: true,
      pushNotifications: false,
    },
  },
  eventId: "event_001",
  media: mockMedia,

  // Mock function to show gallery
  showGallary: async () => {
    console.log("Opening gallery...");
    return mockGalleryItems;
  },

  // Mock function to add media
  addMedia: async (imageAsString: string) => {
    console.log("Adding media:", imageAsString);
    return {
      id: `media_${Math.random().toString(36).substr(2, 9)}`,
      uploadedBy: "user_001",
      eventId: "event_001",
      type: "image",
      path: imageAsString,
      downloadUrl: imageAsString,
      createdAt: new Date().toISOString(),
      isDeleted: false,
    };
  },

  // Mock function to delete media
  deleteMedia: async (mediaId: string) => {
    console.log("Deleting media with ID:", mediaId);
    return true;
  },
};
