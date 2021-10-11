import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ButtonSizes,
  ButtonTailwind as Button,
  ButtonVariants,
} from "./Button-Tailwind";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonTailwind',
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
  variant: ButtonVariants.PRIMARY,
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariants.OUTLINE,
  children: 'Button',
};

export const Normal = Template.bind({});
Normal.args = {
  size: ButtonSizes.NORMAL,
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSizes.SMALL,
  children: 'Button',
};
