import { useState } from "react";

const UncontrolledOnOff = () => {
  console.log("UncontrolledOnOff rendering");

  const [isOn, setIsOn] = useState(false);

  const commonStyle = {
    display: "inline-block",
    border: "1px solid black",
  };

  const buttonStyle = {
    padding: "5px 20px",
    marginRight: "10px",
  };

  const onStyle = {
    backgroundColor: isOn ? "green" : "white",
  };

  const offStyle = {
    backgroundColor: isOn ? "white" : "red",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: isOn ? "green" : "red",
  };

  return (
    <div>
      <div
        style={{ ...commonStyle, ...buttonStyle, ...onStyle }}
        onClick={() => setIsOn(true)}
      >
        On
      </div>
      <div
        style={{ ...commonStyle, ...buttonStyle, ...offStyle }}
        onClick={() => setIsOn(false)}
      >
        Off
      </div>
      <div style={{ ...commonStyle, ...indicatorStyle }}></div>
    </div>
  );
};

export default UncontrolledOnOff;
