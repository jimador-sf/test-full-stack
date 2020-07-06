import { useCallback, Dispatch, SetStateAction } from 'react';
import { usePersistedState } from './usePersistedState';

export function usePagination(): [number, Dispatch<SetStateAction<number>>] {
  const [currentPage, setCurrentPage] = usePersistedState('page',0)

  const getNextPage =
    useCallback((skip: number) => {
    setCurrentPage(currentPage + skip)
  }, [currentPage, setCurrentPage])

  return [currentPage, getNextPage]
}
