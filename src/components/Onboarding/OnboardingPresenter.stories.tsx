import { StoryFn } from "@storybook/react";
import OnboardingPresenter from "./OnboardingPresenter"; // Adjust the import path based on your project structure
import { IntroductionProps } from "@goflock/types/src";
import { action } from "@storybook/addon-actions";
import GuestOnboarding from "./GuestOnboarding";

export default {
  title: "GoFlock/Presenters/Onboarding",
  component: OnboardingPresenter,
};

const Template: StoryFn<IntroductionProps> = (args) => (
  <OnboardingPresenter {...args} />
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
  introCompleted: () => {
    action("introCompleted")(`Introduction was completed`);
  },
};
const GuestOnboardingTemplate: StoryFn = (args) => (
  <GuestOnboarding {...args} />
);

export const GuestInvitation = GuestOnboardingTemplate.bind({});
GuestInvitation.args = {};
