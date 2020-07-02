import { User, UserInput } from '@test-full-stack/user-domain';
import dynamoDb from '../configuration/DatabaseConfiguration';
import { v1 } from 'uuid';
import { LocalDate } from 'js-joda';

const tableName = 'User';

export interface UserRepository {
  findAll(): Promise<User[]>
  findOne(id: string): Promise<User | undefined>
  save(user: UserInput): Promise<User>
}

export const userRepository: UserRepository = new (class implements UserRepository {
  async findAll(): Promise<User[]> {
    const result = await dynamoDb.scan({ TableName: tableName }).promise();
    return result.Items as any;
  }

  async findOne(id: string): Promise<User | undefined> {
    const params = {
      TableName: tableName,
      Key: { id }
    };
    const r = await dynamoDb.get(params).promise();
    return r.Item as any;
  }

  async save(user: UserInput): Promise<User> {
    const now = new Date().toISOString();
    const dob = user.dob.toISOString()
    const params = {
      TableName: tableName,
      Item: {
        ...user,
        id: v1(),
        dob,
        createdAt: now,
        updatedAt: now
      }
    };
    await dynamoDb.put(params).promise();
    const saved = await this.findOne(params.Item.id);
    return saved;
  }
})();
