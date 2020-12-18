import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {UrlInputField} from '@airyhq/components';

type UrlInputFieldProps = React.ComponentProps<typeof UrlInputField>;

export default {
  title: 'Airy Component/URL Input',
  component: UrlInputField,
  parameters: {
    componentSubtitle: `This is a modified input field that accepts URLs. It also
    tries to add "http://" if the user did not enter it.`,
    actions: {
      handles: ['change'],
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
