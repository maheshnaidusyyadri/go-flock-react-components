import { StoryFn } from "@storybook/react";
import GuestOnboardingPresenter from "./GuestOnboardingPresenter"; // Adjust the import path based on your project structure
import { action } from "@storybook/addon-actions";
import { GuestOnboardingProps } from "@goflock/types";
import {
  BdayEventForGuest,
  IphoneDeviceContext,
  unAuthEventRelation,
} from "../Common/MockData";

export default {
  title: "GoFlock/Presenters/GuestOnboarding",
  component: GuestOnboardingPresenter,
};

const GuestOnboardingTemplate: StoryFn<GuestOnboardingProps> = (args) => (
  <GuestOnboardingPresenter {...args} />
);

export const GuestInvitation = GuestOnboardingTemplate.bind({});
GuestInvitation.args = {
  profile: undefined,
  deviceContext: IphoneDeviceContext,
  eventMinDetails: BdayEventForGuest,
  eventRelation: unAuthEventRelation,
  sendOTP: async (phoneNumber) => {
    action("sendOTP")(`Sending OTP to ${phoneNumber}`);
    return true;
  },
  verifyOTP: async (otp) => {
    action("verifyOTP")(`Verifying OTP: ${otp}`);
    return true;
  },
  onSuccessfulVerification() {
    console.log("onSuccessfulAuth");
  },
};
