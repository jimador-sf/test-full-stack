import React from 'react';
import UserCard from '../user-card/user-card';
import { StyledUserList, UserListContainer, PlaceHolder, UserListWrapper } from './user-list.styles';
import { User } from '@test-full-stack/data-access';
import * as faker from 'faker'


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
              users.map((user, index) => (
                <UserCard key={index}
                          user={user}
                          imageSrc={`https://source.unsplash.com/random/900×700/?face${faker.random.number()}`}
                />
              ))
            }
          </StyledUserList>
        </UserListContainer>
        <PlaceHolder/>
      </UserListWrapper>
    </>
  );
};
