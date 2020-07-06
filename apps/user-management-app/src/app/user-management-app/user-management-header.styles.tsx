/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { black } from '@test-full-stack/feature-sets';
import { Grid, Cell } from '../../../../../libs/feature-sets/src/lib/util/grid';

export const headerText = css`
  position: absolute;
  width: 239px;
  height: 43px;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
  display: grid;
  align-items: center;

  color: ${black};
`;

export const StyledHeaderContainer = (props) => <Grid columns={1} {...props} />;

export const StyledHeaderText = (props) => <Cell css={headerText} center middle {...props} />;
