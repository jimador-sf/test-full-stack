import * as TypeGraphQL from 'type-graphql';
export type Maybe<T> = T | null;
type FixDecorator<T> = T;
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

/** User create input. */
@TypeGraphQL.InputType()
export class UserInput {
  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => Date)
  dob!: Scalars['Date'];

  @TypeGraphQL.Field((type) => String)
  address!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  description!: Scalars['String'];
}

/** User domain object */
@TypeGraphQL.ObjectType()
export class User {
  __typename?: 'User';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => Date)
  dob!: Scalars['Date'];

  @TypeGraphQL.Field((type) => String)
  address!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  description!: Scalars['String'];

  @TypeGraphQL.Field((type) => Date)
  createdAt!: Scalars['Date'];

  @TypeGraphQL.Field((type) => Date)
  updatedAt!: Scalars['Date'];
}
