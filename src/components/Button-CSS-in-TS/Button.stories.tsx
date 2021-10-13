import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonCSSinTS as Button } from "./Button-CSS-in-TS";

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
  variants: {
    color: "primary",
  },
  children: "Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variants: {
    color: "outlined",
  },
  children: "Button",
};

export const Normal = Template.bind({});
Normal.args = {
  variants: {
    size: "normal",
  },
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  variants: {
    size: "small",
  },
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variants: {
    iconButton: true,
  },
  children: <div style={{ width: "1.25rem", height: "1.25rem" }}>x</div>,
};

export const WithIconSmall = Template.bind({});
WithIconSmall.args = {
  variants: {
    iconButton: true,
    size: "small",
  },
  children: <div style={{ width: "1.25rem", height: "1.25rem" }}>x</div>,
};
