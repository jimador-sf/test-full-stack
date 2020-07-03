import React from 'react';
import { UserCardContainer, UserName } from './user-card.styles';

export interface UserCardProps {
  name: string
}


export const UserCard = ({ name }: UserCardProps) => {
  return (
    <UserCardContainer>
      <UserName>{name}</UserName>
    </UserCardContainer>
  );
};

export default UserCard;
