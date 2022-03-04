import { useState } from 'react';
import { Select } from './Select';

export default {
  title: 'components/Select',
  component: Select,
};

const items = [
  { title: 'Item value element 1', value: 1 },
  { title: 'Item value element 2', value: 2 },
  { title: 'Item value element 3', value: 3 },
  { title: 'Item value element 4', value: 4 },
];

export const UncontrolledSelect = () => {
  const [activeItemValue, setActiveItemValue] = useState<number | string>(
    items[0].value
  );

  return (
    <>
      <select>
        <option>1 option</option>
        <option>2 option</option>
        <option>3 option</option>
        <option>4 option</option>
      </select>
      <Select
        items={items}
        activeItemValue={activeItemValue}
        setActiveItemValue={(v) => {
          console.log(v);

          setActiveItemValue(v);
        }}
      />
    </>
  );
};
