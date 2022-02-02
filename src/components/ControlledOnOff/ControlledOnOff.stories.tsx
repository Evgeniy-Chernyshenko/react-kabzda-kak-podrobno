import { useState } from 'react';
import { Story } from '@storybook/react';
import { ControlledOnOff, ControlledOnOffPropsType } from './ControlledOnOff';

export default {
  title: 'components/ControlledOff',
  component: ControlledOnOff,
  argTypes: { setIsOn: { action: 'clicked' } },
};

const Template: Story<ControlledOnOffPropsType> = (args) => (
  <ControlledOnOff {...args} />
);

export const ControlledOff = Template.bind({});
ControlledOff.args = {
  isOn: false,
};

export const ControlledOn = Template.bind({});
ControlledOn.args = {
  isOn: true,
};

export const ControlledOnOffWithState = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return <ControlledOnOff isOn={isOn} setIsOn={setIsOn} />;
};
