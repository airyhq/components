import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Toggle} from '@airyhq/components';

type ToggleProps = React.ComponentProps<typeof Toggle>;

export default {
  title: 'Airy Components/Inputs/Toggle',
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
