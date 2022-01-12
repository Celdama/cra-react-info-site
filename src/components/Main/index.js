import React from 'react';
import { Wrapper, Title, List } from './Main.styles';

const Main = ({ isDarkMode }) => {
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Title isDarkMode={isDarkMode}>Fun facts about React</Title>
      <List isDarkMode={isDarkMode}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </List>
    </Wrapper>
  );
};

export default Main;
