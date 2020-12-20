import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Toggle} from '@airyhq/components';

type ToggleProps = React.ComponentProps<typeof Toggle>;

export default {
  title: 'Airy Component/Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'A toggle input component.',
    actions: {
      handles: ['change'],
    },
  },
  argTypes: {
    value: {control: {type: 'boolean', options: ['true', 'false']}},
  },
} as Meta;

const Template: Story<ToggleProps> = args => <Toggle {...args}></Toggle>;
export const ToggleInput = Template.bind({});
ToggleInput.args = {
  text: 'this is a toggle',
};
