import React from 'react';
import Confetti from 'react-confetti';

const Completed = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return <Confetti width={width} height={height} />;
};

export default Completed;
