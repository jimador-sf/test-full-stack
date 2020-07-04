import React from 'react';
import { useGetUsers } from '../hooks/useGetUsers';
import UserCard from '../user-card/user-card';
import { Grid, Cell } from '../util/grid';
import { StyledUserList } from './user-list.styles';
import Footer from '../footer/footer';

/* eslint-disable-next-line */
export interface UserListProps {
}

export const UserList: React.FC<UserListProps> = (_props: UserListProps) => {

  const data = useGetUsers();

  return (
    <>
      <StyledUserList>
        <Grid columns={'2rem 1fr 2rem'}>
          <Cell>&nbsp;</Cell>
          <Cell>
            <Grid justifyContent={'space-around'} alignContent={'space-around'} columns={3} rows={2}>
              {
                data.map(user => (
                  <UserCard key={user.id} name={user.name} description={user.description}/>
                ))
              }
            </Grid>
          </Cell>
          <Cell>&nbsp;</Cell>
        </Grid>
      </StyledUserList>
    </>
  );
};

export default UserList;
