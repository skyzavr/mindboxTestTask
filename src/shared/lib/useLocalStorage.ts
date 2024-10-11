import { useState } from 'react';

type valueType = string | number | boolean;

type useLSParams = (
  key: string,
  initValue: valueType
) => {
  value: string;
  set: (value: valueType) => void;
};

const initializer = (key: string, value: valueType) => {
  const localStorValue = localStorage.getItem(key);

  if (localStorValue) return localStorValue;

  localStorage.setItem(key, String(value));
  return String(value);
};

export const useLocalStorage: useLSParams = (key, initValue) => {
  const [value, setValue] = useState<string>(initializer(key, initValue));

  const set = (value: valueType) => {
    setValue(String(value));
    localStorage.setItem(key, String(value));
  };
  return { value, set };
};
