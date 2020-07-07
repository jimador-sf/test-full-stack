/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Grid, Cell } from '../../../../../libs/feature-sets/src/lib/util/grid';
import React from 'react';
import styled from '@emotion/styled';
import { white, black } from '@test-full-stack/feature-sets';

const headerCss = css`
  display: grid;
  grid-template-columns: 98px 1fr 1fr 115px;
  grid-gap: 20px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a b c d";
`;

export const headerText = css`
  width: 239px;
  height: 43px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
  color: ${black};

  grid-area: b;
  align-self: center;
  justify-self: start;
`;

export const inputCss = css`
  width: 400px;
  height: 64px;
  background: ${white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: ${black};

  align-self: end;
  justify-self: end;
  grid-area: c;
`;

export const Input = styled.input(inputCss);

export const StyledUserManagementApp = (props) => {
  return <Grid columns={1} row={3} gap={'40px'} {...props}  />;
};
export const StyledHeaderContainer = (props) => <Grid columns={1} {...props} />;

export const StyledHeaderText = styled.div(headerText);
export const Header = styled.div(headerCss);
export const Body = (props) => <Cell {...props} />;
export const Footer = (props) => <Cell {...props} />;

