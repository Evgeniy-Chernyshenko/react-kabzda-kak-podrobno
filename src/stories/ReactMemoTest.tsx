import React, { useState } from 'react';

const Counter = (props: { count: number }) => {
  console.log('Render Counter');

  return <div>Counter: {props.count}</div>;
};

const CounterMemo = React.memo(Counter);

const UsersList = (props: { users: string[] }) => {
  console.log('Render UsersList');

  return (
    <ul>
      {props.users.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  );
};

const UsersListMemo = React.memo(UsersList);

export const ReactMemoTest = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Bob', 'John', 'Peter', 'Mikle']);

  const addUser = () => {
    setUsers([...users, 'Sveta']);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={addUser}>Add user</button>
      <CounterMemo count={count} />
      <UsersListMemo users={users} />
    </>
  );
};
