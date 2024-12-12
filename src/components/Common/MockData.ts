import { DeviceContext, EventMinDetails } from "@goflock/types";
import { Contact, Event, Media, Profile } from "@goflock/types/src/index";
import { EventRelation } from "@goflock/types/src/models/event/EventRelation";

export const BdayEventForGuest: EventMinDetails = {
  id: "Lz0XqK6sLWl7icDEWQ8b",
  name: "Dhanush's 6th birthday",
  hostedBy: "Mahesh & Gouthami",
  type: "birthday",
  visibility: "private",
};

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
  slug: "happy-halloween",
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
  slug: "happy-birthday",
  time: {
    startDate: "2024-11-03T21:41:39.800Z",
    startTime: "2024-11-03T02:12:24.477Z",
  },
  visibility: "private",
  settings: {
    shareMedia: true,
    splitBills: true,
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
  pictureUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q9GlWCAoQHPpOiDOECuYUeXW9MQP7Ddt-Q&s",
  preferences: {
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
  },
  phone: "19999955555",
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
  slug: "annual-family-reunion",
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
      profileImg: "",
      addedByUid: "15CQXsqV4Nb66GLUtLH9nCDYmUR2",
      name: "+12069603841",
      flockId: "15CQXsqV4Nb66GLUtLH9nCDYmUR2",
      rsvp: {
        name: "Manish",
        count: 3,
        adultsCount: 2,
        comment: "",
        kidsCount: 1,
        response: "attending",
      },
      roles: ["member"],
      email: "",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      phoneNumber: "+12069603841",
      id: "15CQXsqV4Nb66GLUtLH9nCDYmUR2",
    },
    {
      roles: ["member"],
      name: "+12063993987",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      rsvp: {
        comment: "",
        response: "attending",
        name: "NAGARJUNA MALEMPATI",
        kidsCount: 1,
        count: 4,
        adultsCount: 3,
      },
      phoneNumber: "+12063993987",
      flockId: "91JtESlm8XMzNSjxKfEy3fKRCIp2",
      email: "",
      addedByUid: "91JtESlm8XMzNSjxKfEy3fKRCIp2",
      profileImg: "",
      id: "91JtESlm8XMzNSjxKfEy3fKRCIp2",
    },
    {
      rsvp: {
        response: "attending",
        count: 4,
        kidsCount: 2,
        adultsCount: 2,
        name: "Girish Vanganuru",
        comment: "",
      },
      email: "",
      roles: ["member"],
      eventId: "wdSG3hkxuaopFpTC6gbp",
      phoneNumber: "+18629551328",
      name: "+18629551328",
      profileImg: "",
      addedByUid: "AyYbCLOgicdBBAjB2Wyj71A38Uj1",
      flockId: "AyYbCLOgicdBBAjB2Wyj71A38Uj1",
      id: "AyYbCLOgicdBBAjB2Wyj71A38Uj1",
    },
    {
      rsvp: {
        comment: "",
        adultsCount: 2,
        kidsCount: 0,
        name: "Jwala",
        count: 2,
        response: "attending",
      },
      roles: ["member"],
      addedByUid: "EcO3bh4byuNy1dk48nGItNNdcD12",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      profileImg: "",
      phoneNumber: "+12069924242",
      email: "",
      name: "+12069924242",
      flockId: "EcO3bh4byuNy1dk48nGItNNdcD12",
      id: "EcO3bh4byuNy1dk48nGItNNdcD12",
    },
    {
      flockId: "GBWPlzVwyke0Okda7ZFg2clojkV2",
      profileImg: "",
      addedByUid: "GBWPlzVwyke0Okda7ZFg2clojkV2",
      phoneNumber: "+12064884199",
      rsvp: {
        name: "Raghavender Samala",
        comment: "",
        count: 0,
        response: "not-attending",
        kidsCount: 0,
        adultsCount: 0,
      },
      roles: ["member"],
      email: "",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      name: "+12064884199",
      id: "GBWPlzVwyke0Okda7ZFg2clojkV2",
    },
    {
      flockId: "Ljh5SzsMnDV6PXnTHq7uNioRsOY2",
      name: "+19255486922",
      profileImg: "",
      roles: ["member"],
      email: "",
      addedByUid: "Ljh5SzsMnDV6PXnTHq7uNioRsOY2",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      phoneNumber: "+19255486922",
      rsvp: {
        comment: "",
        response: "attending",
        count: 3,
        adultsCount: 2,
        name: "Swaroop",
        kidsCount: 1,
      },
      id: "Ljh5SzsMnDV6PXnTHq7uNioRsOY2",
    },
    {
      eventId: "wdSG3hkxuaopFpTC6gbp",
      name: "You",
      roles: ["owner"],
      id: "MxTJfILWLZMHpPsQJ2QBPTeDq5Q2",
      addedByUid: "MxTJfILWLZMHpPsQJ2QBPTeDq5Q2",
    },
    {
      email: "",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      flockId: "N3tykTUVMRfxnyA1LOZ0e9xhiN93",
      addedByUid: "N3tykTUVMRfxnyA1LOZ0e9xhiN93",
      profileImg: "",
      rsvp: {
        count: 5,
        response: "attending",
        adultsCount: 3,
        kidsCount: 2,
        name: "",
        comment: "",
      },
      phoneNumber: "+14134892624",
      roles: ["member"],
      name: "Divya Daggubati",
      id: "N3tykTUVMRfxnyA1LOZ0e9xhiN93",
    },
    {
      flockId: "RbbTNYaRVjb2k4hJxxaAro7wFKd2",
      rsvp: {
        adultsCount: 2,
        kidsCount: 2,
        count: 4,
        comment: "",
        name: "",
        response: "attending",
      },
      roles: ["member"],
      addedByUid: "RbbTNYaRVjb2k4hJxxaAro7wFKd2",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      profileImg: "",
      name: "Bharath Gourneni",
      email: "",
      phoneNumber: "+14256339189",
      id: "RbbTNYaRVjb2k4hJxxaAro7wFKd2",
    },
    {
      flockId: "ShcezX0yB5Wq4GOTsfha1g74AU22",
      addedByUid: "ShcezX0yB5Wq4GOTsfha1g74AU22",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      rsvp: {
        count: 1,
        name: "Sajal Karmakar",
        comment: "",
        response: "attending",
        kidsCount: 0,
        adultsCount: 1,
      },
      profileImg: "",
      phoneNumber: "+8801741260998",
      name: "+8801741260998",
      roles: ["member"],
      email: "",
      id: "ShcezX0yB5Wq4GOTsfha1g74AU22",
    },
    {
      name: "+12066173687",
      roles: ["member"],
      flockId: "Tajcb8VdIQPUQJ1PfT0lfrCJRVz1",
      phoneNumber: "+12066173687",
      addedByUid: "Tajcb8VdIQPUQJ1PfT0lfrCJRVz1",
      email: "",
      rsvp: {
        comment: "",
        count: 4,
        name: "Kapil D",
        kidsCount: 2,
        response: "attending",
        adultsCount: 2,
      },
      profileImg: "",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      id: "Tajcb8VdIQPUQJ1PfT0lfrCJRVz1",
    },
    {
      rsvp: {
        response: "attending",
        comment: "",
        count: 3,
        adultsCount: 3,
        kidsCount: 0,
        name: "Harish Vadlamudi",
      },
      email: "",
      roles: ["member"],
      profileImg: "",
      addedByUid: "ru0Z0NROynfERLamjLw0SME1Or03",
      phoneNumber: "+13373223608",
      name: "+13373223608",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      flockId: "ru0Z0NROynfERLamjLw0SME1Or03",
      id: "ru0Z0NROynfERLamjLw0SME1Or03",
    },
    {
      phoneNumber: "+15104586155",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      addedByUid: "sXSnpzIEFaaEYDL5H2axQx6UHfl1",
      roles: ["member"],
      name: "+15104586155",
      flockId: "sXSnpzIEFaaEYDL5H2axQx6UHfl1",
      rsvp: {
        name: "Harshitha Vaas",
        adultsCount: 1,
        response: "attending",
        comment: "",
        count: 2,
        kidsCount: 1,
      },
      profileImg: "",
      email: "",
      id: "sXSnpzIEFaaEYDL5H2axQx6UHfl1",
    },
    {
      roles: ["member", "admin"],
      addedByUid: "wrLD86ALI7Rk85yfLxylfApPiGh1",
      flockId: "wrLD86ALI7Rk85yfLxylfApPiGh1",
      name: "Gouthami",
      email: "",
      eventId: "wdSG3hkxuaopFpTC6gbp",
      phoneNumber: "+12067243352",
      profileImg: "",
      rsvp: {
        name: "",
        count: 3,
        adultsCount: 2,
        kidsCount: 1,
        comment: "",
        response: "attending",
      },
      id: "wrLD86ALI7Rk85yfLxylfApPiGh1",
    },
  ],
  counters: {
    attendingRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
    maybeRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
    declinedRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
    totalRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
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
      addedByUserId: "",
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
      addedByUserId: "",
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
      addedByUserId: "",
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
  slug: "annual-family-reunion",
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
      roles: ["owner"],
      notificationCount: 10,
    },
    {
      id: "admin_002",
      eventId: "event_12345",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      roles: ["member"],
      notificationCount: 5,
    },
    {
      id: "admin_003",
      eventId: "event_12345",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      roles: ["admin"],
      notificationCount: 6,
    },
    {
      id: "admin_004",
      eventId: "event_12345",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      roles: ["admin"],
      notificationCount: 7,
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
  counters: {
    attendingRSVP: {
      total: 9,
      adults: 5,
      kids: 4,
    },
    maybeRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
    declinedRSVP: {
      total: 8,
      adults: 4,
      kids: 4,
    },
    totalRSVP: {
      total: 10,
      adults: 6,
      kids: 4,
    },
  },
};

export const EventWithInvitation: Event = {
  ...EventWithMembers,
  id: "event_54321",
  invitationCards: [
    {
      id: "card_001",
      downloadUrl: "https://picsum.photos/200/300",
      uploadedBy: "",
      eventId: "",
      type: "",
      path: "",
      createdAt: "",
      isDeleted: false,
    },
  ],
};

export const EventWithTransactions: Event = {
  ...EventWithMembers,
  id: "event_543210",
  invitationCards: [],
  expenseSummary: [
    {
      userId: "admin_001",
      amount: 10,
      currency: "USD",
      name: "David Morrell",
    },
    {
      userId: "member_001",
      amount: -10,
      currency: "USD",
      name: "David",
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
      addedByUserId: "member_001",
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
      addedByUserId: "member_001",
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
      addedByUserId: "member_001",
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

export const unAuthEventRelation: EventRelation = {
  roles: [],
  visitType: "unauthorized",
};

export const rsvpGuestEventRelation: EventRelation = {
  roles: ["member"],
  visitType: "member",
  rsvp: {
    response: "attending",
    count: 3,
    comment: "",
    kidsCount: 2,
    adultsCount: 1,
  },
};

export const rsvpNotAttendingGuestEventRelation: EventRelation = {
  roles: ["member"],
  visitType: "member",
  rsvp: {
    response: "not-attending",
    count: 3,
    comment: "",
    kidsCount: 2,
    adultsCount: 1,
  },
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
      width: 1080,
      height: 720,
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
      width: 1080,
      height: 1620,
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
      width: 1080,
      height: 607,
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
      width: 1080,
      height: 720,
    },
  },
  {
    id: "8fT3MMJseTpFPKup6gaw",
    uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
    eventId: "Lz0XqK6sLWl7icDEWQ8b",
    type: "video",
    path: "media/Lz0XqK6sLWl7icDEWQ8b/8fT3MMJseTpFPKup6gaw/BigBuckBunny.mp4",
    createdAt: "2024-11-03T16:53:22.660Z",
    isDeleted: false,
    thumbnailUrl:
      "https://media.istockphoto.com/id/904475088/vector/stopwatch-icon.jpg?s=612x612&w=0&k=20&c=SM0DKmmrYfJKdGoVrhXuk8cMlvlXpt5ExROqr-QEN4w=",
    downloadUrl:
      "https://www.shutterstock.com/shutterstock/videos/1091631955/preview/stock-footage--countdown-animation-from-to-modern-flat-design-with-animation-on-dark-background-k.mp4",
    metadata: {
      lastModifiedDate: "1728792187163",
      name: "Funny.mp4",
      size: 148916,
      type: "video/mp4",
      uploadedBy: "1Qfxir6gMkFVEOQJmsDWvnwag7hx",
      eventId: "Lz0XqK6sLWl7icDEWQ8b",
      mediaId: "8fT3MMJseTpFPKup6gaw",
      width: 1080,
      height: 720,
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
      width: 1080,
      height: 1620,
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
      width: 1080,
      height: 720,
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
