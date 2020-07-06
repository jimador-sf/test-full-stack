import React from 'react';
import { UserCard, UserCardProps } from './user-card';
import { text } from '@storybook/addon-knobs';
import * as f from 'factory.ts';
import { User } from '@test-full-stack/data-access';
import { nameGen, addressGen, dateGen, descriptionGen, latLngGen } from '../../../../../apps/user-management-api/test/user.fakes';
import { ModalProvider } from 'react-modal-hook/dist';

export default {
  component: UserCard,
  title: 'UserCard'
};

const users = f.Sync.makeFactory<User>({
  id: nameGen(),
  address: addressGen(),
  createdAt: dateGen(),
  description: descriptionGen(),
  dob: dateGen(),
  name: nameGen(),
  updatedAt: new Date(),
  ...latLngGen().build(1)
}).buildList(6);

export const primary = () => {
  const props: UserCardProps = { user: users[0] };

  return (
    <>
      <ModalProvider>
        <UserCard {...props} />
      </ModalProvider>
    </>
  );
};
