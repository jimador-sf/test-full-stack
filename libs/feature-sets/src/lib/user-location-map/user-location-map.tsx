import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserLocationMapProps {}

const StyledUserLocationMap = styled.div`
  color: pink;
`;

export const UserLocationMap = (props: UserLocationMapProps) => {
  return (
    <StyledUserLocationMap>
      <h1>Welcome to UserLocationMap!</h1>
    </StyledUserLocationMap>
  );
};

export default UserLocationMap;
