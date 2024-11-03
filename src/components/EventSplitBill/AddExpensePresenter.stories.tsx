import { StoryFn } from "@storybook/react";
import AddExpensePresenter from "./AddExpensePresenter";
import { EventAddExpenseProps, Transaction } from "@goflock/types/src";
import { EventWithMembers } from "../Common/MockData";

const transaction: Transaction = {
  id: "txn1",
  eventId: EventWithMembers.id,
  description: "Dinner expenses",
  amount: 150,
  date: new Date().toISOString(),
  paidUserId: "XX",
  splitAmongUserIds: [
    {
      userId: "m1",
      amount: 125,
      currency: "USD",
    },
    {
      userId: "m2",
      amount: 125,
      currency: "USD",
    },
  ],
  currency: "USD",
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
  event: EventWithMembers,
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
  event: EventWithMembers,
};
