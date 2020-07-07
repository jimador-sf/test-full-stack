import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

/* eslint-disable-next-line */
export interface UserEditButtonProps {
  action: any
}

const pencil = css`
  position: absolute;
  top: 8%;
  right: 8%;
  font-size: 10px;
`;
const EditPencil = styled.button(pencil);

export const UserEditButton = ({ action }: UserEditButtonProps) => {
  return (
    <EditPencil onClick={action}>edit</EditPencil>
  );
};

export default UserEditButton;
