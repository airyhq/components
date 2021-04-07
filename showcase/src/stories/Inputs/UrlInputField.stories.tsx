import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {UrlInputField} from '@airyhq/components';

export default {
  title: 'Airy Components/Inputs/URL Input',
  component: UrlInputField,
  parameters: {
    componentSubtitle: `A modified input field that accepts URLs. It checks for correct URLs and adds "http://" to the input value if the user did not enter it.`,
    actions: {
      handles: ['change'],
    },
  },
  argTypes: {
    fontClass: {control: {type: 'select', options: ['font-base', 'font-s', 'font-m', 'font-l', 'font-xl', 'font-xxl']}},
  },
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <UrlInputField
        height={32}
        value={value}
        onChange={e => handleChange(e)}
        placeholder="write a URL here"
        showErrors={true}
        required
      />
    </>
  );
};

export const UrlInputFieldInput = Template.bind({});
