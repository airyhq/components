import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';

import {Dropdown} from '@airyhq/components';
type DropdownProps = React.ComponentProps<typeof Dropdown>;
export default {
  title: 'Airy Component/Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: 'This menu provides multiple options for the user to choose from',
  },
  argTypes: {
    options: {control: {type: 'select', options: ['Dropdown', 'Option A', 'Option B', 'Option C', 'Option D']}},
  },
} as Meta;

const Template: Story<DropdownProps> = args => {
  const [dropdownOption, setDropdownOption] = useState('Dropdown');

  return (
    <>
      <Dropdown
        variant="default"
        options={['Dropdown', 'Option A', 'Option B', 'Option C', 'Option D']}
        onClick={(item: string) => {
          setDropdownOption(item);
        }}
        text={dropdownOption}></Dropdown>
    </>
  );
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  options: 'Option A',
};
