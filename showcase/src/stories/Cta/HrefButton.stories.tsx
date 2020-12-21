import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {Meta, Story} from '@storybook/react/types-6-0';
import './hrefbutton.css';
import {HrefButton} from '@airyhq/components';

type HrefButtonProps = React.ComponentProps<typeof HrefButton>;

export default {
  title: 'Airy Components/CTA/Href Button',
  component: HrefButton,
  parameters: {
    componentSubtitle: 'A CTA button with a link that enables users to navigate within the application.',
    actions: {
      handles: ['click'],
    },
  },
} as Meta;

const Template: Story<HrefButtonProps> = args => {
  return (
    <>
      <BrowserRouter>
        <Link to={args.href}>
          <div className="button">
            <span className="buttonLabel">{args.children}</span>
          </div>
        </Link>
      </BrowserRouter>
    </>
  );
};

export const HrefButtonComponent = Template.bind({});
HrefButtonComponent.args = {
  children: 'this is an Href Button',
  href: '/href-path',
};
