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
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
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
