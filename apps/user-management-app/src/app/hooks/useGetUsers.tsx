import * as f from 'factory.ts';
import * as faker from 'faker';
import { User } from '@test-full-stack/data-access';
import { usePagination } from './usePagination';
import { Dispatch, SetStateAction, useCallback } from 'react';

const nameGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
const addressGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
const descriptionGen: () => f.Sync.Generator<string> = () => f.each(() => faker.lorem.words(5));
const dateGen: () => f.Sync.Generator<Date> = () => f.each(() => faker.date.recent(1000));

/**
 * Hook to get the initial use list and a function to get the next list of users.
 */
export const useGetUsers = (): [User[], Dispatch<SetStateAction<number>>] => {
  const [current, nextPage] = usePagination();

  const getNextPage = useCallback(() => {
    nextPage(1);
  }, [current, nextPage]);

  const memo: User[] = f.Sync.makeFactory<User>({
    __typename: 'User',
    address: addressGen(),
    createdAt: dateGen(),
    description: descriptionGen(),
    dob: dateGen(),
    id: nameGen(),
    name: nameGen(),
    updatedAt: new Date()
  }).buildList(6);

  console.log(`current page is: ${current}`);
  return [memo, getNextPage];
};
