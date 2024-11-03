import { StoryFn } from "@storybook/react";
import EventSplitBillPresenter from "./EventExpenseSummaryPresenter";
import { EventExpenseSummaryProps } from "@goflock/types/src/index";
import { EventWithMembers, EventWithTransactions } from "../Common/MockData";
export default {
  title: "GoFlock/Presenters/EventExpenseSummaryPresenter",
  component: EventSplitBillPresenter,
};

const Template: StoryFn<EventExpenseSummaryProps> = (args) => (
  <EventSplitBillPresenter {...args} />
);

export const EventWithTransactionsAndSummary = Template.bind({});
EventWithTransactionsAndSummary.args = {
  event: EventWithTransactions,
  transactions: EventWithTransactions.transactions,
};

export const EventWithNoTransactionsAndSummary = Template.bind({});
EventWithNoTransactionsAndSummary.args = {
  event: EventWithMembers,
};
