import React from 'react';
import { StyledUserButton, BtnText } from './user-button.styles';

/* eslint-disable-next-line */
export interface UserButtonProps {
  buttonText: string;
  action: () => void
}

export const UserButton = ({ action, buttonText }: UserButtonProps) => {
  return (
    <StyledUserButton onClick={action}>
      <BtnText>
        {buttonText}
      </BtnText>
    </StyledUserButton>
  );
};

export default UserButton;
