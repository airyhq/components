import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {SearchField} from '@airyhq/components';

type SearchFieldProps = React.ComponentProps<typeof SearchField>;

export default {
  title: 'Airy Components/Inputs/Search Field',
  component: SearchField,
  parameters: {
    componentSubtitle: 'A input field with a search icon in front of it.',
  },
} as Meta;

const Template: Story<SearchFieldProps> = (args: SearchFieldProps) => <SearchField {...args} />;

export const DefaultSearchField = Template.bind({});

DefaultSearchField.args = {
  placeholder: 'Search Stuff',
  value: '',
  autoFocus: true,
};
