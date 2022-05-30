const supportsLocalStorage = () => {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

const getItem = (key: string): string | null => {
  if (supportsLocalStorage()) {
    return localStorage.getItem(key);
  }
  return null;
};

const getItemAndRemove = (key: string): string | null => {
  if (supportsLocalStorage()) {
    const value = localStorage.getItem(key);
    localStorage.removeItem(key);
    return value;
  }
  return null;
};

const removeItem = (key: string) => {
  if (supportsLocalStorage()) {
    localStorage.removeItem(key);
  }
};

const getObjectItem = (key: string): Record<string, unknown> => {
  if (supportsLocalStorage()) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  return {};
};
const setObjectItem = (key: string, value: Record<string, unknown>) => {
  if (supportsLocalStorage()) {
    localStorage.setItem(key, JSON.stringify({ ...getObjectItem(key), ...value }));
  }
};

const setItem = (key: string, value: string) => {
  if (supportsLocalStorage()) {
    localStorage.setItem(key, value);
  }
};

const localStorage = {
  getItemAndRemove,
  removeItem,
  getObjectItem,
  setObjectItem,
  getItem,
  setItem,
};

export default localStorage;
