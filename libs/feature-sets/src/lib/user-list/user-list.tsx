import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserListProps {}

const StyledUserList = styled.div`
  color: pink;
`;

export const UserList = (_props: UserListProps) => {
  return (
    <StyledUserList>
      <h1>Welcome to UserList!</h1>
    </StyledUserList>
  );
};

export default UserList;
