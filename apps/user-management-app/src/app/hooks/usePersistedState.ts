import { Dispatch, SetStateAction, useMemo, useState, useCallback, useEffect } from 'react';
import { createBrowserHistory as createHistory } from 'history';

/**
 * Hook to abstract write persistence for a key:value pair.
 */
export function usePersistedState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {

  const defaultValueJson = useMemo(() => JSON.stringify(defaultValue), [
    defaultValue
  ]);

  const [state, setState] = useState<T>(useCallback(() =>
    readFromStorageOrDefault(key, defaultValue), [key, defaultValue])
  );

  useEffect(() => {
    const newStateJson = JSON.stringify(state);
    if (newStateJson !== defaultValueJson) {
      setInStorage(key, JSON.stringify(state));
    }
  }, [defaultValue, defaultValueJson, key, state]);

  return [state, setState];
}


/**
 * Read a value from session storage or use provided default
 *
 * @param key the key to read from session storage.
 * @param defaultValue the value to default to.
 */
export const readFromStorageOrDefault =
  <T>(key: string, defaultValue: unknown = null): T => {
    const item = readFromStorage(key) ?? 'null';
    const res = JSON.parse(item);
    return res ?? defaultValue;
  };

/**
 * TODO sessionStorage.getItem(key) would probably be better
 * @param key
 */
const readFromStorage = (key: string): string | undefined => {
  const history = createHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const element = urlParams.get(key);
  return element;
};

/**
 * Set the value in storage.
 *
 * @param key the key to use for storage
 * @param value the value to store
 */
export const setInStorage = <T>(key: string, value: T): T => {
  const history = createHistory();
  const currentUrlParams = new URLSearchParams(history.location.search);
  const strValue = typeof value === 'object' ? JSON.stringify(value) : `${value}`;
  currentUrlParams.set(key, strValue);
  const updated = currentUrlParams.toString();
  const newUrl = history.location.pathname + '?' + updated;
  history.push(newUrl);
  return value;
};
