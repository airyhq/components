import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {LinkButton} from '@airyhq/components';

type LinkButtonProps = React.ComponentProps<typeof LinkButton>;

export default {
  title: 'Airy Component/Buttons',
  component: LinkButton,
  parameters: {
    componentSubtitle: 'A button that looks like a link.',
  },
} as Meta;

const Template: Story<LinkButtonProps> = args => <LinkButton {...args}>Click Me</LinkButton>;
export const LinkButtons = Template.bind({});
LinkButtons.args = {
  onClick: () => alert('Button Pressed'),
};
