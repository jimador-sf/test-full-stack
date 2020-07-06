import * as jsonfile from 'jsonfile';

import * as path from 'path';

import { makeFactory } from 'factory.ts';

import * as faker from 'faker'
import { dateGen, descriptionGen, idGen } from './user.fakes';

const userSeedFileName = 'Users.json';

const userSeedPath = path.join(__dirname, '..', 'migration', 'seed', userSeedFileName);

const createUser = () => {
  const {address, name: name1} = faker.helpers.userCard();
  const fullAddress = `${address.street}, ${address.city}, ${address.zipcode}`

  return {
    id: idGen(),
    address: fullAddress,
    description: descriptionGen(),
    name: name1,
    dob: dateGen(),
    createdAt: dateGen(),
    updatedAt: new Date()
  }
}

const genUsers = (count = 50) => {
  return makeFactory(createUser()).buildList(count);
};

describe('user data generator', () => {
  it('should generate data', () => {
    jsonfile.writeFileSync(userSeedPath, genUsers());
  });
});
