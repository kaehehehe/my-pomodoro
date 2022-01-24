import React, { useState, createContext } from 'react';
import './App.css';
import Timer from './components/Timer';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import SettingBtn from './components/SettingBtn';
import SettingMenu from './components/SettingMenu';
export const GlobalContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [showMenu, setShowMenu] = useState(false);
  const [times, setTimes] = useState(4);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <GlobalContext.Provider value={{ times, setTimes }}>
        <SettingBtn setShowMenu={setShowMenu} showMenu={showMenu} />
        {showMenu && <SettingMenu setShowMenu={setShowMenu} />}
        <Timer />
        <Toggle setTheme={setTheme} theme={theme} />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

export default App;
