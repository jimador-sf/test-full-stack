import { createBrowserHistory as createHistory } from 'history';

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
