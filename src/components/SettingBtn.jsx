import React from 'react';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';
import { Button } from '../styles/button';

const StyledBtn = styled(Button)`
  font-size: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all 300ms ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

const SettingBtn = ({ setShowMenu, showMenu }) => {
  return (
    <StyledBtn>
      <FiSettings onClick={() => setShowMenu(!showMenu)} />
    </StyledBtn>
  );
};

export default SettingBtn;
