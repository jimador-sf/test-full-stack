/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Grid, Cell } from '../../../../../libs/feature-sets/src/lib/util/grid';
import React from 'react';

const headerCss = css`
  margin: 30px 0px 30px 75px
`

export const StyledUserManagementApp = (props) => {
  return <Grid columns={1} row={3} gap={'40px'} {...props}  />;
};

export const Header = (props) => <Cell center middle {...props} css={headerCss} />
export const Body = (props) => <Cell {...props} />
export const Footer = (props) => <Cell {...props} />

