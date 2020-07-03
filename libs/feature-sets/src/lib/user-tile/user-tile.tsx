import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserTileProps {}

const StyledUserTile = styled.div`
  color: pink;
`;

export const UserTile = (props: UserTileProps) => {
  return (
    <StyledUserTile>
      <h1>Welcome to UserTile!</h1>
    </StyledUserTile>
  );
};

export default UserTile;
