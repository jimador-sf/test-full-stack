import React from 'react';
import { StyledUserCard, UserName, Description, Truncate } from './user-card.styles';
import UserAvatar from '../user-avatar/user-avatar';
import { Cell } from '../util/grid';
import { UserEditButton } from '../..';

export interface UserCardProps {
  name: string
  description: string;
}

export const UserCard = ({ name, description }: UserCardProps) => {
  return (
    <>
      <Cell>
        <StyledUserCard>
          <UserEditButton />
          <UserAvatar src={'../user-avatar/hipster.png'}/>
          <UserName>
            <Truncate>
              {name}
            </Truncate>
          </UserName>
          <Description>
            <Truncate>
              {description}
            </Truncate>
          </Description>
        </StyledUserCard>
      </Cell>
    </>
  );
};

export default UserCard;
