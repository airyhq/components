import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Button} from '@airyhq/components';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Buttons available in Airy components',
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
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
};
