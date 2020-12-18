import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import '@airyhq/components/dist/main.css';
import {Button, SettingsModal} from '@airyhq/components';

type SettingsModalProps = React.ComponentProps<typeof SettingsModal>;

export default {
  title: 'Example/Alerts',
  component: SettingsModal,
} as Meta;

const Template: Story<SettingsModalProps> = args => {
  const [showModalPopUp, setShowModalPopUp] = useState(false);
  let modal;

  if (showModalPopUp) {
    modal = (
      <SettingsModal
        style={{maxWidth: '420px'}}
        title={args.title}
        close={() => setShowModalPopUp(false)}></SettingsModal>
    );
  } else {
    modal = '';
  }

  return (
    <>
      {modal}
      <Button styleVariant="outline-big" type="submit" onClick={() => setShowModalPopUp(true)}>
        Show Error Settings Modal
      </Button>
    </>
  );
};

export const ErrorSettingsModal = Template.bind({});
ErrorSettingsModal.args = {
  title: 'Error Settings Modal',
};
