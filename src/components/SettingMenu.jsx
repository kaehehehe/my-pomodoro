import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import { Background } from '../styles/background';

const Menu = styled.div`
  position: absolute;
  top: 60px;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.menu};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const Name = styled.span`
  font-size: 30px;
`;

const SettingMenu = ({ setShowMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickBackground = (e) => {
    if (e.target.id === 'bg') {
      setShowMenu(false);
    }
  };

  const handleClickMenu = (e) => {
    if (e.target.id === 'menu') {
      setShowDropdown(false);
    }
  };

  return (
    <Background id="bg" onClick={handleClickBackground}>
      <Menu id="menu" onClick={handleClickMenu}>
        <Name>목표 세트 횟수</Name>
        <DropdownMenu
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </Menu>
    </Background>
  );
};

export default SettingMenu;
