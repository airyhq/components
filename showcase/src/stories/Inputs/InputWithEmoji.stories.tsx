import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Input} from '@airyhq/components';

type InputProps = React.ComponentProps<typeof Input>;

export default {
  title: 'Airy Components/Inputs/Input With Emoji',
  component: Input,
  parameters: {
    componentSubtitle: 'An input component displaying an emoji selector.',
  },
} as Meta;

const Template: Story<InputProps> = args => <Input {...args}></Input>;

export const InputWithEmoji = Template.bind({});
InputWithEmoji.args = {
  emoji: true,
  value: 'value',
  label: 'label',
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
