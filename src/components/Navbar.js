import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <div className='nav-left'>
          <img src={logo} className='logo' alt='react-logo' />
          <h3>ReactFacts</h3>
        </div>
        <div className='nav-right'>
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
