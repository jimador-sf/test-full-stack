import { User, useFindAllQuery } from '@test-full-stack/data-access';
import { usePagination } from './usePagination';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export const sleep = async (sleepTimeMs: number): Promise<number> =>
  new Promise(resolve => setTimeout(resolve, sleepTimeMs));

/**
 * Hook to get the initial use list and a function to get the next list of users.
 */
export const useGetUsers = (name?: string): [User[], Dispatch<SetStateAction<number>>] => {
  const [current, addPage] = usePagination();
  const [snooze, setSnooze] = useState(false);

  const getNextPage = useCallback(() => {
    addPage(1);
  }, [current, addPage]);
  const reset = () => addPage(current * -1);
  if (name && current > 1) {
    reset();
  }
  const page = {
    pageInfo: {
      limit: 6,
      cursor: `${current + 1}`
    }
  };

  const criteria = name ? { criteria: { name: name } } : {};
  const { data, loading, error } = useFindAllQuery({
    variables: {
      ...page,
      ...criteria
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
