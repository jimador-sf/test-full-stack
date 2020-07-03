import React from 'react';
import { UserCard, UserCardProps } from './user-card';
import { text } from '@storybook/addon-knobs';

export default {
  component: UserCard,
  title: 'UserCard'
};

export const primary = () => {
  const props: UserCardProps = { name: text('name', 'john smith') };

  return <UserCard {...props} />;
};
