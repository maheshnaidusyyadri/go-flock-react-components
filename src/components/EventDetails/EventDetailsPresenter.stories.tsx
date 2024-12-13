import { StoryFn } from "@storybook/react";
import EventDetailsPresenter from "./EventDetailsPresenter";
import { EventProps } from "@goflock/types/src/index";
import {
  cohostEventRelation,
  EventWithInvitation,
  EventWithMembers,
  EventWithOneMember,
  guestEventRelation,
  IphoneDeviceContext,
  ownerEventRelation,
  OwnerProfile,
  rsvpGuestEventRelation,
} from "../Common/MockData";
import { action } from "@storybook/addon-actions";
import { withRouter } from "storybook-addon-remix-react-router";
import EventDetailSkeleton from "./EventDetailsSkeleton";

export default {
  title: "GoFlock/Presenters/EventDetailsPresenter",
  component: EventDetailsPresenter,
  decorators: [withRouter],
};

const Template: StoryFn<EventProps> = (args) => (
  <EventDetailsPresenter {...args} />
);

export const PublicEventHostViewWithInvitation = Template.bind({});
PublicEventHostViewWithInvitation.args = {
  profile: OwnerProfile,
  deviceContext: IphoneDeviceContext,
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
  submitRSVP: (eventId, rsvp) => {
    action("submitRSVP")(`Event ID: ${eventId}`, rsvp);
    return Promise.resolve(true);
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

export const PublicEventHostViewWithoutInvitation = Template.bind({});
PublicEventHostViewWithoutInvitation.args = {
  ...PublicEventHostViewWithInvitation.args,
  event: EventWithMembers,
};

export const PrivateEventHostViewWithInvitation = Template.bind({});
PrivateEventHostViewWithInvitation.args = {
  ...PublicEventHostViewWithInvitation.args,
  event: EventWithInvitation,
};

export const PrivateEventHostViewWithoutInvitation = Template.bind({});
PrivateEventHostViewWithoutInvitation.args = {
  ...PublicEventHostViewWithInvitation.args,
  event: EventWithMembers,
};

export const PrivateEventHostViewWithSingleMember = Template.bind({});
PrivateEventHostViewWithSingleMember.args = {
  ...PublicEventHostViewWithInvitation.args,
  event: EventWithOneMember,
};

export const PrivateEventCoHostViewWithoutInvitation = Template.bind({});
PrivateEventCoHostViewWithoutInvitation.args = {
  ...PublicEventHostViewWithInvitation.args,
  eventRelation: cohostEventRelation,
};

export const EventGuestViewUnAuth = Template.bind({});
EventGuestViewUnAuth.args = {
  ...PublicEventHostViewWithInvitation.args,
  eventRelation: guestEventRelation,
  profile: undefined,
};

export const EventGuestViewAuthRSVPFlow = Template.bind({});
EventGuestViewAuthRSVPFlow.args = {
  ...PublicEventHostViewWithInvitation.args,
  eventRelation: guestEventRelation,
};

export const EventGuestViewUnAuthRSVPFlow = Template.bind({});
EventGuestViewUnAuthRSVPFlow.args = {
  ...PublicEventHostViewWithInvitation.args,
  eventRelation: guestEventRelation,
  profile: undefined,
};

export const EventGuestViewPostRSVP = Template.bind({});
EventGuestViewPostRSVP.args = {
  ...PublicEventHostViewWithInvitation.args,
  eventRelation: rsvpGuestEventRelation,
};

const SkeletonTemplate: StoryFn<EventProps> = (args) => (
  <EventDetailSkeleton {...args} />
);

export const EventDetailsSkeleton = SkeletonTemplate.bind({});
EventDetailsSkeleton.args = {
  profile: OwnerProfile,
  event: EventWithInvitation,
  eventRelation: ownerEventRelation,
};
