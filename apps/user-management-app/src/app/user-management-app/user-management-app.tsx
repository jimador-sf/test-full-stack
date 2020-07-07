import React, { useState } from 'react';
import { GlobalStyles, UserList, UserButton } from '@test-full-stack/feature-sets';
import { useGetUsers } from '../hooks/useGetUsers';
import { LoadMoreButtonWrapper, StyledUserManagementFooter } from './user-management-footer.styles';
import { StyledUserManagementApp, Header, Body, Footer, Input, StyledHeaderText } from './user-management-app.styles';
import { ModalProvider } from 'react-modal-hook/dist';
import { debounce } from 'lodash';

/* eslint-disable-next-line */
export interface UserManagementAppProps {
}

// TODO: Tech Debt - God Component
export const UserManagementApp = (props: UserManagementAppProps) => {
  const [name, setName] = useState(null);
  const [users, nextPage] = useGetUsers(name);

  return (
    <>
      <ModalProvider>
        <GlobalStyles/>
        <StyledUserManagementApp>
          <Header>
            <StyledHeaderText>User list</StyledHeaderText>
            <Input type="text"
                   name="search"
                   id={'search'}
                   placeholder={'Search...'}
                   onChange={(e) => {
                     e.persist();
                     debounce(() => setName(e.target.value), 500)();
                   }}
            />
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
      </ModalProvider>
    </>
  );
};

export default UserManagementApp;
