import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {SearchField} from '@airyhq/components';

type SearchFieldProps = React.ComponentProps<typeof SearchField>;

export default {
  title: 'Example/ Search Field',
  component: SearchField,
  parameters: {
    componentSubtitle: 'This input can be used to search for information on the page displayed',
  },
} as Meta;

const Template: Story<SearchFieldProps> = (args: SearchFieldProps) => <SearchField {...args} />;

export const DefaultSearchField = Template.bind({});

DefaultSearchField.args = {
  placeholder: 'Search Stuff',
  value: '',
  autoFocus: true,
};
