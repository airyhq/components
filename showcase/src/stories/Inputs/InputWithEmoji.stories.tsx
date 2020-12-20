import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Input} from '@airyhq/components';

type InputProps = React.ComponentProps<typeof Input>;

export default {
  title: 'Airy Component/Inputs',
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
