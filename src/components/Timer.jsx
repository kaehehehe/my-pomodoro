import React, { useState } from 'react';
import PlayBtn from './PlayBtn';
import PauseBtn from './PauseBtn';
import { GlobalStyles } from '../theme';
import styled from 'styled-components';

const StyledTimer = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('00');
  let TIME = 25 * 60 - 1;

  const timer = () => {
    const min = Math.floor(TIME / 60);
    const sec = TIME % 60;
    TIME--;
    setMinutes(min < 10 ? `0${min}` : min);
    setSeconds(sec < 10 ? `0${sec}` : sec);
  };

  const handlePlayBtn = () => {
    setIsPaused(!isPaused);
    const timeoutId = setInterval(() => {
      timer();
      if (TIME === -1) {
        clearInterval(timeoutId);
      }
    }, 1000);
  };

  const handlePauseBtn = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <GlobalStyles />
      <StyledTimer>{`${minutes} : ${seconds}`}</StyledTimer>
      {isPaused ? (
        <PlayBtn handlePlayBtn={handlePlayBtn} />
      ) : (
        <PauseBtn handlePauseBtn={handlePauseBtn} />
      )}
    </>
  );
};

export default Timer;
