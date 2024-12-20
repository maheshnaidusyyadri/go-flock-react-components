import { StoryFn } from "@storybook/react";
import { ImageEditorProps } from "./ImageEditorPresenter";
import ImageEditorPresenter from "./ImageEditorPresenter";
export default {
  title: "GoFlock/Presenters/ImageEditor",
  component: ImageEditorPresenter,
};

const Template: StoryFn<ImageEditorProps> = (args) => (
  <ImageEditorPresenter {...args} />
);

export const WithNoJsonAndNoBackgroundImage = Template.bind({});
WithNoJsonAndNoBackgroundImage.args = {
  jsonConfig: "{werewr}",
  backgroundImageUlr: "",
  saveImage: (imageAsString: string) => {
    console.log(imageAsString);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  },
  exportJson: (jsonConfig: string) => {
    console.log(jsonConfig);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  },
};

export const WithNoJsonAndABackgroundImage = Template.bind({});
WithNoJsonAndABackgroundImage.args = {
  ...WithNoJsonAndNoBackgroundImage,
  jsonConfig: "{werewr}",
  backgroundImageUlr: "",
};

export const WithJsonAndNoBackgroundImage = Template.bind({});
WithJsonAndNoBackgroundImage.args = {
  ...WithNoJsonAndNoBackgroundImage,
  jsonConfig: "{werewr}",
  backgroundImageUlr: "",
};

export const WithJsonAndBackgroundImage = Template.bind({});
WithJsonAndBackgroundImage.args = {
  ...WithNoJsonAndNoBackgroundImage,
  jsonConfig: "{werewr}",
  backgroundImageUlr: "wrwerewr",
};
