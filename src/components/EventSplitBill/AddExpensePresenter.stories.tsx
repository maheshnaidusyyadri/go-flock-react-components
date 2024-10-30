import { StoryFn } from "@storybook/react";
import AddExpensePresenter from "./AddExpensePresenter";
import { EventAddExpenseProps, Event, Transaction } from "@goflock/types";
import ProfileIcon from "../../images/profile.png";
import EventDp from "../../images/event_DP.png";

// Mock data for the story
const mockEvent: Event = {
  id: "event123",
  name: "Company Retreat",
  type: "birthday",
  description: "Annual company retreat",
  location: { name: "Beach Resort" },
  time: { startDate: new Date(), startTime: "10:00 AM" },
  visibility: "private",
  members: [
    { id: "m1", name: "John Doe", phoneNumber: "1234567890" },
    { id: "m2", name: "Jane Smith", phoneNumber: "0987654321" },
  ],
  invitationCard: {
    id: "card1",
    cardType: "image",
    url: EventDp,
    configuration: "",
    shared: false,
  },
  settings: {
    shareMedia: true,
    splitBills: true,
    enableChats: true,
    allowCheckList: false,
    currency: "USD",
    eventVisibility: "private",
  },
  checkListQuestions: [],
  checkListResponses: [],
  media: [],
  transactions: [],
  deleted: false,
  owner: "",
  hostedBy: "",
  memberInvitationContactReference: [],
};

const transaction: Transaction = {
  id: "txn1",
  eventId: mockEvent.id,
  description: "Dinner expenses",
  amount: 150,
  date: new Date().toISOString(),
  paidUserId: "XX",
  splitAmongUserIds: ["m1", "m2"],
  deleted: false,
};

// Mock functions for interactions
const mockAddTransaction = async (): Promise<Transaction> => {
  console.log("Transaction added");
  return transaction;
};
const mockUpdateTransaction = async (): Promise<Transaction> => {
  console.log("Transaction updated");
  return transaction;
};

// Mock props
const mockProps: EventAddExpenseProps = {
  event: mockEvent,
  addTransaction: mockAddTransaction,
  updateTransaction: mockUpdateTransaction,
  profile: {
    id: "",
    prefName: "",
    isIntroShown: false,
    pictureUrl: "",
    preferences: {},
  },
  deviceContext: {
    model: "",
    platform: "",
    uuid: "",
    operatingSystem: "",
    osVersion: "",
    manufacturer: "",
  },
};

// Story definition
export default {
  title: "GoFlock/Presenters/AddExpensePresenter",
  component: AddExpensePresenter,
  parameters: {
    layout: "fullscreen",
  },
};

// Template for the component
const Template: StoryFn<EventAddExpenseProps> = (args) => (
  <AddExpensePresenter {...args} />
);

// Story with a few members pre-selected for expense splitting
export const AddExpense = Template.bind({});
AddExpense.args = {
  ...mockProps,
  event: {
    ...mockEvent,
    members: [
      {
        id: "m1",
        name: "John Doe",
        phoneNumber: "1234567890",
        profileImg: ProfileIcon,
      },
      {
        id: "m2",
        name: "Jane Smith",
        phoneNumber: "0987654321",
        profileImg: ProfileIcon,
      },
    ],
  },
};
