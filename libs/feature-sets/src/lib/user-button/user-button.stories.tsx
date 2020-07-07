import React from 'react';
import { UserButton, UserButtonProps } from './user-button';
import { text } from '@storybook/addon-knobs';

export default {
  component: UserButton,
  title: 'UserButton'
};

export const primary = () => {
  const actFn = () => {
    console.log('i did a thing')
  }
  /* eslint-disable-next-line */
  const props: UserButtonProps = {
    action: actFn,
    buttonText: text('button text', 'some text')

  };

  return <UserButton {...props} />;
};
