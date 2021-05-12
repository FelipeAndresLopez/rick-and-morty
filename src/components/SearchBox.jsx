import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/SearchBox.css';

export const SearchBox = ({ searchInput, search, handleSearch }) => {

  const [theme] = useContext(ThemeContext);
  const isDarkModeActive = theme.type === 'dark';
  return (
    <div className={`search-box ${isDarkModeActive ? 'dark-mode' : 'light-mode'}`}>
      <input ref={searchInput} type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  )
}
