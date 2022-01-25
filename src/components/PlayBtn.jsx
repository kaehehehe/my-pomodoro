import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)`
  display: ${({ breakTime }) => (breakTime ? 'none' : 'block')};
`;

const PlayBtn = ({ start, breakTime }) => {
  return (
    <StyledBtn onClick={start} breakTime={breakTime}>
      <FaPlayCircle />
    </StyledBtn>
  );
};

export default PlayBtn;
