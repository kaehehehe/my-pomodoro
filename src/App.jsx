import React, { useState, createContext } from 'react';
import './App.css';
import Timer from './components/Timer';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import SettingBtn from './components/SettingBtn';
import SettingMenu from './components/SettingMenu';
import Completed from './components/Completed';
import RestartModal from './components/RestartModal';
export const GlobalContext = createContext(null);

const App = () => {
  const currentTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'dark';
  const selectedTimes = localStorage.getItem('times')
    ? Number(localStorage.getItem('times'))
    : 4;
  const [theme, setTheme] = useState(currentTheme);
  const [isPaused, setIsPaused] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [times, setTimes] = useState(selectedTimes);
  const [completed, setCompleted] = useState(false);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <GlobalContext.Provider
        value={{
          isPaused,
          setIsPaused,
          times,
          setTimes,
          setCompleted,
        }}
      >
        <SettingBtn setShowMenu={setShowMenu} showMenu={showMenu} isPaused={isPaused} />
        {showMenu && <SettingMenu setShowMenu={setShowMenu} />}
        {completed ? (
          <>
            <Completed /> <RestartModal />
          </>
        ) : (
          <Timer />
        )}
        <Toggle setTheme={setTheme} theme={theme} />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

export default App;
