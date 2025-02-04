import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Technical from './technical/Technical';

const themes = ['light', 'dark'];
const [lightTheme, darkTheme] = themes;

const PortfolioApp = () => {
  const [theme, setTheme] = useState(lightTheme);
  const changeTheme = () =>
    setTheme((previousTheme) => (previousTheme === lightTheme ? darkTheme : lightTheme));

  return (
    <div className={`app-container app-container--theme-${theme}`}>
      <Header
        theme={theme}
        changeTheme={changeTheme}
      />
      <Hero theme={theme} />
      <About theme={theme} />
      <Portfolio theme={theme} />
      <Technical theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default PortfolioApp;
