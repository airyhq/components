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

export const InputSecret = Template.bind({});
InputSecret.args = {
  type: 'password',
  label: 'label secret',
  placeholder: 'Placeholder',
  name: 'newInputSecret',
  value: 'value',
};
