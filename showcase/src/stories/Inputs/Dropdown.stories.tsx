import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {Dropdown} from '@airyhq/components';

type DropdownProps = React.ComponentProps<typeof Dropdown>;
export default {
  title: 'Airy Components/Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    componentSubtitle: 'A dropdown input that provides multiple options for the user to choose from.',
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    variant: {control: {type: 'select', options: ['borderless', 'default']}},
  },
} as Meta;

const Template: Story<DropdownProps> = args => {
  const [dropdownOption, setDropdownOption] = useState('Dropdown');

  return (
    <>
      <Dropdown
        variant={args.variant}
        options={args.options}
        onClick={(item: string) => {
          setDropdownOption(item);
        }}
        text={dropdownOption}></Dropdown>
    </>
  );
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  options: ['Dropdown', 'Option A', 'Option B', 'Option C', 'Option D'],
  variant: 'default',
};
