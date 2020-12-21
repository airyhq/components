import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {ErrorMessage} from '@airyhq/components';

type ErrorMessageProps = React.ComponentProps<typeof ErrorMessage>;

export default {
  title: 'Airy Components/Alerts/Error Message',
  component: ErrorMessage,
  parameters: {
    componentSubtitle: 'An error message component.',
  },
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
