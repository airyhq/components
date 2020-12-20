import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {TextArea} from '@airyhq/components';

type TextAreaProps = React.ComponentProps<typeof TextArea>;

export default {
  title: 'Airy Component/Textarea',
  component: TextArea,
  parameters: {
    componentSubtitle: `This is a textarea input component. It accepts the same parameters
    as the Input component and acts the same way with validations.
    The height of the textarea is dependent on it content.`,
  },
  argTypes: {
    label: {control: 'text'},
    inputmode: {
      control: {type: 'select', options: ['text', 'none', 'tel', 'url', 'email', 'numeric', 'decimal', 'search']},
    },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args: TextAreaProps) => <TextArea {...args}></TextArea>;

export const DefaultTextArea = Template.bind({});

DefaultTextArea.args = {
  value: 'Hello From Airy',
  label: 'Audience',
  placeholder: 'Set your audience here',
  inputmode: 'text',
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
