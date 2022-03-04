import { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tests/Controlled',
};

export const UncontrolledInput = () => {
  return <input />;
};

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />{' '}
      - {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() => {
          setValue(inputRef.current?.value || '');
        }}
      >
        save
      </button>{' '}
      current - {value}
    </>
  );
};

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
  );
};

export const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.currentTarget.checked)}
    />
  );
};

export const ControlledSelect = () => {
  const [value, setValue] = useState(0);

  return (
    <select value={value} onChange={(e) => setValue(+e.currentTarget.value)}>
      <option value={0}>none</option>
      <option value={1}>Moscow</option>
      <option value={2}>Minks</option>
      <option value={3}>Kiev</option>
    </select>
  );
};
