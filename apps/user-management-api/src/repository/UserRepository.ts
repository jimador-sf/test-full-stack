import { User, UserInput } from '@test-full-stack/user-domain';
import dynamoDb from '../configuration/DatabaseConfiguration';
import { v1 } from 'uuid';

const tableName = 'User';

export interface UserRepository {
  findAll(): Promise<User[]>

  save(user: UserInput): Promise<User>
}

export const userRepository: UserRepository = new (class implements UserRepository {
  async findAll(): Promise<User[]> {
    const result = await dynamoDb.scan({ TableName: tableName }).promise();
    return result.Items as any;
  }

  async save(user: UserInput): Promise<User> {
    const now = Date.now();
    const params = {
      TableName: tableName,
      Item: {
        ...user,
        id: v1(),
        createdAt: now,
        updatedAt: now
      }
    };
    await dynamoDb.put(params).promise();
    return params.Item as any;
  }
})();
