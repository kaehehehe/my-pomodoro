import React from 'react';
import { FaPauseCircle } from 'react-icons/fa';

const PauseBtn = ({ handlePauseBtn }) => {
  return (
    <button onClick={handlePauseBtn}>
      <FaPauseCircle />
    </button>
  );
};

export default PauseBtn;
