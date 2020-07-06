/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Grid, Cell } from '../../../../../libs/feature-sets/src/lib/util/grid';
import React from 'react';

export const StyledUserManagementFooter = (props) => {
  return <Grid justifyContent={'space-evenly'} alignContent={'space-evenly'} columns={3} row={1} {...props}  />;
};

export const LoadMoreButtonWrapper = (props) => {
  return <Cell left={2} top={2} middle center {...props} />;
};
