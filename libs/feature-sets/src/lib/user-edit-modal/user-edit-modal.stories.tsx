import React from 'react';
import { UserEditModal, UserEditModalProps } from './user-edit-modal';

export default {
  component: UserEditModal,
  title: 'UserEditModal'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserEditModalProps = {};

  return <UserEditModal/>;
};
