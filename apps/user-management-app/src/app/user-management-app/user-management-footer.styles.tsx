/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Grid, Cell } from './grid';

export const StyledUserManagementFooter = (props) => {
  return <Grid justifyContent={'space-evenly'} alignContent={'space-evenly'} columns={3} row={1} {...props}  />;
};

export const LoadMoreButtonWrapper = (props) => {
  return <Cell left={2} top={2} middle center {...props} />;
};
