import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './portfolio/Portfolio';
import Technical from './technical/Technical';

class PortfolioApp extends React.Component {
  state = {
    theme: 'light'
  };
  
  changeTheme = () => {
    let theme = this.state.theme;
    if (theme == 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    this.setState({ theme });
  };

  render() {
    return (
      <div className={"app-container app-container--theme-" + this.state.theme}>
        <Header theme={this.state.theme} changeTheme={this.changeTheme} />
        <Hero theme={this.state.theme} />
        <About theme={this.state.theme} />
        <Portfolio theme={this.state.theme} />
        <Technical theme={this.state.theme} />
        <Contact theme={this.state.theme} />
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default PortfolioApp;