import { StoryFn } from "@storybook/react";
import OnboardingPresenter from "./OnboardingPresenter"; // Adjust the import path based on your project structure
import {
    
  OnboardingProps
  
} from "@goflock/types/src/index";

export default {
  title: "GoFlock/Presenters/Onboarding",
  component: OnboardingPresenter,
};

const Template: StoryFn<OnboardingProps> = (args) => (
  <OnboardingPresenter {...args} />
);

export const Default = Template.bind({});
Default.args = {
   
    
};

 

 
