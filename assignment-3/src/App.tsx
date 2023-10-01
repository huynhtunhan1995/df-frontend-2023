import React, { useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';
import BookList from './components/BookList';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="py-4">
        <div className="content">
          <ReactSwitch
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
        </div>
        <BookList />
      </div>
    </div>
  );
}

export default App;
