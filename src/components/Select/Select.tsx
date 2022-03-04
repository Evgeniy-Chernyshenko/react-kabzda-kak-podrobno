import React, { useState, KeyboardEvent } from 'react';
import styles from './Select.module.css';

type ValueType = number | string;

type Item = {
  title: string;
  value: ValueType;
};

type SelectPropsType = {
  items: Item[];
  activeItemValue: ValueType;
  setActiveItemValue: (value: ValueType) => void;
};

export const Select = React.memo((props: SelectPropsType) => {
  console.log('Render Select');

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItemValue, setHoveredItemValue] = useState(
    props.activeItemValue
  );
  const [itemForTitle, setItemForTitle] = useState(props.activeItemValue);

  const hide = () => {
    setIsVisible(false);
  };

  const selectItem = (value: ValueType) => {
    value !== props.activeItemValue && props.setActiveItemValue(value);
    value !== itemForTitle && setItemForTitle(value);
    hide();
  };

  const hideHandler = () => {
    isVisible && hide();
  };

  const showHideHandler = () => {
    setIsVisible(!isVisible);
  };

  const onClickItemHandler = (value: ValueType) => {
    selectItem(value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== 'ArrowUp' && e.code !== 'ArrowDown') {
      return;
    }

    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].value === hoveredItemValue) {
        const pretendent = props.items[e.code === 'ArrowUp' ? i - 1 : i + 1];

        if (pretendent) {
          setHoveredItemValue(pretendent.value);
          setItemForTitle(pretendent.value);

          !isVisible && selectItem(pretendent.value);
        }

        break;
      }
    }
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== 'Enter') {
      return;
    }

    selectItem(hoveredItemValue);
  };

  const title = props.items.find((item) => item.value === itemForTitle)?.title;

  return (
    <>
      <div
        className={styles.select}
        tabIndex={0}
        onBlur={hideHandler}
        onKeyDown={onKeyDownHandler}
        onKeyPress={onKeyPressHandler}
      >
        <div onClick={showHideHandler}>{title}</div>
        <ul className={isVisible ? styles.visible : ''}>
          {props.items.map(({ title, value }) => (
            <li
              key={value}
              className={value === hoveredItemValue ? styles.active : ''}
              onClick={() => onClickItemHandler(value)}
              onMouseEnter={() =>
                hoveredItemValue !== value && setHoveredItemValue(value)
              }
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});
