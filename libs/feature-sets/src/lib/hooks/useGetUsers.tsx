import { User } from '@test-full-stack/user-domain';
import * as f from 'factory.ts';
import * as faker from 'faker';
import { v1 } from 'uuid';

const nameGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
const addressGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
const descriptionGen: () => f.Sync.Generator<string> = () => f.each(() => faker.lorem.words(5));
const dateGen: () => f.Sync.Generator<Date> = () => f.each(() => faker.date.recent(1000));


export const useGetUsers = (): User[] => {
  const memo: User[] = f.Sync.makeFactory<User>({
    __typename: 'User',
    address: addressGen(),
    createdAt: dateGen(),
    description: descriptionGen(),
    dob: dateGen(),
    id: v1(),
    name: nameGen(),
    updatedAt: new Date()
  }).buildList(6);
  console.log(`made ${memo.length} users`)
  return memo;
};
