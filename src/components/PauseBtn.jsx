import React from 'react';
import { FaPauseCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)``;

const PauseBtn = ({ handlePauseBtn }) => {
  return (
    <StyledBtn onClick={handlePauseBtn}>
      <FaPauseCircle />
    </StyledBtn>
  );
};

export default PauseBtn;
