import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

//import '@airyhq/components/dist/main.css';
import '@airyhq/components/dist/main.css';
import {ErrorNotice} from '@airyhq/components';

type ErrorNoticeProps = React.ComponentProps<typeof ErrorNotice>;

export default {
  title: 'Example/Alerts',
  component: ErrorNotice,
} as Meta;

const Template: Story<ErrorNoticeProps> = args => <ErrorNotice {...args}>{args.children}</ErrorNotice>;

export const ErrorNoticeWarning = Template.bind({});
ErrorNoticeWarning.args = {
  children: 'This in an error message',
  theme: 'warning',
};
