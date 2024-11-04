import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ProfilePresenter from "./ProfilePresenter";
import { ProfileProps } from "@goflock/types";
import { OwnerProfile } from "../Common/MockData";

export default {
  title: "GoFlock/Presenters/ProfilePresenter",
  component: ProfilePresenter,
};

const Template: StoryFn<ProfileProps> = (args) => (
  <ProfilePresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profile: OwnerProfile,
  setPreferredName: async (prefName: string) => {
    action("setPreferredName")(`Preferred name set to: ${prefName}`);
    return true;
  },
  setIsIntroShown: async (isIntroShown: boolean) => {
    action("setIsIntroShown")(`Intro visibility set to: ${isIntroShown}`);
    return true;
  },
  setSMSPreference: async (smsNotifications: boolean) => {
    action("setSMSPreference")(`SMS preference set to: ${smsNotifications}`);
    return true;
  },
  logout: () => {
    action("logout")("User logged out");
  },
  deleteAccount: () => {
    action("deleteAccount")("Account deleted");
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  setPreferredName: async (prefName: string) => {
    action("setPreferredName")(`Setting preferred name: ${prefName}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  },
  setIsIntroShown: async (isIntroShown: boolean) => {
    action("setIsIntroShown")(`Setting intro visibility: ${isIntroShown}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  },
  setSMSPreference: async (smsNotifications: boolean) => {
    action("setSMSPreference")(`Setting SMS preference: ${smsNotifications}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  },
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  setPreferredName: async () => {
    action("setPreferredName")("Failed to set preferred name");
    throw new Error("Failed to set preferred name");
  },
  setIsIntroShown: async () => {
    action("setIsIntroShown")("Failed to update intro visibility");
    throw new Error("Failed to update intro visibility");
  },
  setSMSPreference: async () => {
    action("setSMSPreference")("Failed to update SMS preference");
    throw new Error("Failed to update SMS preference");
  },
};
