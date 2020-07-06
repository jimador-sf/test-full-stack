import React from 'react';

import styled from '@emotion/styled';
import { white } from '../styles/global';
import UserButton from '../user-button/user-button';

/* eslint-disable-next-line */
export interface UserLoadMoreButtonProps {
}

const StyledUserLoadMoreButton = styled.button`
  width: 280px;
  height: 90px;
  display: grid;
  align-items: center;
  background: ${white};
  border: 4px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
`;

const BtnText = styled.div`
  position: absolute;
  width: 252px;
  height: 68px;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;
`;

export const UserLoadMoreButton = (props: UserLoadMoreButtonProps) => {
  return (
    <UserButton action={() => alert('ouch')} buttonText={'Load More'}/>
  );
};

export default UserLoadMoreButton;
