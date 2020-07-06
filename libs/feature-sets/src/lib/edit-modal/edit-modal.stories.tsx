import React from 'react';
import { EditModal, EditModalProps } from './edit-modal';

export default {
  component: EditModal,
  title: 'EditModal',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: EditModalProps = {};

  return <EditModal />;
};
