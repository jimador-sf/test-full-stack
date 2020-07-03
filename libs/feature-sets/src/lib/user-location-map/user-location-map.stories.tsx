import React from 'react';
import { UserLocationMap, UserLocationMapProps } from './user-location-map';

export default {
  component: UserLocationMap,
  title: 'UserLocationMap',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserLocationMapProps = {};

  return <UserLocationMap />;
};
