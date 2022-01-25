import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { StyledTimer } from '../styles/timer';

const Timer = styled(StyledTimer)``;

const FiveMinutesTimer = ({ setBreakTime }) => {
  const [minutes, setMinutes] = useState('05');
  const [seconds, setSeconds] = useState('00');
  const intervalRef = useRef(null);

  useEffect(() => {
    let TIME = 5 * 60 - 1;
    intervalRef.current = setInterval(() => {
      const min = Math.floor(TIME / 60);
      const sec = TIME % 60;
      TIME--;
      setMinutes(min < 10 ? `0${min}` : min);
      setSeconds(sec < 10 ? `0${sec}` : sec);
      if (TIME === -1) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setBreakTime(false);
      }
    }, 1000);
  }, [setBreakTime]);

  return <Timer>{`${minutes} : ${seconds}`}</Timer>;
};

export default FiveMinutesTimer;
