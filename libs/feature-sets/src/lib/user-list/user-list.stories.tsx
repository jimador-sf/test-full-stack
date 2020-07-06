import React from 'react';
import { UserList } from './user-list';
import * as f from 'factory.ts'
import { User } from '@test-full-stack/data-access';
import { addressGen, dateGen, descriptionGen, nameGen } from '../../../../../apps/user-management-api/test/user.fakes';

export default {
  component: UserList,
  title: 'UserList',
};

export const primary = () => {
  const users = f.Sync.makeFactory<User>({
    address: addressGen(),
    createdAt: dateGen(),
    description: descriptionGen(),
    dob: dateGen(),
    name: nameGen(),
    updatedAt: new Date()
  }).buildList(6);
  return <UserList users={users}/>;
};
