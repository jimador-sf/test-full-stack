import React from 'react';
import { StyledUserAvatar } from './user-avatar.styles';
import hipster from './hipster.png';

export interface UserAvatarProps {
  src: string;
}

export const UserAvatar = ({ src }: UserAvatarProps) =>
  (<StyledUserAvatar src={hipster}/>);

export default UserAvatar;
