import { StoryFn } from "@storybook/react";
import EventSplitBillPresenter from "./EventExpenseSummaryPresenter";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import {
  EventWithMembers,
  EventWithTransactions,
  ownerEventRelation,
} from "../Common/MockData";
import { withRouter } from "storybook-addon-remix-react-router";
export default {
  title: "GoFlock/Presenters/EventExpenseSummaryPresenter",
  component: EventSplitBillPresenter,
  decorators: [withRouter],
};

const Template: StoryFn<EventExpenseSummaryProps> = (args) => (
  <EventSplitBillPresenter {...args} />
);

export const EventWithTransactionsAndSummary = Template.bind({});
EventWithTransactionsAndSummary.args = {
  event: EventWithTransactions,
  eventRelation: ownerEventRelation,
  transactions: EventWithTransactions.transactions,
  expenses: EventWithTransactions.expenseSummary,
};

export const EventWithNoTransactionsAndSummary = Template.bind({});
EventWithNoTransactionsAndSummary.args = {
  ...EventWithTransactionsAndSummary.args,
  event: EventWithMembers,
  transactions: [],
  expenses: [],
};
