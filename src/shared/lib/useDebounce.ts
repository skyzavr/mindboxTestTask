import { useEffect, useState } from 'react';

type debounceProps = (value: string, delay: number) => string;

export const useDebounce: debounceProps = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
};
