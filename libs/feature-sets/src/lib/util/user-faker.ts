import * as f from 'factory.ts';
import { User } from '@test-full-stack/data-access';
import { nameGen, addressGen, dateGen, descriptionGen, latLngGen } from '../../../../../apps/user-management-api/test/user.fakes';

export const usersGen = (count = 6) => f.Sync.makeFactory<User>({
  id: nameGen(),
  address: addressGen(),
  createdAt: dateGen(),
  description: descriptionGen(),
  dob: dateGen(),
  name: nameGen(),
  updatedAt: new Date(),
  ...latLngGen().build(1)
}).buildList(count);
