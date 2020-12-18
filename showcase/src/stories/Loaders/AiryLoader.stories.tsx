import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {AiryLoader} from '@airyhq/components';

type AiryLoaderProps = React.ComponentProps<typeof AiryLoader>;

export default {
  title: 'Airy Component/ Loaders',
  component: AiryLoader,
  parameters: {
    componentSubtitle:
      'Airy Loaders: a small animation with an animated airy logo, a small animation with a loading hint for analytics, and a small UI hint demonstrating that some computation/loading is going on.',
  },
} as Meta;

const Template: Story<AiryLoaderProps> = () => <AiryLoader />;

export const AiryLogo = Template.bind({});

AiryLogo.args = {};
