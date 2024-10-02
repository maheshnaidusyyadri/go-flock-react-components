import { StoryFn } from "@storybook/react";
import OnboardingPresenter from "./OnboardingPresenter"; // Adjust the import path based on your project structure
import { IntroductionProps } from "@goflock/types/src";
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
    console.log("User logged out");
  },
};
