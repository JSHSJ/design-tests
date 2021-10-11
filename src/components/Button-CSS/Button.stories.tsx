import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "../../App.css";
import "../../assets/css/index.scss";

import {
  ButtonCSS as Button,
  ButtonSizeClass,
  ButtonVariantClass,
} from "./Button-CSS";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonCSS',
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
  variant: ButtonVariantClass.PRIMARY,
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariantClass.OUTLINE,
  children: 'Button',
};

export const Normal = Template.bind({});
Normal.args = {
  size: ButtonSizeClass.NORMAL,
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSizeClass.SMALL,
  children: 'Button',
};
