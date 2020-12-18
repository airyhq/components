import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Meta, Story} from '@storybook/react/types-6-0';
import '@airyhq/components/dist/main.css';
import {HrefButton} from '@airyhq/components';

type HrefButtonProps = React.ComponentProps<typeof HrefButton>;

export default {
  title: 'Airy Component/Buttons',
  component: HrefButton,
  parameters: {
    componentSubtitle: 'A link that looks like the CTA Button.',
  },
} as Meta;

const Template: Story<HrefButtonProps> = args => {
  return (
    <>
      <MemoryRouter>
        <HrefButton children="" href="Hello"></HrefButton>
      </MemoryRouter>
    </>
  );
};

export const HrefButtonComponent = Template.bind({});
HrefButtonComponent.args = {
  children: '',
  href: 'hello',
};

// export const HyperLinkButton: React.VFC<{}> = () => <HrefButton href="#">Button Text</HrefButton>;
