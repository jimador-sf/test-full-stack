import { useState, useCallback, Dispatch, SetStateAction, useMemo, useEffect } from 'react';
import { readFromStorageOrDefault, setInStorage } from './utils';

export function usePagination(): [number, Dispatch<SetStateAction<number>>] {
  const [currentPage, setCurrentPage] = usePersistedState('page',0)

  const getNextPage =
    useCallback((skip: number) => {
    setCurrentPage(currentPage + skip)
  }, [currentPage, setCurrentPage])

  return [currentPage, getNextPage]
}

/**
 * Wrap state with session storage write persistence.
 */
export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {

  const defaultValueJson = useMemo(() => JSON.stringify(defaultValue), [
    defaultValue,
  ]);

  const [state, setState] = useState<T>(useCallback(() =>
    readFromStorageOrDefault(key, defaultValue), [key, defaultValue]),
  );

  useEffect(() => {
    const newStateJson = JSON.stringify(state);
    if (newStateJson !== defaultValueJson) {
      setInStorage(key, JSON.stringify(state));
    }
  }, [defaultValue, defaultValueJson, key, state]);

  return [state, setState];
}

