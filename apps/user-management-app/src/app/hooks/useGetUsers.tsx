import * as f from 'factory.ts';
import * as faker from 'faker';
import { User, useFindAllQuery } from '@test-full-stack/data-access';
import { usePagination } from './usePagination';
import { Dispatch, SetStateAction, useCallback, useState, useEffect } from 'react';

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

  const { data, loading, error } = useFindAllQuery({
    variables: {
      pageInfo: {
        limit: 6,
        cursor: `${current + 1}`
      }
    }
  })

  if (loading) {
    return [[], getNextPage];
  }

  if (data) {
    const result = data.findAll;
    return [result.users ?? [], getNextPage]
  }

  if (error) {
    throw new Error(`Error: ${error.message}`)
  }

  console.log(`current page is: ${current}`);
};
