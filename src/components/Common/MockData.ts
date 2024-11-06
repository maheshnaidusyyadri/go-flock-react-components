import { DeviceContext } from "@goflock/types";
import { Contact, Event, Media, Profile } from "@goflock/types/src/index";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";

export const HalloweenEvent: Event = {
  owner: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  name: "halloween",
  type: "other",
  description: "Happy halloween",
  location: {
    name: "Hello! India, 19th Avenue Southeast, Everett, WA, USA",
    lat: 47.89411579999999,
    long: -122.2017895,
  },
  hostedBy: "",
  time: {
    startDate: "2024-11-03T21:41:39.800Z",
    startTime: "2024-11-03T02:12:24.477Z",
  },
  visibility: "private",
  settings: {
    shareMedia: false,
    splitBills: false,
    enableChats: false,
    allowCheckList: false,
    currency: "USD",
    eventVisibility: "private",
  },
  deleted: false,
  createdAt: {
    seconds: 1730580157,
    nanoseconds: 52000000,
  },
  updatedAt: {
    seconds: 1730580157,
    nanoseconds: 52000000,
  },
  memberInvitationContactReference: ["+19876543210"],
  id: "Lz0XqK6sLWl7icDEWQ8b",
  members: [],
  checkListQuestions: [],
  checkListResponses: [],
  media: [],
  transactions: [],
};

export const BirthdayEvent: Event = {
  owner: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  name: "Happy Birthday",
  type: "birthday",
  description: "Birthday invitation",
  location: {
    name: "Hello! India, 19th Avenue Southeast, Everett, WA, USA",
    lat: 47.89411579999999,
    long: -122.2017895,
  },
  hostedBy: "",
  time: {
    startDate: "2024-11-03T21:41:39.800Z",
    startTime: "2024-11-03T02:12:24.477Z",
  },
  visibility: "private",
  settings: {
    shareMedia: false,
    splitBills: false,
    enableChats: false,
    allowCheckList: false,
    currency: "USD",
    eventVisibility: "private",
  },
  deleted: false,
  createdAt: {
    seconds: 1730580157,
    nanoseconds: 52000000,
  },
  updatedAt: {
    seconds: 1730580157,
    nanoseconds: 52000000,
  },
  memberInvitationContactReference: ["+19876543210"],
  id: "Lz0XqK6sLWl7icDEWQ8b",
  members: [],
  checkListQuestions: [],
  checkListResponses: [],
  media: [],
  transactions: [],
};

export const OwnerProfile: Profile = {
  id: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  prefName: "Jane Doe",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
  },
};

export const CohostProfile: Profile = {
  id: "cohost-1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  prefName: "Cohost Doe",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
  },
};

export const GuestProfile: Profile = {
  id: "guest-1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  prefName: "Cohost Doe",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
  },
};

export const NewProfileWithNoName: Profile = {
  id: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
  prefName: "",
  isIntroShown: true,
  pictureUrl: "https://via.placeholder.com/150",
  preferences: {
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
  },
};

export const EventWithMembers: Event = {
  id: "event_12345",
  owner: "user_001",
  name: "Annual Family Reunion",
  type: "reunion",
  hostedBy: "Me & Family",
  memberInvitationContactReference: ["+1234567890", "alice.smith@example.com"],
  description: "An annual gathering of the extended family.",
  location: {
    name: "Grandma's House",
    lat: 40.712776,
    long: -74.005974,
  },
  time: {
    startDate: "2024-12-25T00:00:00Z",
    startTime: "2024-11-03T02:12:24.477Z",
  },
  visibility: "private",
  members: [
    {
      id: "admin_001",
      eventId: "event_12345",
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
    {
      id: "admin_002",
      eventId: "event_12345",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
    },
    {
      id: "member_001",
      eventId: "event_12345",
      name: "Charlie Brown",
      phoneNumber: "+1234567890",
      rsvp: {
        response: "attending",
        count: 2,
      },
    },
    {
      id: "member_002",
      eventId: "event_12345",
      name: "David Clark",
      phoneNumber: "+1987654321",
      rsvp: {
        response: "maybe",
        count: 1,
      },
    },
    {
      id: "member_003",
      eventId: "event_12345",
      name: "Eve Davis",
      email: "eve.davis@example.com",
      rsvp: {
        response: "not-attending",
        count: 1,
      },
    },
    {
      id: "member_004",
      eventId: "event_12345",
      name: "Frank Miller",
      email: "frank.miller@example.com",
      rsvp: {
        response: "attending",
        count: 3,
      },
    },
    {
      id: "member_005",
      eventId: "event_12345",
      name: "Grace Lee",
      email: "grace.lee@example.com",
      rsvp: {
        response: "not-answered",
        count: 0,
      },
    },
  ],
  counters: {
    totalRsvpCount: 4,
    totalAttendingCount: 5,
    totalMaybeCount: 1,
    totalDeclinedCount: 1,
    totalInvitedCount: 7,
    totalAdultsCount: 4,
    totalChildrenCount: 1,
  },
  settings: {
    shareMedia: true,
    splitBills: true,
    enableChats: true,
    allowCheckList: true,
    currency: "USD",
    eventVisibility: "private",
  },
  checkListQuestions: [],
  checkListResponses: [],
  media: [],
  transactions: [
    {
      id: "txn_001",
      eventId: "event_12345",
      paidUserId: "member_001",
      splitAmongUserIds: [
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_003",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Catering service",
      amount: 500,
      date: "2024-12-01T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_002",
      eventId: "event_12345",
      paidUserId: "admin_001",
      splitAmongUserIds: [
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_003",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Venue booking",
      amount: 300,
      date: "2024-11-25T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_003",
      eventId: "event_12345",
      paidUserId: "member_003",
      splitAmongUserIds: [
        {
          userId: "member_004",
          amount: 75,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 75,
          currency: "USD",
        },
      ],
      description: "Decorations",
      amount: 150,
      date: "2024-12-20T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
  ],
  deleted: false,
};

export const EventWithOneMember: Event = {
  id: "event_12345",
  owner: "user_001",
  name: "Annual Family Reunion",
  type: "reunion",
  hostedBy: "Me & Family",
  memberInvitationContactReference: ["+1234567890", "alice.smith@example.com"],
  description: "An annual gathering of the extended family.",
  location: {
    name: "Grandma's House",
    lat: 40.712776,
    long: -74.005974,
  },
  time: {
    startDate: "2024-12-25T00:00:00Z",
    startTime: "2024-11-03T02:12:24.477Z",
  },
  visibility: "private",
  members: [
    {
      id: "admin_001",
      eventId: "event_12345",
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
  ],
  settings: {
    shareMedia: true,
    splitBills: true,
    enableChats: true,
    allowCheckList: true,
    currency: "USD",
    eventVisibility: "private",
  },
  checkListQuestions: [],
  checkListResponses: [],
  media: [],
  deleted: false,
  transactions: [],
};

export const EventWithInvitation: Event = {
  ...EventWithMembers,
  id: "event_54321",
  invitationCard: {
    id: "card_001",
    cardType: "image",
    url: "https://picsum.photos/200/300",
    configuration: "default",
    shared: true,
  },
};

export const EventWithTransactions: Event = {
  ...EventWithMembers,
  id: "event_543210",
  invitationCard: {
    id: "card_001",
    cardType: "image",
    url: "https://picsum.photos/200/300",
    configuration: "default",
    shared: true,
  },
  expenseSummary: [
    {
      userId: "admin_001",
      amount: 10,
      currency: "USD",
    },
    {
      userId: "member_001",
      amount: -10,
      currency: "USD",
    },
  ],
  transactions: [
    {
      id: "txn_001",
      eventId: "event_12345",
      paidUserId: "member_001",
      splitAmongUserIds: [
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_003",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Catering service",
      amount: 500,
      date: "2024-12-01T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_002",
      eventId: "event_12345",
      paidUserId: "admin_001",
      splitAmongUserIds: [
        {
          userId: "admin_002",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_001",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_002",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Venue booking",
      amount: 300,
      date: "2024-11-25T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
    {
      id: "txn_003",
      eventId: "event_12345",
      paidUserId: "member_003",
      splitAmongUserIds: [
        {
          userId: "member_004",
          amount: 125,
          currency: "USD",
        },
        {
          userId: "member_005",
          amount: 125,
          currency: "USD",
        },
      ],
      description: "Decorations",
      amount: 150,
      date: "2024-12-20T00:00:00Z",
      deleted: false,
      currency: "USD",
    },
  ],
};

export const ownerEventRelation: EventRelation = {
  roles: ["owner"],
  visitType: "owner",
};

export const cohostEventRelation: EventRelation = {
  roles: ["admin"],
  visitType: "admin",
};

export const guestEventRelation: EventRelation = {
  roles: [],
  visitType: "visitor",
};

export const rsvpGuestEventRelation: EventRelation = {
  roles: ["member"],
  visitType: "member",
};

export const ImagesMedia: Media[] = [
  {
    id: "8fT3MMJseTpFPKup6gaw",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "image/png",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/8fT3MMJseTpFPKup6gaw/envelopeBody.png",
    createdAt: "2024-11-03T16:53:22.660Z",
    isDeleted: false,
    downloadUrl: "https://picsum.photos/200/200",
    metadata: {
      lastModifiedDate: "1728792187163",
      name: "envelopeBody.png",
      size: 148916,
      type: "image/png",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "8fT3MMJseTpFPKup6gaw",
    },
  },
  {
    id: "mCtamZsxf7DSpOd1PfnM",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "image/png",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/mCtamZsxf7DSpOd1PfnM/R2A_Diwali_Poster_2024.png",
    createdAt: "2024-11-03T16:51:45.041Z",
    isDeleted: false,
    downloadUrl: "https://picsum.photos/300/300",
    metadata: {
      lastModifiedDate: "1730175441482",
      name: "R2A_Diwali_Poster_2024.png",
      size: 5462063,
      type: "image/png",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "mCtamZsxf7DSpOd1PfnM",
    },
  },
  {
    id: "oovT3ZHhfVlnGG1TLcmy",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "image/png",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/oovT3ZHhfVlnGG1TLcmy/envelopeFlap.png",
    createdAt: "2024-11-03T17:09:34.672Z",
    isDeleted: false,
    downloadUrl: "https://picsum.photos/400/300",
    metadata: {
      lastModifiedDate: "1728792201801",
      name: "envelopeFlap.png",
      size: 148916,
      type: "image/png",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "oovT3ZHhfVlnGG1TLcmy",
    },
  },
];

export const ImageAndVideosMixedMedia: Media[] = [
  {
    id: "8fT3MMJseTpFPKup6gaw",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "video",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/8fT3MMJseTpFPKup6gaw/BigBuckBunny.mp4",
    createdAt: "2024-11-03T16:53:22.660Z",
    isDeleted: false,
    thumbnailUrl:
      "https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg",
    downloadUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    metadata: {
      lastModifiedDate: "1728792187163",
      name: "BigBuckBunny.mp4",
      size: 148916,
      type: "video/mp4",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "8fT3MMJseTpFPKup6gaw",
    },
  },
  {
    id: "mCtamZsxf7DSpOd1PfnM",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "image/png",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/mCtamZsxf7DSpOd1PfnM/R2A_Diwali_Poster_2024.png",
    createdAt: "2024-11-03T16:51:45.041Z",
    isDeleted: false,
    downloadUrl: "https://picsum.photos/400/300",
    metadata: {
      lastModifiedDate: "1730175441482",
      name: "R2A_Diwali_Poster_2024.png",
      size: 5462063,
      type: "image/png",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "mCtamZsxf7DSpOd1PfnM",
    },
  },
  {
    id: "oovT3ZHhfVlnGG1TLcmy",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "image/png",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/oovT3ZHhfVlnGG1TLcmy/envelopeFlap.png",
    createdAt: "2024-11-03T17:09:34.672Z",
    isDeleted: false,
    downloadUrl: "https://picsum.photos/400/400",
    metadata: {
      lastModifiedDate: "1728792201801",
      name: "envelopeFlap.png",
      size: 148916,
      type: "image/png",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "oovT3ZHhfVlnGG1TLcmy",
    },
  },
];

export const IphoneDeviceContext: DeviceContext = {
  model: "iPhone 13",
  platform: "iOS",
  uuid: "unique-uuid-for-iphone-13", // Typically a unique identifier
  operatingSystem: "iOS",
  osVersion: "15.0", // Replace with the specific OS version if needed
  manufacturer: "Apple",
};

export const AndroidDeviceContext: DeviceContext = {
  model: "Pixel 6",
  platform: "Android",
  uuid: "123e4567-e89b-12d3-a456-426614174000",
  operatingSystem: "Android",
  osVersion: "12.0",
  manufacturer: "Google",
};

export const MockContacts: Contact[] = [
  {
    name: "Eve Adams",
    phone: "+1555-7890",
    email: "eve.adams@example.com",
  },
  {
    name: "Frank Zappa",
    phone: "+1555-6789",
  },
  {
    name: "Gina Torres",
    phone: "+1555-3456",
    email: "gina.torres@example.com",
  },
];
