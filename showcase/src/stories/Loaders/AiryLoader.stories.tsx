import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {AiryLoader} from '@airyhq/components';

type AiryLoaderProps = React.ComponentProps<typeof AiryLoader>;

export default {
  title: 'Airy Component/ Loaders',
  component: AiryLoader,
  parameters: {
    componentSubtitle: '',
  },
} as Meta;

const Template: Story<AiryLoaderProps> = () => <AiryLoader />;

export const AiryLogo = Template.bind({});

AiryLogo.args = {};
