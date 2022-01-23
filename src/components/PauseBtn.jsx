import React from 'react';
import { FaPauseCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)``;

const PauseBtn = ({ setOpen }) => {
  return (
    <StyledBtn onClick={() => setOpen(true)}>
      <FaPauseCircle />
    </StyledBtn>
  );
};

export default PauseBtn;
