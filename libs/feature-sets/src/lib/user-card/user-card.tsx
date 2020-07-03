import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserCardProps {}

const StyledUserCard = styled.div`
  color: pink;
`;

export const UserCard = (props: UserCardProps) => {
  return (
    <StyledUserCard>
      <h1>Welcome to UserCard!</h1>
    </StyledUserCard>
  );
};

export default UserCard;
