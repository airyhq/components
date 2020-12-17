import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import { LinkButton } from '@airyhq/components';

type LinkButtonProps = React.ComponentProps<typeof LinkButton>;

export default {
  title: 'Example/Link Button',
  component: LinkButton,
  parameters: {
    componentSubtitle: 'A button that looks like a link',
    actions: {
      handles: ['click', 'click .btn'],
    },
  },
} as Meta;

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} >click me</LinkButton>;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
};


