import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className="header">
      <h1 style={{ color: color }}>React Hooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark mode' : 'Light Mode'}</button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark mode 2' : 'Light Mode 2'}</button>
    </div>
  );
}
