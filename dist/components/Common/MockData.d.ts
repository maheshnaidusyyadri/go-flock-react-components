import { DeviceContext } from '@goflock/types';
import { Contact, Event, Media, Profile } from '@goflock/types/src/index';
import { EventRelation } from '@goflock/types/src/models/event/EventRelation';
export declare const HalloweenEvent: Event;
export declare const BirthdayEvent: Event;
export declare const OwnerProfile: Profile;
export declare const CohostProfile: Profile;
export declare const GuestProfile: Profile;
export declare const NewProfileWithNoName: Profile;
export declare const EventWithMembers: Event;
export declare const EventWithOneMember: Event;
export declare const EventWithInvitation: Event;
export declare const EventWithTransactions: Event;
export declare const ownerEventRelation: EventRelation;
export declare const cohostEventRelation: EventRelation;
export declare const guestEventRelation: EventRelation;
export declare const rsvpGuestEventRelation: EventRelation;
export declare const ImagesMedia: Media[];
export declare const ImageAndVideosMixedMedia: Media[];
export declare const IphoneDeviceContext: DeviceContext;
export declare const AndroidDeviceContext: DeviceContext;
export declare const MockContacts: Contact[];