/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Grid, Cell } from '../util/grid';
import { whiteSmoke } from '../styles/global';

export const userListCss = css`
  margin: 0px;
  background: ${whiteSmoke};
  display: 'flex';
  alignItems: 'space-around';
  justifyContent: 'space-around';
  width: '100%';
  height: '100%';
`;

export const UserListWrapper = (props) => {
  return <Grid {...props} />;
};

export const StyledUserList = (props) => {
  return <Grid {...props} css={userListCss}/>;
};

export const UserListContainer = (props) => {
  return <Cell {...props} />;
};

export const PlaceHolder = (props) => {
  return <Cell {...props} />;
};
