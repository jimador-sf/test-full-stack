import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO Date string. */
  IsoDateScalar: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
  updateUser: User;
  deleteUser: Scalars['Boolean'];
};

export type MutationAddUserArgs = {
  user: UserInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  user: UserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<User>;
  findOne: User;
};

export type QueryFindOneArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  dob: Scalars['IsoDateScalar'];
  address: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['IsoDateScalar'];
  updatedAt: Scalars['IsoDateScalar'];
};

export type UserInput = {
  name: Scalars['String'];
  dob: Scalars['IsoDateScalar'];
  address: Scalars['String'];
  description: Scalars['String'];
};

export type AddUserMutationVariables = Exact<{
  user: UserInput;
}>;

export type AddUserMutation = { __typename?: 'Mutation' } & {
  addUser: { __typename?: 'User' } & Pick<
    User,
    'name' | 'address' | 'dob' | 'description' | 'createdAt' | 'updatedAt'
  >;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  user: UserInput;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser: { __typename?: 'User' } & Pick<
    User,
    'name' | 'address' | 'dob' | 'description' | 'createdAt' | 'updatedAt'
  >;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deleteUser'
>;

export type FindAllQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllQuery = { __typename?: 'Query' } & {
  findAll: Array<
    { __typename?: 'User' } & Pick<
      User,
      'name' | 'address' | 'dob' | 'description' | 'createdAt' | 'updatedAt'
    >
  >;
};

export type FindOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type FindOneQuery = { __typename?: 'Query' } & {
  findOne: { __typename?: 'User' } & Pick<
    User,
    'name' | 'address' | 'dob' | 'description' | 'createdAt' | 'updatedAt'
  >;
};

export const AddUserDocument = gql`
  mutation addUser($user: UserInput!) {
    addUser(user: $user) {
      name
      address
      dob
      description
      createdAt
      updatedAt
    }
  }
`;
export type AddUserMutationFn = ApolloReactCommon.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddUserMutation,
    AddUserMutationVariables
  >(AddUserDocument, baseOptions);
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = ApolloReactCommon.MutationResult<
  AddUserMutation
>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($id: String!, $user: UserInput!) {
    updateUser(id: $id, user: $user) {
      name
      address
      dob
      description
      createdAt
      updatedAt
    }
  }
`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, baseOptions);
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<
  UpdateUserMutation
>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument, baseOptions);
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<
  DeleteUserMutation
>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const FindAllDocument = gql`
  query findAll {
    findAll {
      name
      address
      dob
      description
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useFindAllQuery__
 *
 * To run a query within a React component, call `useFindAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindAllQuery,
    FindAllQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<FindAllQuery, FindAllQueryVariables>(
    FindAllDocument,
    baseOptions
  );
}
export function useFindAllLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindAllQuery,
    FindAllQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<FindAllQuery, FindAllQueryVariables>(
    FindAllDocument,
    baseOptions
  );
}
export type FindAllQueryHookResult = ReturnType<typeof useFindAllQuery>;
export type FindAllLazyQueryHookResult = ReturnType<typeof useFindAllLazyQuery>;
export type FindAllQueryResult = ApolloReactCommon.QueryResult<
  FindAllQuery,
  FindAllQueryVariables
>;
export const FindOneDocument = gql`
  query findOne($id: String!) {
    findOne(id: $id) {
      name
      address
      dob
      description
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useFindOneQuery__
 *
 * To run a query within a React component, call `useFindOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FindOneQuery,
    FindOneQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<FindOneQuery, FindOneQueryVariables>(
    FindOneDocument,
    baseOptions
  );
}
export function useFindOneLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FindOneQuery,
    FindOneQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<FindOneQuery, FindOneQueryVariables>(
    FindOneDocument,
    baseOptions
  );
}
export type FindOneQueryHookResult = ReturnType<typeof useFindOneQuery>;
export type FindOneLazyQueryHookResult = ReturnType<typeof useFindOneLazyQuery>;
export type FindOneQueryResult = ApolloReactCommon.QueryResult<
  FindOneQuery,
  FindOneQueryVariables
>;