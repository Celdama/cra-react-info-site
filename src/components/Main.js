import React from 'react';

const Main = ({ isDarkMode }) => {
  return (
    <main className={`${isDarkMode ? 'main-dark' : ''}`}>
      <h1 className={`main--title ${isDarkMode ? 'title-dark' : ''}`}>
        Fun facts about React
      </h1>
      <ul className={`main--facts ${isDarkMode ? 'facts-dark' : ''}`}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
