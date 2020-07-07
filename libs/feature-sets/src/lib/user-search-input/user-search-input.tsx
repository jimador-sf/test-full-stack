/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { inputCss } from '../user-edit-modal/user-edit-modal.styles';

const styles = css`
${inputCss}
text-indent: 0;
`;

export const UserSearchInput = (props) => {
  return <AlgoliaPlaces css={styles}
                        options={{
                          appId: 'plLRZWFR03BI',
                          apiKey: '6b082f500ec3b6d5cf148bbd190d5edd'
                        }}
                        placeholder={''}
                        {...props}
  />;
};

export default UserSearchInput;
