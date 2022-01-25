import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/button';
import { VscDebugRestart } from 'react-icons/vsc';
import { GlobalContext } from '../App';

const StyledBtn = styled(Button)`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.baseColor};
  transition: all 250ms linear;
  &:hover {
    transform: rotate(90deg);
  }
`;

const RestartBtn = () => {
  const { setCompleted } = useContext(GlobalContext);

  return (
    <StyledBtn>
      <VscDebugRestart onClick={() => setCompleted(false)} />
    </StyledBtn>
  );
};

export default RestartBtn;
