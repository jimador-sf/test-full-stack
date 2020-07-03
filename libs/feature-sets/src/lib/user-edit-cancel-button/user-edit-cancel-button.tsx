import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserEditCancelButtonProps {}

const StyledUserEditCancelButton = styled.div`
  color: pink;
`;

export const UserEditCancelButton = (props: UserEditCancelButtonProps) => {
  return (
    <StyledUserEditCancelButton>
      <h1>Welcome to UserEditCancelButton!</h1>
    </StyledUserEditCancelButton>
  );
};

export default UserEditCancelButton;
