import * as TypeGraphQL from 'type-graphql';

export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO 8061 Date Scalar */
  ISODateScalar: Date;
}

/** User domain object */
@TypeGraphQL.ObjectType()
export class User {
  __typename?: 'User';

  @TypeGraphQL.Field((_type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((_type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((_type) => Date)
  dob!: Scalars['ISODateScalar'];

  @TypeGraphQL.Field((_type) => String)
  address!: Scalars['String'];

  @TypeGraphQL.Field((_type) => String)
  description!: Scalars['String'];

  @TypeGraphQL.Field((_type) => Date)
  createdAt!: Scalars['ISODateScalar'];

  @TypeGraphQL.Field((_type) => Date)
  updatedAt!: Scalars['ISODateScalar'];
}

/** User create input. */
@TypeGraphQL.InputType()
export class UserInput {
  @TypeGraphQL.Field((_type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((_type) => Date)
  dob!: Scalars['ISODateScalar'];

  @TypeGraphQL.Field((_type) => String)
  address!: Scalars['String'];

  @TypeGraphQL.Field((_type) => String)
  description!: Scalars['String'];
}
