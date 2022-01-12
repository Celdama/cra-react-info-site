import React from 'react';
import logo from '../../logo.svg';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <nav className={`nav ${isDarkMode ? 'nav-dark' : ''}`}>
        <div className='nav-left'>
          <img src={logo} className='logo' alt='react-logo' />
          <h3>ReactFacts</h3>
        </div>
        <div className='nav-right'>
          <div className='toggle-mode'>
            <span>Light</span>
            <label className='switch'>
              <input type='checkbox' onChange={toggleDarkMode} />
              <span
                className={`slider round ${
                  isDarkMode ? 'dark-span dark-slider' : ''
                }`}
              ></span>
            </label>
            <span>Dark</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
