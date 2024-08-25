import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "GoFlock/Sample/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
  onClick: () => alert("Primary Button Clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  primary: false,
  onClick: () => alert("Secondary Button Clicked"),
};

export const Teritiary = Template.bind({});
Teritiary.args = {
  label: "Teritiary Button",
  onClick: () => alert("Teritiary Button Clicked"),
};
