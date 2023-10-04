import React, { useState } from 'react';
import './App.css';
import ReactSwitch from 'react-switch';
import BookList from './components/BookList';
import Header from './components/Header';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-12 col-md-3 col-xl-2 bd-sidebar" />
          <div className={`${isDarkTheme ? 'dark-theme col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content' : 'light-theme col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content'}`}>
            <div>
              <div className="d-flex">
                <ReactSwitch
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
                <span className="fw-bold">
                  Theme:
                  { isDarkTheme ? ' Dark' : ' Light'}
                </span>
              </div>
              <BookList data={isDarkTheme} />
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-2 bd-toc" />
        </div>
      </div>
    </div>
  );
}

export default App;
