import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Technical from './technical/Technical';
import useTheme from '../hooks/useTheme';

const PortfolioApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container app-container--theme-${theme}`}>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Technical />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioApp;
