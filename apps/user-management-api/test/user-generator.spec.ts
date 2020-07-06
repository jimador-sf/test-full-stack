import * as jsonfile from 'jsonfile';

import * as path from 'path';

import { makeFactory } from 'factory.ts';

import * as faker from 'faker'
import { dateGen, descriptionGen, idGen, addressGen, nameGen } from './user.fakes';

const userSeedFileName = 'Users.json';

const userSeedPath = path.join(__dirname, '..', 'seed', userSeedFileName);

const createUser = () => {
  return {
    id: idGen(),
    address: addressGen(),
    description: descriptionGen(),
    name: nameGen(),
    dob: dateGen(),
    createdAt: dateGen(),
    updatedAt: dateGen(10)
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
