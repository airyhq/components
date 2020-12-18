import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {ErrorMessage} from '@airyhq/components';

type ErrorMessageProps = React.ComponentProps<typeof ErrorMessage>;

export default {
  title: 'Example/Alerts',
  component: ErrorMessage,
} as Meta;

const Template: Story<ErrorMessageProps> = args => {
  return (
    <div style={{fontFamily: 'Lato, sans-serif'}}>
      <ErrorMessage {...args}>{args.text}</ErrorMessage>
    </div>
  );
};

export const ErrorMessageAlert = Template.bind({});
ErrorMessageAlert.args = {
  text: 'This in an error message',
};
