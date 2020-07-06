import React from 'react';
import { GlobalStyles, UserList, UserButton } from '@test-full-stack/feature-sets';
import { useGetUsers } from '../hooks/useGetUsers';
import { LoadMoreButtonWrapper, StyledUserManagementFooter } from './user-management-footer.styles';
import { StyledHeaderText } from './user-management-header.styles';
import { StyledUserManagementApp, Header, Body, Footer } from './user-management-app.styles';

/* eslint-disable-next-line */
export interface UserManagementAppProps {
}

// TODO: Tech Debt - God Component
export const UserManagementApp = (props: UserManagementAppProps) => {
  const [users, nextPage] = useGetUsers();
  return (
    <>
      <GlobalStyles/>
      <StyledUserManagementApp>
        <Header>
          <StyledHeaderText>User list</StyledHeaderText>
        </Header>
        <Body>
          <UserList users={users}/>
        </Body>
        <Footer>
          <StyledUserManagementFooter>
            <LoadMoreButtonWrapper style={{ width: '55%', margin: '0px auto' }}>
              <UserButton buttonText={'Load More'} action={nextPage}/>
            </LoadMoreButtonWrapper>
          </StyledUserManagementFooter>
        </Footer>
      </StyledUserManagementApp>
    </>
  );
};

export default UserManagementApp;
