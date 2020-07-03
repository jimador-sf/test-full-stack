import React from 'react';
import { UserSaveButton, UserSaveButtonProps } from './user-save-button';

export default {
  component: UserSaveButton,
  title: 'UserSaveButton',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserSaveButtonProps = {};

  return <UserSaveButton />;
};
