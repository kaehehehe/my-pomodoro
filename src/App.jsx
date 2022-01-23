import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Timer />
      <Toggle setTheme={setTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
