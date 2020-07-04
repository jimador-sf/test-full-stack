import React from 'react';
import { StyledUserCard, UserName, Description, Truncate } from './user-card.styles';
import UserAvatar from '../user-avatar/user-avatar';
import hipster from '../user-avatar/hipster.png';
import { Cell } from '../util/grid';

export interface UserCardProps {
  name: string
  description: string;
}

export const UserCard = ({ name, description }: UserCardProps) => {
  return (
    <>
      <Cell middle={true}>
        <StyledUserCard>
          <UserAvatar src={hipster}/>
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
