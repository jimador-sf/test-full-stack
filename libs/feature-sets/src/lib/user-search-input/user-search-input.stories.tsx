import React from 'react';
import { UserSearchInput, UserSearchInputProps } from './user-search-input';

export default {
  component: UserSearchInput,
  title: 'UserSearchInput'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserSearchInputProps = {};

  return <UserSearchInput/>;
};
