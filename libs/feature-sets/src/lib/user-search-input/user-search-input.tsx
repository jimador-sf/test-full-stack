import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserSearchInputProps {}

const StyledUserSearchInput = styled.div`
  color: pink;
`;

export const UserSearchInput = (props: UserSearchInputProps) => {
  return (
    <StyledUserSearchInput>
      <h1>Welcome to UserSearchInput!</h1>
    </StyledUserSearchInput>
  );
};

export default UserSearchInput;
