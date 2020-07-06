import React from 'react';
import { StyledEditModal } from './edit-modal.styles';
import { UserEditModal } from '../user-edit-modal/user-edit-modal';

/* eslint-disable-next-line */
export interface EditModalProps {}

export const EditModal = (props: EditModalProps) => {
  return (
    <StyledEditModal isOpen={true}>
      <div style={{width: '75%'}}>
        <UserEditModal/>
      </div>
    </StyledEditModal>
  );
};

export default EditModal;
