import React from 'react';
import { UserEditButton, UserEditButtonProps } from './user-edit-button';

export default {
  component: UserEditButton,
  title: 'UserEditButton'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserEditButtonProps = {};

  return <UserEditButton/>;
};
