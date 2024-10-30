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
    path: "https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg",
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
    path: "https://aznameify.com/wp-content/uploads/2024/07/event-names.png",
    downloadUrl: "https://via.placeholder.com/300",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 780,
  },
  {
    id: "media_002",
    uploadedBy: "user_002",
    eventId: "event_001",
    type: "video",
    path: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    downloadUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 1420,
  },
  {
    id: "media_002",
    uploadedBy: "user_002",
    eventId: "event_001",
    type: "image",
    path: "https://media.coschedule.com/uploads/2024/07/HM-Generator-Meta-Feautured-Img-Grid-Edit-_Event-Name.png",
    downloadUrl: "https://via.placeholder.com/300",
    createdAt: new Date().toISOString(),
    isDeleted: false,
    width: 1080,
    height: 780,
  },
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
