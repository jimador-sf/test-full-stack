import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserAvatarProps {}

const StyledUserAvatar = styled.div`
  color: pink;
`;

export const UserAvatar = (props: UserAvatarProps) => {
  return (
    <StyledUserAvatar>
      <h1>Welcome to UserAvatar!</h1>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
