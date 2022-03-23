import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

const getTimer = () => {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes() + seconds / 60;
  const hours = date.getHours() + minutes / 60;

  const hoursDeg = (hours / 12) * 360 - 90;
  const minutesDeg = (minutes / 60) * 360 - 90;
  const secondsDeg = (seconds / 60) * 360 - 90;

  return {
    timeString: date.toLocaleTimeString(),
    hoursDeg,
    minutesDeg,
    secondsDeg,
  };
};

type PropsType = {
  isAnalog?: boolean;
};

export const Clock: React.FC<PropsType> = ({ isAnalog = false }) => {
  const [timer, setTimer] = useState(getTimer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(getTimer);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {!isAnalog ? (
        <div>{timer.timeString}</div>
      ) : (
        <div className={styles.analog}>
          <div
            className={styles.hoursHand}
            style={{
              transform: `translate(0, -50%) rotate(${timer.hoursDeg}deg)`,
            }}
          ></div>
          <div
            className={styles.minutesHand}
            style={{
              transform: `translate(0, -50%) rotate(${timer.minutesDeg}deg)`,
            }}
          ></div>
          <div
            className={styles.secondsHand}
            style={{
              transform: `translate(0, -50%) rotate(${timer.secondsDeg}deg)`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};
