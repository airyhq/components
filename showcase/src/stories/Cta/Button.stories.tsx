import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Button} from '@airyhq/components';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  title: 'Airy Components/CTA/Button Component',
  component: Button,
  parameters: {
    componentSubtitle: 'A Button component.',
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    type: {control: {type: 'select', options: ['submit', 'button', 'reset']}},
    styleVariant: {
      control: {type: 'select', options: ['normal', 'small', 'outline', 'outline-big', 'warning', 'text']},
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}> {args.children}</Button>;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  type: 'submit',
  children: 'click me',
  styleVariant: 'normal',
  disabled: false,
  onClick: () => alert('Button Pressed'),
  tabIndex: 0,
};
