import React from 'react';
import logo from '../../logo.svg';
import { Wrapper, Nav } from './Navbar.styles';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Wrapper>
      <Nav
        isDarkMode={isDarkMode}
        className={`nav ${isDarkMode ? 'nav-dark' : ''}`}
      >
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
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
