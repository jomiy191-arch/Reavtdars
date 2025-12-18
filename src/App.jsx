import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Main from './components/Main/Main.jsx';
import Section from './components/Section/Section.jsx';
import Arction from './components/Arction/Arction.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Section />
      <Arction />
      <Footer /> 
    </div>
  );
};

export default App;
