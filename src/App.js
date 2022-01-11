import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <Navbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main isDarkMode={darkMode} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
