import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  ButtonCSSinTS as Button,
  ButtonSize,
  ButtonVariant,
} from "./Button-CSS-in-TS";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ButtonCSSinTS",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  children: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariant.OUTLINED,
  children: "Button",
};

export const Normal = Template.bind({});
Normal.args = {
  size: ButtonSize.NORMAL,
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.SMALL,
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
