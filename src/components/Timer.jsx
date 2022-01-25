import React, { useState, useRef, useContext } from 'react';
import PlayBtn from './PlayBtn';
import PauseBtn from './PauseBtn';
import Modal from './Modal';
import styled from 'styled-components';
import { GlobalContext } from '../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledTimer = styled.div`
  color: ${({ theme }) => theme.mainColor};
  font-size: 120px;
  text-align: center;
  margin-bottom: 20px;
`;

const Message = styled.span`
  margin-top: 30px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 80px;
`;

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('00');
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);
  const { times, setTimes, setCompleted } = useContext(GlobalContext);
  let TIME = 25 * 60 - 1;

  const timer = () => {
    const min = Math.floor(TIME / 60);
    const sec = TIME % 60;
    TIME--;
    setMinutes(min < 10 ? `0${min}` : min);
    setSeconds(sec < 10 ? `0${sec}` : sec);
  };

  const start = () => {
    setIsPaused(!isPaused);
    intervalRef.current = setInterval(() => {
      timer();
      if (TIME === -1) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTimes(times - 1);
        if (times === 1) {
          setCompleted(true);
        }
        setMinutes('25');
        setSeconds('00');
        setIsPaused(true);
      }
    }, 1000);
  };

  const reset = () => {
    setIsPaused(!isPaused);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setMinutes('25');
    setSeconds('00');
    setOpen(false);
  };

  return (
    <>
      {open && <Modal setOpen={setOpen} reset={reset} />}
      <Container>
        <StyledTimer>{`${minutes} : ${seconds}`}</StyledTimer>
        {isPaused ? <PlayBtn start={start} /> : <PauseBtn setOpen={setOpen} />}
        <Message>앞으로 {times} 세트 더!</Message>
      </Container>
    </>
  );
};

export default Timer;
