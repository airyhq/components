import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {SimpleLoader} from '@airyhq/components';

type SimpleLoaderProps = React.ComponentProps<typeof SimpleLoader>;

export default {
  title: 'Example/ Loaders',
  component: SimpleLoader,
  parameters: {
    componentSubtitle: '',
  },
} as Meta;

const Template: Story<SimpleLoaderProps> = () => <SimpleLoader />;

export const SimpleLoading = Template.bind({});

SimpleLoading.args = {};
