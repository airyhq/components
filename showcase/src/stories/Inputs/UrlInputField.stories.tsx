import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {UrlInputField} from '@airyhq/components';

type UrlInputFieldProps = React.ComponentProps<typeof UrlInputField>;

export default {
  title: 'Airy Components/Inputs/URL Input',
  component: UrlInputField,
  parameters: {
    componentSubtitle: `A modified input field that accepts URLs. It also
    tries to add "http://" if the user did not enter it.`,
    actions: {
      handles: ['change'],
    },
  },
  argTypes: {
    type: {control: {type: 'select', options: ['url']}},
    fontClass: {control: {type: 'select', options: ['font-base', 'font-s', 'font-m', 'font-l', 'font-xl', 'font-xxl']}},
    inputmode: {
      control: {type: 'select', options: ['text', 'none', 'tel', 'url', 'email', 'numeric', 'decimal', 'search']},
    },
  },
} as Meta;

const Template: Story<UrlInputFieldProps> = args => <UrlInputField {...args}></UrlInputField>;

export const UrlInputFieldInput = Template.bind({});
UrlInputFieldInput.args = {
  value: 'http://airy.co',
  type: 'url',
  label: 'label',
  hideLabel: false,
  name: 'name',
  checked: true,
  placeholder: 'placeholder',
  hint: 'hint',
  height: 48,
  inputmode: 'none',
  minLength: 5,
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
