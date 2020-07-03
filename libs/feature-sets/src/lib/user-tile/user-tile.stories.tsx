import React from 'react';
import { UserTile, UserTileProps } from './user-tile';

export default {
  component: UserTile,
  title: 'UserTile',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserTileProps = {};

  return <UserTile />;
};
