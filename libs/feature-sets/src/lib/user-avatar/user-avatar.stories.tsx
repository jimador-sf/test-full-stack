import React from 'react';
import UserAvatar from './user-avatar';
import hipster from './hipster.png';

export default {
  component: UserAvatar,
  title: 'UserAvatar',
};

export const primary = () => (<UserAvatar src={hipster}/>);
