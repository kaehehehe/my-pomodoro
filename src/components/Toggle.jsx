import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 32px;
  cursor: pointer;
`;

const LightModeIcon = styled.div`
  display: ${({ theme }) => (theme === 'dark' ? 'block' : 'none')};
  position: absolute;
  font-size: 25px;
  left: 3px;
  z-index: 100;
`;

const DarkModeIcon = styled(LightModeIcon)`
  display: ${({ theme }) => (theme === 'dark' ? 'none' : 'block')};
  left: 38px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) =>
    theme === 'dark' ? '#9da7b2' : '#1c2128'};
  border-radius: 32px;

  &::before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 300ms;
    border-radius: 50%;
    transform: ${({ theme }) => theme === 'dark' && 'translateX(33px)'};
  }

  &::after {
    content: '';
    position: absolute;
    font-size: 22px;
  }
`;

const Toggle = ({ theme, setTheme }) => {
  const handleToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <Container>
      <StyledToggle>
        <LightModeIcon theme={theme}>🌞</LightModeIcon>
        <DarkModeIcon theme={theme}>🌛</DarkModeIcon>
        <Input type="checkbox" onClick={handleToggle} />
        <Slider theme={theme} />
      </StyledToggle>
    </Container>
  );
};

export default Toggle;
