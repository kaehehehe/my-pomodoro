import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import applause from '../sounds/applause.mp3';

const Completed = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [play] = useSound(applause, { volume: 0.2 });

  useEffect(() => {
    play();
  }, [play]);
  return <Confetti width={width} height={height} />;
};

export default Completed;
