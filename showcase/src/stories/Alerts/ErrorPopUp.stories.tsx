import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Button, ErrorPopUp} from '@airyhq/components';

type ErrorPopUpProps = React.ComponentProps<typeof ErrorPopUp>;

export default {
  title: 'Example/Alerts',
  component: ErrorPopUp,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as Meta;

const Template: Story<ErrorPopUpProps> = args => {
  const [showErrorPopUp, setShowErrorPopUp] = useState(false);
  let popUp;

  if (showErrorPopUp) {
    popUp = <ErrorPopUp message={args.message} closeHandler={() => setShowErrorPopUp(false)} />;
  } else {
    popUp = '';
  }

  return (
    <div style={{fontFamily: 'Lato, sans-serif'}}>
      {popUp}
      <Button styleVariant="outline-big" type="submit" onClick={() => setShowErrorPopUp(true)}>
        Show Error PopUp
      </Button>
    </div>
  );
};

export const ErrorPopUpAlert = Template.bind({});
ErrorPopUpAlert.args = {
  message: 'This in an error message popup',
};
