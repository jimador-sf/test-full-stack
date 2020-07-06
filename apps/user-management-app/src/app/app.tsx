import React from 'react';

import styled from '@emotion/styled';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserManagementApp from './user-management-app/user-management-app';

/*
 * Replace the elements below with your own.
 *
 * Note: The corresponding styles are in the ./app.@emotion/styled file.
 */

const client = new ApolloClient({
  uri: 'http://localhost:5555/graphql'
});

const StyledApp = styled.div`
  background: whiteSmoke;
`;

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserManagementApp/>
    </ApolloProvider>
  );
};

export default App;
