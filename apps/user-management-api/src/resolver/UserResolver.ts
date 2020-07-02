import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { User, UserInput } from '@test-full-stack/user-domain';
import { userRepository } from '../repository/UserRepository';

@Resolver(User)
export default class ProductResolver {
  constructor() {
  }

  @Query(_ => [User])
  async findAll() {
    const result = await userRepository.findAll();
    return result;
  }

  @Mutation(_ => User)
  async addUser(
    @Arg("user") user: UserInput,
  ): Promise<User> {
    const result = await userRepository.save(user);
    return result;
  }
}
