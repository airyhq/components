import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {AiryLoader} from '@airyhq/components';

type AiryLoaderProps = React.ComponentProps<typeof AiryLoader>;

export default {
  title: 'Airy Components/Loaders/AiryLoader',
  component: AiryLoader,
  parameters: {
    componentSubtitle: 'A small animation with an animated airy logo.',
  },
} as Meta;

const Template: Story<AiryLoaderProps> = () => <AiryLoader />;

export const AiryLogo = Template.bind({});
