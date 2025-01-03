import { Meta, StoryFn } from "@storybook/react";
import PhoneNumberAuth from "./PhoneNumberAuthPresenter";
import { PhoneNumberAuthProps } from "@goflock/types";
import { IonApp, IonContent } from "@ionic/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "GoFlock/Presenters/PhoneNumberAuthPresenter",
  component: PhoneNumberAuth,
} as Meta<typeof PhoneNumberAuth>;

const Template: StoryFn<PhoneNumberAuthProps> = (args) => (
  <IonApp>
    <IonContent>
      <PhoneNumberAuth {...args} />
    </IonContent>
  </IonApp>
);

export const SuccessfulVerification = Template.bind({});
SuccessfulVerification.args = {
  sendOTP: async (phoneNumberWithCountryCode: string) => {
    action("sendOTP")(`Sending OTP to ${phoneNumberWithCountryCode}`);
    return true;
  },
  verifyOTP: async (otp: string) => {
    action("verifyOTP")(`Verifying OTP ${otp}`);
    return true;
  },
  onSuccessfulVerification: async () => {
    action("onSuccessfulVerification");
  },
};

export const OtpSendingFailed = Template.bind({});
OtpSendingFailed.args = {
  sendOTP: async (phoneNumberWithCountryCode: string) => {
    action("sendOTP")(`Failed Sending OTP for ${phoneNumberWithCountryCode}`);
    return false;
  },
  verifyOTP: async (otp: string) => {
    action("verifyOTP")(`Verifying OTP ${otp}`);
    return true;
  },
  onSuccessfulVerification: async () => {
    action("onSuccessfulVerification");
  },
};

export const OtpVerificationFailed = Template.bind({});
OtpVerificationFailed.args = {
  sendOTP: async (phoneNumberWithCountryCode: string) => {
    action("sendOTP")(
      `Succesful Sending OTP for ${phoneNumberWithCountryCode}`
    );
    return true;
  },
  verifyOTP: async (otp: string) => {
    action("verifyOTP")(`Failed Verifying OTP ${otp}`);
    return false;
  },
  onSuccessfulVerification: async () => {
    action("onSuccessfulVerification");
  },
};
