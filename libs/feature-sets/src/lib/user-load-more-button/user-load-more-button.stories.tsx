import React from 'react';
import { UserLoadMoreButton, UserLoadMoreButtonProps } from './user-load-more-button';

export default {
  component: UserLoadMoreButton,
  title: 'UserLoadMoreButton'
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserLoadMoreButtonProps = {};

  return <UserLoadMoreButton/>;
};
