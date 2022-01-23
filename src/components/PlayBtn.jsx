import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)``;

const PlayBtn = ({ handlePlayBtn }) => {
  return (
    <StyledBtn onClick={handlePlayBtn}>
      <FaPlayCircle />
    </StyledBtn>
  );
};

export default PlayBtn;
