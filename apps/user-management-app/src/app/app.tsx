import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserManagementApp from './user-management-app/user-management-app';
import { USER_MANAGEMENT_API_URL } from './configuration/app-configuration';



const client = new ApolloClient({
  uri: USER_MANAGEMENT_API_URL
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserManagementApp/>
    </ApolloProvider>
  );
};

export default App;
