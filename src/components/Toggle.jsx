import React from 'react';
import styled from 'styled-components';
import '../styles/toggle.css';

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Toggle = ({ theme, setTheme }) => {
  const handleToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
      if (localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
      else localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      if (localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
      else localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <Container>
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider" onClick={handleToggle} />
      </label>
    </Container>
  );
};

export default Toggle;
