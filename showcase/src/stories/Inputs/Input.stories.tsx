import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Input} from '@airyhq/components';

type InputProps = React.ComponentProps<typeof Input>;

export default {
  title: 'Airy Components/Inputs',
  component: Input,
  parameters: {
    componentSubtitle: 'An input component with validation. It can also show the maximum number of characters left.',
    actions: {
      handles: ['oninput'],
    },
  },
  argTypes: {
    label: {control: 'text'},
    type: {control: {type: 'select', options: ['text', 'email', 'password']}},
    fontClass: {control: {type: 'select', options: ['font-base', 'font-s', 'font-m', 'font-l', 'font-xl', 'font-xxl']}},
    inputmode: {
      control: {type: 'select', options: ['text', 'none', 'tel', 'url', 'email', 'numeric', 'decimal', 'search']},
    },
  },
} as Meta;

const Template: Story<InputProps> = args => <Input {...args}></Input>;
export const InputComponent = Template.bind({});
InputComponent.args = {
  label: 'label',
  value: 'value',
  hideLabel: false,
  name: 'name',
  checked: true,
  type: 'text',
  placeholder: 'placeholder',
  hint: 'hint',
  height: 48,
  inputmode: 'none',
  minLength: 0,
  maxLength: 12,
  showErrors: true,
  autoFocus: false,
  required: true,
  autoComplete: 'on',
  disabled: true,
  pattern: '[A-Za-z]{3}',
  fontClass: 'font-l',
  showCounter: true,
};
