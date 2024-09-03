import { StoryFn } from "@storybook/react";
import IntroductionPresenter from "./IntroductionPresenter";
import { IntroductionProps } from "@goflock/types";
import { IonContent } from "@ionic/react";
import "@ionic/react/css/core.css";

export default {
  title: "GoFlock/Presenters/IntroductionPresenter",
  component: IntroductionPresenter,
};

const Template: StoryFn<IntroductionProps> = (args) => (
  <IonContent>
    <IntroductionPresenter {...args} />
  </IonContent>
);

export const Default = Template.bind({});
Default.args = {
  introCompleted: () => {
    console.log("Introduction completed");
  },
};
