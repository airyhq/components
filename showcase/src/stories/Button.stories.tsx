import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Button} from '@airyhq/components';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    styleVariant: {control: {type: 'select', options: ['small', 'outline']}},
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>click me</Button>;

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  styleVariant: 'small',
};
