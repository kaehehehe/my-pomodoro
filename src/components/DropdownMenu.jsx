import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { GlobalContext } from '../App';

const Dropdown = styled.div`
  position: relative;
  width: 60px;
  height: 50px;
  cursor: pointer;
`;

const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 0 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.dropdown};
  color: ${({ theme }) => theme.dropdownFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

const DefaultNum = styled.div`
  font-size: 35px;
`;

const Options = styled.ul`
  display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
  position: absolute;
  font-size: 35px;
  top: 70px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.dropdown};
  color: ${({ theme }) => theme.dropdownFont};
  border-radius: 10px;
  list-style: none;
  overflow: hidden;

  li {
    text-align: center;
  }

  li:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.dropdownHover};
    color: ${({ theme }) => theme.dropdownFontHover};
  }
`;

const DropdownMenu = ({ showDropdown, setShowDropdown }) => {
  const { times, setTimes } = useContext(GlobalContext);

  const handleOption = (e) => {
    switch (e.target.id) {
      case '1':
        setTimes(1);
        setShowDropdown(false);
        localStorage.setItem('times', 1);
        break;
      case '2':
        setTimes(2);
        setShowDropdown(false);
        localStorage.setItem('times', 2);
        break;
      case '3':
        setTimes(3);
        setShowDropdown(false);
        localStorage.setItem('times', 3);
        break;
      case '4':
        setTimes(4);
        setShowDropdown(false);
        localStorage.setItem('times', 4);
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown>
      <TextBox onClick={() => setShowDropdown(!showDropdown)}>
        <DefaultNum>{times}</DefaultNum>
        {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
      </TextBox>
      <Options showDropdown={showDropdown}>
        <li id="1" onClick={handleOption}>
          1
        </li>
        <li id="2" onClick={handleOption}>
          2
        </li>
        <li id="3" onClick={handleOption}>
          3
        </li>
        <li id="4" onClick={handleOption}>
          4
        </li>
      </Options>
    </Dropdown>
  );
};

export default DropdownMenu;
