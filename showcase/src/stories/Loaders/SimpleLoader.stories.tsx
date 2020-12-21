import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {SimpleLoader} from '@airyhq/components';

type SimpleLoaderProps = React.ComponentProps<typeof SimpleLoader>;

export default {
  title: 'Airy Components/Loaders/SimpleLoader',
  component: SimpleLoader,
  parameters: {
    componentSubtitle: 'A small UI hint demonstrating that some computation/loading is going on.',
  },
} as Meta;

const Template: Story<SimpleLoaderProps> = () => <SimpleLoader />;

export const SimpleLoading = Template.bind({});
