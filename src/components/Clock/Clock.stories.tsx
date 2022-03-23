import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Clock } from './Clock';

export default {
  title: 'Components/Clock',
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (props) => {
  return <Clock {...props} />;
};

export const BaseExample = Template.bind({});
BaseExample.args = {
  isAnalog: true,
};
