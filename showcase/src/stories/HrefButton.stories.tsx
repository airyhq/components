import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {HrefButton} from '@airyhq/components';

export default {
  title: 'Example/Href Button',
  component: HrefButton,
} as Meta;

export const HyperLinkButton: React.VFC<{}> = () => <HrefButton href="#">Button Text</HrefButton>;
