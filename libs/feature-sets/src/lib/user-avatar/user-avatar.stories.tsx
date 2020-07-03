import React from 'react';
import { UserAvatar, UserAvatarProps } from './user-avatar';

export default {
  component: UserAvatar,
  title: 'UserAvatar',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserAvatarProps = {};

  return <UserAvatar />;
};
