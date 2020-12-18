import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {TextArea} from '@airyhq/components';

type TextAreaProps = React.ComponentProps<typeof TextArea>;

export default {
  title: 'Airy Component/ Text Area',
  component: TextArea,
  parameters: {
    componentSubtitle: 'This input allows lines of text to be entered',
  },
  argTypes: {
    label: {control: 'text'},
  },
} as Meta;

const Template: Story<TextAreaProps> = (args: TextAreaProps) => <TextArea {...args}></TextArea>;

export const DefaultTextArea = Template.bind({});

DefaultTextArea.args = {
  value: 'Hello From Airy',
  label: 'Audience',
  placeholder: 'Set your audience here',
  name: 'audience',
  type: 'text',
  maxLength: 100,
  required: true,
  minLength: 1,
  height: 42,
  showCounter: true,
  hideLabel: false,
  checked: true,
};
