/** @jsx jsx */
import { jsx } from '@emotion/core';

import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { inputCss } from '../user-edit-modal/user-edit-modal.styles';

export const UserSearchInput = (props) => {
  return <AlgoliaPlaces css={inputCss}
                        placeholder={''}
                        {...props}
  />;
};

export default UserSearchInput;
