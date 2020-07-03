import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserSaveButtonProps {}

const StyledUserSaveButton = styled.div`
  color: pink;
`;

export const UserSaveButton = (props: UserSaveButtonProps) => {
  return (
    <StyledUserSaveButton>
      <h1>Welcome to UserSaveButton!</h1>
    </StyledUserSaveButton>
  );
};

export default UserSaveButton;
