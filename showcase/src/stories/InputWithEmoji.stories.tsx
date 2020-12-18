import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Input} from '@airyhq/components';

type InputProps = React.ComponentProps<typeof Input>;

export default {
  title: 'Example/Inputs',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => <Input {...args}></Input>;

export const InputWithEmoji = Template.bind({});
InputWithEmoji.args = {
  emoji: true,
  label: 'label',
  placeholder: 'Placeholder',
  name: 'newLabel',
  type: 'text',
  value: 'value',
};
