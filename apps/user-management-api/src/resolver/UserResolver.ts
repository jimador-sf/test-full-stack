import * as TypeGraphQL from 'type-graphql';
import { Resolver, Query, Arg, Mutation, ObjectType, Field, InputType } from 'type-graphql';
import { userRepository } from '../repository/UserRepository';
import { IUser, Scalars, IUserInput } from '../domain';


/** User domain object */
@ObjectType()
class User implements IUser {
  __typename?: 'User';

  @Field((_type) => TypeGraphQL.ID)
  id: Scalars['ID'];

  @Field((_type) => String)
  name: Scalars['String'];

  @Field((_type) => Date)
  dob: Scalars['ISODateScalar'];

  @Field((_type) => String)
  address: Scalars['String'];

  @Field((_type) => String)
  description: Scalars['String'];

  @Field((_type) => Date)
  createdAt: Scalars['ISODateScalar'];

  @Field((_type) => Date)
  updatedAt: Scalars['ISODateScalar'];
}

/** User create input. */
@InputType()
class UserInput implements IUserInput {
  @Field((_type) => String)
  name: Scalars['String'];

  @Field((_type) => Date)
  dob: Scalars['ISODateScalar'];

  @Field((_type) => String)
  address: Scalars['String'];

  @Field((_type) => String)
  description: Scalars['String'];
}

/**
 * type-graphql {@link Resolver} for {@link User} data
 */
@Resolver(User)
export class UserResolver {
  constructor() {
  }

  @Query(_ => [User])
  async findAll(): Promise<User[]> {
    const result = await userRepository.findAll();
    return result;
  }

  @Query(_ => User)
  async findOne(@Arg('id') id: string): Promise<User> {
    const result = await userRepository.findOne(id);
    return result;
  }

  @Mutation(_ => User)
  async addUser(@Arg('user') user: UserInput): Promise<User> {
    const result = await userRepository.save(user);
    return result;
  }

  @Mutation(_ => User)
  async updateUser(@Arg('user') user: UserInput,
                   @Arg('id') id: string): Promise<User> {
    const result = await userRepository.save(user, id);
    return result;
  }

  @Mutation(_ => Boolean)
  async deleteUser(@Arg('id') id: string): Promise<boolean> {
    await userRepository.delete(id);
    return true;
  }
}
