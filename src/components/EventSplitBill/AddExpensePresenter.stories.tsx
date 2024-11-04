import { StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AddExpensePresenter from "./AddExpensePresenter";
import { EventAddExpenseProps, Transaction } from "@goflock/types/src";
import {
  EventWithMembers,
  IphoneDeviceContext,
  OwnerProfile,
} from "../Common/MockData";

// Mock props with actions for addTransaction and updateTransaction
const mockProps: EventAddExpenseProps = {
  profile: OwnerProfile,
  deviceContext: IphoneDeviceContext,
  event: EventWithMembers,
  addTransaction: async (transaction: Transaction) => {
    action("addTransaction")("Transaction added:", transaction);
    return transaction;
  },
  updateTransaction: async (transaction: Transaction) => {
    action("updateTransaction")("Transaction updated:", transaction);
    return transaction;
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
};
