import React from 'react';
import { UserButton, UserButtonProps } from './user-button';
import { text } from '@storybook/addon-knobs';

export default {
  component: UserButton,
  title: 'UserButton'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserButtonProps = {
    action(): void {},
    buttonText: text('button text', 'some text')

  };

  return <UserButton {...props} />;
};
