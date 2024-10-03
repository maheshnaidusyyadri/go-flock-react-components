import { StoryFn } from "@storybook/react";
import ProfilePresenter from "./ProfilePresenter";
import { ProfileProps } from "@goflock/types";

export default {
  title: "GoFlock/Presenters/ProfilePresenter",
  component: ProfilePresenter,
};

const Template: StoryFn<ProfileProps> = (args) => (
  <ProfilePresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profile: {
    id: "1",
    prefName: "John Doe",
    isIntroShown: true,
    pictureUrl: "https://example.com/profile.jpg",
    preferences: {
      smsNotifications: true,
      emailNotifications: false,
      pushNotifications: true,
    },
  },
  setPreferredName: async (prefName: string) => {
    console.log("Preferred name set to:", prefName);
    return true;
  },
  setIsIntroShown: async (isIntroShown: boolean) => {
    console.log("Intro visibility set to:", isIntroShown);
    return true;
  },
  setSMSPreference: async (smsNotifications: boolean) => {
    console.log("SMS preference set to:", smsNotifications);
    return true;
  },
  // handleLogout: () => {
  //   console.log("User logged out");
  // },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  setPreferredName: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
  setIsIntroShown: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
  setSMSPreference: async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a loading state
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  setPreferredName: async () => {
    throw new Error("Failed to set preferred name");
  },
  setIsIntroShown: async () => {
    throw new Error("Failed to update intro visibility");
  },
  setSMSPreference: async () => {
    throw new Error("Failed to update SMS preference");
  },
};
