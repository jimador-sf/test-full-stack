import { User, useFindAllQuery } from '@test-full-stack/data-access';
import { usePagination } from './usePagination';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { v1 } from 'uuid';

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
  });

  if (loading) {
    return [[], getNextPage];
  }

  if (data) {
    const { users } = data.findAll;
    return [users, getNextPage];
  }

  if (error) {
    throw new Error(`Error: ${error.message}`);
  }

  console.log(`current page is: ${current}`);
};
