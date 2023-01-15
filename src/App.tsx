import React from 'react';

import { getCounter } from './store/counter/slice';
import { useAppSelector } from './store/hooks';
import { useCounter } from './useCounter';

export const App = () => {
  useCounter();
  const counter = useAppSelector(getCounter);
  console.log("App render");
  return (
    <div>{counter} renders</div>
  );
}
