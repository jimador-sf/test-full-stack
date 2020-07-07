import React from 'react';
import { UserList } from './user-list';
import { usersGen } from '../util/user-faker';

export default {
  component: UserList,
  title: 'UserList'
};

export const primary = () => {

  return <UserList users={usersGen()}/>;
};
