import { useEffect, useState } from 'react';

export default {
  title: 'Tests/UseEffect',
};

export const UseEffectDemo = () => {
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1000);

  useEffect(() => {
    console.log('useEffect every render');
  });

  useEffect(() => {
    console.log('useEffect first render');
  }, []);

  useEffect(() => {
    console.log('useEffect first render and change count');

    document.title = count.toString();
  }, [count]);

  return (
    <>
      <div>count: {count}</div>
      <div>fake: {fake}</div>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
  );
};

export const SetIntervalDemo = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount((state) => {
        const newState = state + 1;

        document.title = newState.toString();

        return newState;
      });
    }, 5000);
  }, []);

  return (
    <>
      <div>count: {count}</div>
    </>
  );
};

const getTimer = () => new Date().toLocaleTimeString();

export const TimerDemo = () => {
  const [timer, setTimer] = useState(getTimer);

  useEffect(() => {
    setInterval(() => {
      setTimer(getTimer);
    }, 1000);
  }, []);

  return (
    <>
      <div>timer: {timer}</div>
    </>
  );
};
