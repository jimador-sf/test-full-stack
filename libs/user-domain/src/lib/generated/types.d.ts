export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** RFC 3339 Date type */
  Date: any;
};

/** User update input. */
export type UserUpdateInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  dob: Scalars['String'];
  address: Scalars['String'];
  description: Scalars['String'];
};

/** User create input. */
export type UserCreateInput = {
  name: Scalars['String'];
  dob: Scalars['String'];
  address: Scalars['String'];
  description: Scalars['String'];
};

/** User domain object */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  dob: Scalars['String'];
  address: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

