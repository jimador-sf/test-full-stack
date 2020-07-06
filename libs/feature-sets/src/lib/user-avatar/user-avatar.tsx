import React from 'react';
import { StyledUserAvatar } from './user-avatar.styles';

export interface UserAvatarProps {
  src: string;
}

export const UserAvatar = ({ src }: UserAvatarProps) => {
  console.log(`Loading profile image from ${src}`);
  return (<StyledUserAvatar src={src}/>);
};

export default UserAvatar;
