import React from 'react';
import UserAvatar from './user-avatar';

export default {
  component: UserAvatar,
  title: 'UserAvatar'
};

export const primary = () => (<UserAvatar src={`https://source.unsplash.com/random/900×700/?face`}/>);
