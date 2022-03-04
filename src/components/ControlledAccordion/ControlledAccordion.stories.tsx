import ControlledAccordion from './ControlledAccordion';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'components/ControlledAccordion',
  component: ControlledAccordion,
};

const onTitleClickCallback = action('Click on title');
const onItemClickCallback = action('Click on item');

export const CollapsedControlledAccordion = () => {
  return (
    <ControlledAccordion
      title="Shopping list"
      items={[]}
      collapsed={true}
      onTitleClickCallback={onTitleClickCallback}
      onItemClickCallback={onItemClickCallback}
    />
  );
};

export const UncollapsedControlledAccordion = () => {
  return (
    <ControlledAccordion
      title="Users"
      items={[
        { id: 0, title: 'user 1' },
        { id: 1, title: 'user 2' },
        { id: 2, title: 'user 3' },
        { id: 3, title: 'user 4' },
      ]}
      collapsed={false}
      onTitleClickCallback={onTitleClickCallback}
      onItemClickCallback={onItemClickCallback}
    />
  );
};

export const ChangingModeControlledAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ControlledAccordion
      title="Users"
      items={[
        { id: 0, title: 'user 1' },
        { id: 1, title: 'user 2' },
        { id: 2, title: 'user 3' },
        { id: 3, title: 'user 4' },
      ]}
      collapsed={collapsed}
      onTitleClickCallback={() => setCollapsed(!collapsed)}
      onItemClickCallback={(id) => alert(`user with id ${id} should be happy`)}
    />
  );
};
