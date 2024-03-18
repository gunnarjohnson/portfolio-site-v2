import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Technical from './technical/Technical';

class PortfolioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  changeTheme = () => {
    const { theme: previousTheme } = this.state;
    const theme = previousTheme === 'light' ? 'dark' : 'light';

    this.setState({ theme });
  };

  // TODO

  render() {
    const { theme } = this.state;

    return (
      <div className={`app-container app-container--theme-${theme}`}>
        <Header
          theme={theme}
          changeTheme={this.changeTheme}
        />
        <Hero theme={theme} />
        <About theme={theme} />
        <Portfolio theme={theme} />
        <Technical theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    );
  }
}

export default PortfolioApp;
