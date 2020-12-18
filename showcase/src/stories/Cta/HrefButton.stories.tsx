import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {HrefButton} from '@airyhq/components';

type HrefButtonProps = React.ComponentProps<typeof HrefButton>;

export default {
  title: 'Airy Component/Buttons',
  component: HrefButton,
} as Meta;

const Template: Story<HrefButtonProps> = args => {
  return (
    <BrowserRouter>
      <HrefButton children="" href="Hello"></HrefButton>
    </BrowserRouter>
  );
};

export const Linkbutton = Template.bind({});
Linkbutton.args = {};

// export const HyperLinkButton: React.VFC<{}> = () => <HrefButton href="#">Button Text</HrefButton>;
