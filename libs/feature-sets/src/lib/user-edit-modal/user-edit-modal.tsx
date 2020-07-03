import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserEditModalProps {}

const StyledUserEditModal = styled.div`
  color: pink;
`;

export const UserEditModal = (props: UserEditModalProps) => {
  return (
    <StyledUserEditModal>
      <h1>Welcome to UserEditModal!</h1>
    </StyledUserEditModal>
  );
};

export default UserEditModal;
