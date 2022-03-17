import React, { useMemo, useState, useCallback } from 'react';
import { Select } from '../components/Select/Select';

export default {
  title: 'Tests/UseMemo',
};

export const DifficultCounting = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = resultA;

    for (let i = 2; i <= a; i++) {
      for (let i = 0; i < 10000000; i++) {
        Math.random();
      }

      tempResult *= i;
    }

    return tempResult;
  }, [a]);

  for (let i = 2; i <= b; i++) {
    resultB *= i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <br />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <div>Result a: {resultA}</div>
      <div>Result b: {resultB}</div>
    </>
  );
};

const UsersList = React.memo((props: { users: string[] }) => {
  console.log('Render UsersList');

  return (
    <ul>
      {props.users.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  );
});

export const ReactMemoWithUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Bob', 'John']);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().includes('a'));
  }, [users]);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <br />
      <UsersList users={filteredUsers} />
      <button onClick={() => setUsers([...users, `Sveta ${Date.now()}`])}>
        add user
      </button>
    </>
  );
};

export const SelectWithReactMemoAndUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([
    { title: 'Moscow', value: 1, countryId: 1, population: 10000000 },
    { title: 'Novosibirsk', value: 2, countryId: 1, population: 200000 },
    { title: 'Minsk', value: 3, countryId: 2, population: 5000000 },
    { title: 'Kiev', value: 4, countryId: 3, population: 7000000 },
  ]);
  const [activeItemValue1, setActiveItemValue1] = useState<number | string>(1);
  const [activeItemValue2, setActiveItemValue2] = useState<number | string>(1);
  const [activeItemValue3, setActiveItemValue3] = useState<number | string>(1);

  const [filteredItems1, filteredItems2, filteredItems3] = useMemo(() => {
    return [
      items.filter((i) => i.title.toLowerCase().includes('i')),
      items.filter((i) => i.countryId === 1),
      items.filter((i) => i.population > 200000),
    ];
  }, [items]);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <br />
      <Select
        items={filteredItems1}
        activeItemValue={activeItemValue1}
        setActiveItemValue={setActiveItemValue1}
      />

      <Select
        items={filteredItems2}
        activeItemValue={activeItemValue2}
        setActiveItemValue={setActiveItemValue2}
      />

      <Select
        items={filteredItems3}
        activeItemValue={activeItemValue3}
        setActiveItemValue={setActiveItemValue3}
      />
    </>
  );
};

const BooksList = React.memo(
  (props: { books: string[]; addBook: () => void }) => {
    console.log('Render BooksList');

    return (
      <>
        <ul>
          {props.books.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>

        <button onClick={props.addBook}>add book</button>
      </>
    );
  }
);

export const UseMemoLikeUseCallback = () => {
  console.log('Render UseMemoLikeUseCallback');

  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(['React', 'CSS', 'HTML']);

  const filteredBooks = useMemo(() => {
    return books.filter((b) => b.toLowerCase().includes('a'));
  }, [books]);

  const addBook = useMemo(
    () => () => setBooks([...books, `Angular ${Date.now()}`]),
    [books]
  );

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <br />
      <BooksList books={filteredBooks} addBook={addBook} />
    </>
  );
};

export const UseCallback = () => {
  console.log('Render UseMemoLikeUseCallback');

  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(['React', 'CSS', 'HTML']);

  const filteredBooks = useMemo(() => {
    return books.filter((b) => b.toLowerCase().includes('a'));
  }, [books]);

  const addBook = useCallback(
    () => setBooks([...books, `Angular ${Date.now()}`]),
    [books]
  );

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <br />
      <BooksList books={filteredBooks} addBook={addBook} />
    </>
  );
};
