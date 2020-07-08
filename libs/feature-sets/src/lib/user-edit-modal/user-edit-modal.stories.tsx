// TODO - God Component the hook call
import React from 'react';
import { UserEditModal, UserEditModalProps } from './user-edit-modal';
import { usersGen } from '../util/user-faker';

export default {
  component: UserEditModal,
  title: 'UserEditModal'
};

export const primary = () => {
  const can = () => alert('ouch')
  const props: UserEditModalProps = {
    cancelFn: can,
    user: usersGen()[0]

  };

  return <UserEditModal {...props} />;
};
