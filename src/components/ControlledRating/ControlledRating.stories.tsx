import { useState } from 'react';
import ControlledRating, {
  RatingPropsType,
  RatingType,
} from './ControlledRating';
import { Story } from '@storybook/react';

export default {
  title: 'components/ControlledRating',
  component: ControlledRating,
  argTypes: { setRating: { action: 'clicked' } },
};

const Template: Story<RatingPropsType> = (args) => (
  <ControlledRating {...args} />
);
export const Rating0 = Template.bind({});
Rating0.args = {
  rating: 0,
};

export const Rating1 = Template.bind({});
Rating1.args = {
  rating: 1,
};

export const Rating2 = Template.bind({});
Rating2.args = {
  rating: 2,
};

export const Rating3 = Template.bind({});
Rating3.args = {
  rating: 3,
};

export const Rating4 = Template.bind({});
Rating4.args = {
  rating: 4,
};

export const Rating5 = Template.bind({});
Rating5.args = {
  rating: 5,
};

export const RatingWithState = () => {
  const [rating, setRating] = useState<RatingType>(0);

  return <ControlledRating rating={rating} setRating={setRating} />;
};
