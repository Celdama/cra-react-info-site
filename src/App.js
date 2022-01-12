import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <Navbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main isDarkMode={darkMode} />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
