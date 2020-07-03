import React from 'react';

import styled from '@emotion/styled';


export interface UserAvatarProps {
  src: string;
}

const StyledUserAvatar = styled.img`
  vertical-align: middle;
  border-radius: 50%;
  @media(min-width: 420px) {
    width: 96px;
    height: 96px;
  }
`;

export const UserAvatar = ({ src }: UserAvatarProps) => {
  return (
    <StyledUserAvatar src={src}/>
  );
};

export default UserAvatar;
