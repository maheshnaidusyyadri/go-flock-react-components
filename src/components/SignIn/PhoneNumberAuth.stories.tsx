import { Meta, StoryFn } from "@storybook/react";
import PhoneNumberAuth from "./PhoneNumberAuth";
import { PhoneNumberAuthProps } from "@goflock/types";
import { IonApp, IonContent } from "@ionic/react";

export default {
  title: "GoFlock/Components/PhoneNumberAuth",
  component: PhoneNumberAuth,
} as Meta<typeof PhoneNumberAuth>;

const Template: StoryFn<PhoneNumberAuthProps> = (args) => (
  <IonApp>
    <IonContent>
      <PhoneNumberAuth {...args} />
    </IonContent>
  </IonApp>
);

export const Default = Template.bind({});
Default.args = {
  sendOTP: async (phoneNumberWithCountryCode: string) => {
    console.log(`Sending OTP to ${phoneNumberWithCountryCode}`);
    return true;
  },
  verifyOTP: async (phoneNumberWithCountryCode: string, otp: string) => {
    console.log(`Verifying OTP ${otp} for ${phoneNumberWithCountryCode}`);
    return true;
  },
};
