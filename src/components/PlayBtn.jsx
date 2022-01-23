import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)``;

const PlayBtn = ({ start }) => {
  return (
    <StyledBtn onClick={start}>
      <FaPlayCircle />
    </StyledBtn>
  );
};

export default PlayBtn;
