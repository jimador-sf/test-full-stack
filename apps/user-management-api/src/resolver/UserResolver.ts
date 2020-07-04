import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { User, UserInput } from '../domain/user';
import { userRepository } from '../repository/UserRepository';

/**
 * type-graphql {@link Resolver} for {@link User} data
 */
@Resolver(User)
export default class UserResolver {
  constructor() {
  }

  @Query(_ => [User])
  async findAll() {
    const result = await userRepository.findAll();
    return result;
  }

  @Query(_ => User)
  async findOne(@Arg("id") id: string) {
    const result = await userRepository.findOne(id)
    return result
  }

  @Mutation(_ => User)
  async addUser(@Arg("user") user: UserInput): Promise<User> {
    const result = await userRepository.save(user);
    return result;
  }

  @Mutation(_ => User)
  async updateUser(@Arg("user") user: UserInput,
                   @Arg('id') id: string): Promise<User> {
    const result = await userRepository.save(user, id);
    return result;
  }

  @Mutation(_ => Boolean)
  async deleteUser(@Arg("id") id: string) {
    await userRepository.delete(id);
    return true
  }
}
