import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserLoadMoreButtonProps {}

const StyledUserLoadMoreButton = styled.div`
  color: pink;
`;

export const UserLoadMoreButton = (props: UserLoadMoreButtonProps) => {
  return (
    <StyledUserLoadMoreButton>
      <h1>Welcome to UserLoadMoreButton!</h1>
    </StyledUserLoadMoreButton>
  );
};

export default UserLoadMoreButton;
