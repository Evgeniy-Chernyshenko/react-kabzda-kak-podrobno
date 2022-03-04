import ControlledAccordion from './components/ControlledAccordion/ControlledAccordion';
import ControlledRating, {
  RatingType,
} from './components/ControlledRating/ControlledRating';
import PageTitle from './components/PageTitle/PageTitle';
import { ControlledOnOff } from './components/ControlledOnOff/ControlledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import { useState } from 'react';

function App() {
  console.log('App rendering');
  const [rating, setRating] = useState<RatingType>(0);
  const [collapsed, setCollapsed] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      {/* <PageTitle title={'This is ReactJS app'} />
      <hr />
      <UncontrolledOnOff />
      <hr />
      <ControlledOnOff isOn={isOn} setIsOn={setIsOn} />
      <hr />
      <ControlledRating rating={rating} setRating={setRating} />
      <hr />
      <ControlledAccordion
        title="ControlledAccordion"
        collapsed={collapsed}
        onClickCallback={() => setCollapsed(!collapsed)}
      />
      <hr />
      <UncontrolledAccordion title="Menu4" />
      <hr />
      <UncontrolledRating /> */}
    </>
  );
}

export default App;
