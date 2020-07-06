import { useCallback, Dispatch, SetStateAction } from 'react';
import { usePersistedState } from './usePersistedState';

/**
 * Hook to track the current page value.
 * @return currentPage The current page number
 * @return getNextPage A function to get the next page number with an offset.
 */
export function usePagination(): [number, Dispatch<SetStateAction<number>>] {
  const [currentPage, setCurrentPage] = usePersistedState('page', 0);

  const getNextPage =
    useCallback((skip: number) => {
      setCurrentPage(currentPage + skip);
    }, [currentPage, setCurrentPage]);

  return [currentPage, getNextPage];
}
