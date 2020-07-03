import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UserDetailsFormProps {}

const StyledUserDetailsForm = styled.div`
  color: pink;
`;

export const UserDetailsForm = (props: UserDetailsFormProps) => {
  return (
    <StyledUserDetailsForm>
      <h1>Welcome to UserDetailsForm!</h1>
    </StyledUserDetailsForm>
  );
};

export default UserDetailsForm;
