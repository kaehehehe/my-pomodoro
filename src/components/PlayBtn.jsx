import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const PlayBtn = ({ handlePlayBtn }) => {
  return (
    <button onClick={handlePlayBtn}>
      <FaPlayCircle />
    </button>
  );
};

export default PlayBtn;
