import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Button} from '@airyhq/components';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  title: 'Airy Component/Buttons',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons available in Airy components',
  },
  argTypes: {
    type: {control: {type: 'select', options: ['submit', 'button', 'reset']}},
    styleVariant: {
      control: {type: 'select', options: ['normal', 'small', 'outline', 'outline-big', 'warning', 'text']},
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Click Me</Button>;

export const SubmitButtons = Template.bind({});
SubmitButtons.args = {
  type: 'submit',
  styleVariant: 'normal',
  disabled: false,
  tabIndex: 0,
  onClick: () => alert('Button Pressed'),
};
