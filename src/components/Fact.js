import React from 'react';
import logo from '../logo.svg';

const Fact = () => {
  return (
    <div>
      <nav>
        <img src={logo} className='App-logo' alt='react-logo' />
      </nav>
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
};

export default Fact;
