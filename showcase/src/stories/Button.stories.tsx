import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import { Button } from '@airyhq/components';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} >click me</Button>;

export const Small = Template.bind({});
Small.args = {
  styleVariant: 'small',
  type: 'submit',
};

export const Normal = Template.bind({});
Normal.args = {
  styleVariant: 'normal',
  type: 'submit',
};
