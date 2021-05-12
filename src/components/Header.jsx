import React, { useContext } from 'react';
import { ThemeContext, themes } from '../context/ThemeContext';
import '../styles/Header.css';

export const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const switchTheme = () => {
    if (theme.type === 'dark') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }
  const isDarkModeActive = theme.type === 'dark';
  return (
    <div className={`header ${isDarkModeActive ? 'dark-mode' : 'light-mode'}`}>
      <h1>Rick & Morty</h1>
      <button type="button" onClick={switchTheme}>{isDarkModeActive ? 'Dark mode' : 'Light Mode'}</button>
    </div >
  );
}
