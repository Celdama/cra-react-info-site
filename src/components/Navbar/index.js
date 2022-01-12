import React from 'react';
import logo from '../../logo.svg';
import { Wrapper, Nav, Logo, Switch, Slider } from './Navbar.styles';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Wrapper>
      <Nav isDarkMode={isDarkMode}>
        <div className='nav-left'>
          <Logo src={logo} alt='react-logo' />
          <h3>ReactFacts</h3>
        </div>
        <div className='nav-right'>
          <div className='toggle-mode'>
            <span className='toggle-light'>Light</span>
            <Switch>
              <input type='checkbox' onChange={toggleDarkMode} />
              <Slider isDarkMode={isDarkMode} className='slider round'></Slider>
            </Switch>
            <span className='toggle-dark'>Dark</span>
          </div>
        </div>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
