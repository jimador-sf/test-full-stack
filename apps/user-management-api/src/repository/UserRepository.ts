import { User, UserInput } from '@test-full-stack/user-domain';
import dynamoDb from '../configuration/DatabaseConfiguration';
import { v1 } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const UserTableName = 'User';
export const UserTable = { TableName: UserTableName };

/**
 * Build {@link DocumentClient#GetItemInput} "by id" query args.
 * @param userId the user id
 */
const byId = (userId: string): DocumentClient.GetItemInput =>
  ({ ...UserTable, Key: { id: userId } });

/**
 * Build {@link DocumentClient#PutItemInput} "save or update" query args.
 * @param userInput the user data to save or update
 * @param userId the user id to update.
 */
const saveUserInput = (userInput: UserInput, userId?: string):
  DocumentClient.PutItemInput => {
  const id = userId ?? v1();
  const now = new Date().toISOString();
  const dob = userInput.dob.toISOString();

  return {
    ...UserTable,
    Item: {
      ...userInput,
      id,
      dob,
      createdAt: now,
      updatedAt: now
    }
  };
};

/**
 * Repository interface for {@link User} CRUD methods
 */
export interface UserRepository {
  findAll(): Promise<User[]>

  findOne(userId: string): Promise<User | undefined>

  save(user: UserInput, userId?: string): Promise<User>

  delete(userId: string): Promise<void>;
}

/**
 * Default {@link UserRepository} implementation.
 */
export const userRepository: UserRepository = new (class implements UserRepository {

  // TODO - Tech Debt - remove `any`
  async findAll(): Promise<User[]> {
    const result = await dynamoDb.scan(UserTable).promise();
    return result.Items as any;
  }

  // TODO - Tech Debt - remove `any`
  async findOne(id: string): Promise<User | undefined> {
    const params = byId(id);
    const r = await dynamoDb.get(params).promise();
    return r.Item as any;
  }

  async save(userInput: UserInput, userId?: string): Promise<User> {
    const params = saveUserInput(userInput, userId);
    await dynamoDb.put(params).promise();
    const saved = await this.findOne(params.Item.id);
    return saved;
  }

  async delete(id: string): Promise<void> {
    const params = byId(id);
    await dynamoDb.delete(params).promise();
  }


})();
