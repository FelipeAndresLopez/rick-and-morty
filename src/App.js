import './App.css';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ThemeContext, themes } from './context/ThemeContext';
import { useState } from 'react';

function App() {
  const useTheme = useState(themes.light);
  return (
    <ThemeContext.Provider value={useTheme}>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
