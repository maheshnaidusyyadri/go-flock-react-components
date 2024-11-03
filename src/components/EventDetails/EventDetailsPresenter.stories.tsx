import { StoryFn } from "@storybook/react";
import EventDetailsPresenter from "./EventDetailsPresenter"; // Adjust the import path based on your project structure
import { EventProps } from "@goflock/types/src/index";
import {
  cohostEventRelation,
  EventWithInvitation,
  EventWithMembers,
  EventWithOneMember,
  guestEventRelation,
  ownerEventRelation,
  OwnerProfile,
} from "../Common/MockData";
import { action } from "@storybook/addon-actions";

export default {
  title: "GoFlock/Presenters/EventDetailsPresenter",
  component: EventDetailsPresenter,
};

const Template: StoryFn<EventProps> = (args) => (
  <EventDetailsPresenter {...args} />
);

export const PublicEventHostViewWithInvitation = Template.bind({});
PublicEventHostViewWithInvitation.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
};

export const PublicEventHostViewWithoutInvitation = Template.bind({});
PublicEventHostViewWithoutInvitation.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithMembers,
  eventRelation: ownerEventRelation,
};

export const PrivateEventHostViewWithInvitation = Template.bind({});
PrivateEventHostViewWithInvitation.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
};

export const PrivateEventHostViewWithoutInvitation = Template.bind({});
PrivateEventHostViewWithoutInvitation.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithMembers,
  eventRelation: ownerEventRelation,
};

export const PrivateEventHostViewWithSingleMember = Template.bind({});
PrivateEventHostViewWithSingleMember.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithOneMember,
  eventRelation: ownerEventRelation,
};

export const PrivateEventCoHostViewWithoutInvitation = Template.bind({});
PrivateEventCoHostViewWithoutInvitation.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithMembers,
  eventRelation: cohostEventRelation,
};

export const EventGuestViewUnAuth = Template.bind({});
EventGuestViewUnAuth.args = {
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithMembers,
  eventRelation: guestEventRelation,
};

export const EventGuestViewAuthRSVPFlow = Template.bind({});
EventGuestViewAuthRSVPFlow.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithInvitation,
  eventRelation: guestEventRelation,
};

export const EventGuestViewUnAuthRSVPFlow = Template.bind({});
EventGuestViewUnAuthRSVPFlow.args = {
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
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
  event: EventWithMembers,
  eventRelation: guestEventRelation,
};

export const EventGuestViewPostRSVP = Template.bind({});
EventGuestViewPostRSVP.args = {
  profile: OwnerProfile,
  deleteEvent: () => {},
  submitRSVP: () => Promise.resolve(),
  event: EventWithMembers,
  eventRelation: guestEventRelation,
};
