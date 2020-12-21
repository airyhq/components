import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {AnalyticsLoader} from '@airyhq/components';

type AnalyticsLoaderProps = React.ComponentProps<typeof AnalyticsLoader>;

export default {
  title: 'Airy Components/Loaders/AnalyticsLoader',
  component: AnalyticsLoader,
  parameters: {
    componentSubtitle: 'A small animation with a loading hint for analytics.',
  },
} as Meta;

const Template: Story<AnalyticsLoaderProps> = () => <AnalyticsLoader />;

export const AnalyticsLoading = Template.bind({});
