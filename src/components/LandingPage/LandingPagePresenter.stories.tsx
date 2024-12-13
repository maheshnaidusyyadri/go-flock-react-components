import { StoryFn } from "@storybook/react";
import LandingPagePresenter from "./LandingPagePresenter";

import { withRouter } from "storybook-addon-remix-react-router";

export default {
  title: "GoFlock/Presenters/LandingPagePresenter",
  component: LandingPagePresenter,
  decorators: [withRouter],
};

const Template: StoryFn = () => <LandingPagePresenter />;
export const Landing = Template.bind({});
