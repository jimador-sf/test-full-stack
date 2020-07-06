import * as TypeGraphQL from 'type-graphql';
import { Resolver, Query, Arg, Mutation, ObjectType, Field, InputType } from 'type-graphql';
import { userRepository } from '../repository/UserRepository';
import { IUser, Scalars, IUserInput, IUserCriteria, IPageInfo, IUserPage } from '../domain';

@ObjectType()
class UserPage implements IUserPage {
  @Field((_type) => [User])
  users: User[];

  @Field((_type) => String)
  cursor: string;
}

/** User domain object */
@ObjectType()
class User implements IUser {

  @Field((_type) => TypeGraphQL.ID)
  id: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => Date)
  dob: Date;

  @Field((_type) => String)
  address: string;

  @Field((_type) => String)
  description: string;

  @Field((_type) => Date)
  createdAt: Date;

  @Field((_type) => Date)
  updatedAt: Date;
}

/** User create input. */
@InputType()
class UserInput implements IUserInput {
  @Field((_type) => String)
  name: string;

  @Field((_type) => Date)
  dob: Date;

  @Field((_type) => String)
  address: string;

  @Field((_type) => String)
  description: string;
}

@InputType()
class UserCriteria implements IUserCriteria {
  @Field((_type) => String)
  name: string;
}

@InputType()
class PageInfo implements IPageInfo {
  @Field((_type) => Number)
  limit: number;
  @Field(() => String,{ nullable: true } )
  cursor?: string;
}

/**
 * type-graphql {@link Resolver} for {@link User} data
 */
@Resolver(User)
export class UserResolver {
  constructor() {
  }

  @Query(_ => UserPage)
  async findAll(@Arg('criteria') criteria: UserCriteria,
                @Arg('pageInfo') pageInfo: PageInfo): Promise<UserPage> {
    const result = await userRepository.findAll(criteria, pageInfo);
    return result as UserPage;
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
