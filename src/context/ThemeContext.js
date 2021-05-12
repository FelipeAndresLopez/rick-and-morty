import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    type: 'light'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    type: 'dark'
  }
};


export const ThemeContext = React.createContext(themes.light);
