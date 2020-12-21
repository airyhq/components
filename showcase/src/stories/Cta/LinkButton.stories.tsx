import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {LinkButton} from '@airyhq/components';

type LinkButtonProps = React.ComponentProps<typeof LinkButton>;

export default {
  title: 'Airy Components/CTA/LinkButton',
  component: LinkButton,
  argTypes: {
    children: {control: 'text'},
  },
  parameters: {
    componentSubtitle: `A button that looks like a link.`,
    actions: {
      handles: ['click'],
    },
  },
} as Meta;

const Template: Story<LinkButtonProps> = args => <LinkButton {...args}>{args.children}</LinkButton>;

export const LinkButtonComponent = Template.bind({});
LinkButtonComponent.args = {
  children: 'click me',
};
