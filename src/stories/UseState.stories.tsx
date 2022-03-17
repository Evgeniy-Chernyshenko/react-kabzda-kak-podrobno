import React, { useState } from 'react';

export default {
  title: 'Tests/UseState',
};

export const UseStateDemo = () => {
  const [count, setCount] = useState(() => {
    // difficult counting

    console.log('difficult counting');

    return 1;
  });

  const increment = (state: number) => {
    console.log('increment');

    return state + 1;
  };

  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(increment)}>+</button>
    </>
  );
};
