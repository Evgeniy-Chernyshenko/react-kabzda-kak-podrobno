export type ControlledOnOffPropsType = {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
};

export const ControlledOnOff = (props: ControlledOnOffPropsType) => {
  const commonStyle = {
    display: 'inline-block',
    border: '1px solid black',
  };

  const buttonStyle = {
    padding: '5px 20px',
    marginRight: '10px',
  };

  const onStyle = {
    backgroundColor: props.isOn ? 'green' : 'white',
  };

  const offStyle = {
    backgroundColor: props.isOn ? 'white' : 'red',
  };

  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: props.isOn ? 'green' : 'red',
  };

  return (
    <div>
      <div
        style={{ ...commonStyle, ...buttonStyle, ...onStyle }}
        onClick={() => props.setIsOn(true)}
      >
        On
      </div>
      <div
        style={{ ...commonStyle, ...buttonStyle, ...offStyle }}
        onClick={() => props.setIsOn(false)}
      >
        Off
      </div>
      <div style={{ ...commonStyle, ...indicatorStyle }}></div>
    </div>
  );
};
