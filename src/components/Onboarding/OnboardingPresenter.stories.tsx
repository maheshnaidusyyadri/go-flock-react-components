import { StoryFn } from "@storybook/react";
import OnboardingPresenter from "./OnboardingPresenter"; // Adjust the import path based on your project structure
import { IntroductionProps } from "@goflock/types/src";
import { action } from "@storybook/addon-actions";
import GuestOnboarding from "./GuestOnboarding";
import { EventProps } from "@goflock/types";
import {
  EventWithInvitation,
  IphoneDeviceContext,
  ownerEventRelation,
  OwnerProfile,
} from "../Common/MockData";

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
const GuestOnboardingTemplate: StoryFn<EventProps> = (args) => (
  <GuestOnboarding {...args} />
);

export const GuestInvitation = GuestOnboardingTemplate.bind({});
GuestInvitation.args = {
  profile: OwnerProfile,
  deviceContext: IphoneDeviceContext,
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
  submitRSVP: (eventId, rsvp) => {
    action("submitRSVP")(`Event ID: ${eventId}`, rsvp);
    return Promise.resolve();
  },
  inviteMembers: (eventId) => action("inviteMembers")(`Event ID: ${eventId}`),
  editEvent: (eventId) => action("editEvent")(`Event ID: ${eventId}`),
  copyEventLink: (eventId) => action("copyEventLink")(`Event ID: ${eventId}`),
  navigateToEventLocation: (eventId) =>
    action("navigateToEventLocation")(`Event ID: ${eventId}`),
  deleteEvent: (eventId) => action("deleteEvent")(`Event ID: ${eventId}`),
  sendOTP: async (phoneNumber) => {
    action("sendOTP")(`Sending OTP to ${phoneNumber}`);
    return true;
  },
  verifyOTP: async (phoneNumber, otp) => {
    action("verifyOTP")(`Verifying OTP: ${otp} for ${phoneNumber}`);
    return true;
  },
};
