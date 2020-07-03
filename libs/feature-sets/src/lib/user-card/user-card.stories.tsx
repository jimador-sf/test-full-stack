import React from 'react';
import { UserCard, UserCardProps } from './user-card';

export default {
  component: UserCard,
  title: 'UserCard',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserCardProps = {};

  return <UserCard />;
};
