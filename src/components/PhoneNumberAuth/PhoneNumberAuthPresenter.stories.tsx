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

export const Default = Template.bind({});
Default.args = {
  sendOTP: async (phoneNumberWithCountryCode: string) => {
    action("sendOTP")(`Sending OTP to ${phoneNumberWithCountryCode}`);
    return true;
  },
  verifyOTP: async (phoneNumberWithCountryCode: string, otp: string) => {
    action("verifyOTP")(
      `Verifying OTP ${otp} for ${phoneNumberWithCountryCode}`
    );
    return true;
  },
};
