import React from 'react';
import { UserList } from './user-list';

export default {
  component: UserList,
  title: 'UserList',
};

export const primary = () => {
  return <UserList />;
};
