import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {ErrorNotice} from '@airyhq/components';

type ErrorNoticeProps = React.ComponentProps<typeof ErrorNotice>;

export default {
  title: 'Airy Component/Alerts',
  component: ErrorNotice,
} as Meta;

const Template: Story<ErrorNoticeProps> = args => <ErrorNotice {...args}>{args.children}</ErrorNotice>;

export const ErrorNoticeError = Template.bind({});
ErrorNoticeError.args = {
  children: 'This in an error message',
  theme: 'error',
};
