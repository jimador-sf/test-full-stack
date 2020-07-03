import React, { useState } from 'react';
import { StyledUserList } from './user-list.styles';
import { User } from '@test-full-stack/user-domain';
import { useGetUsers } from '../hooks/useGetUsers';
import UserCard from '../user-card/user-card';
import { Grid } from '../util/grid';

/* eslint-disable-next-line */
export interface UserListProps {
}

export const UserList: React.FC<UserListProps> = (_props: UserListProps) => {

  const data = useGetUsers();

  return (
    <>
      <StyledUserList>
        <Grid columns={3} rows={2}>
          {
            data.map(user => (
              <UserCard key={user.id} name={user.name} description={user.description}/>
            ))
          }
        </Grid>
      </StyledUserList>
    </>
  );
};

export default UserList;
