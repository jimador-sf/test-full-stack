import React from 'react';
import { UserEditButton, UserEditButtonProps } from './user-edit-button';

export default {
  component: UserEditButton,
  title: 'UserEditButton'
};

export const primary = () => {
  const can = () => alert('ouch')
  const props: UserEditButtonProps = {
    action: can
  };

  return <UserEditButton {...props} />;
};
