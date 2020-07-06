import React from 'react';
import UserCard from '../user-card/user-card';
import { Grid, Cell } from '../util/grid';
import { StyledUserList, UserListContainer, PlaceHolder, UserListWrapper } from './user-list.styles';
import { User } from '@test-full-stack/data-access';


/* eslint-disable-next-line */
export interface UserListProps {
  users: User[]
}

export const UserList: React.FC<UserListProps> = ({ users }: UserListProps) => {

  return (
    <>
      <UserListWrapper columns={'7% 1fr 5%'}>
        <PlaceHolder/>
        <UserListContainer>
          <StyledUserList justifyContent={'space-around'}
                          alignContent={'space-around'}
                          columns={3}
                          rows={2}>
            {
              users.map(user => (
                <UserCard key={user.id}
                          name={user.name}
                          description={user.description}/>
              ))
            }
          </StyledUserList>
        </UserListContainer>
        <PlaceHolder/>
      </UserListWrapper>
    </>
  );
};
