import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Technical from './technical/Technical';

class PortfolioApp extends React.Component {
  state = {
    theme: 1
  };
  
  changeTheme = () => {
    let theme = this.state.theme;
    if (theme == 3) {
      theme = 1;
    } else {
      theme = theme + 1;
    }
    this.setState({ theme });
  };

  render() {
    return (
      <div className={"app-container app-container--theme-" + this.state.theme}>
        <Header theme={this.state.theme} changeTheme={this.changeTheme} />
        <Hero theme={this.state.theme} />
        <About id="about" theme={this.state.theme} />
        <Portfolio id="portfolio" theme={this.state.theme} />
        <Technical id="technical" theme={this.state.theme} />
        <Contact id="contact" theme={this.state.theme} />
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default PortfolioApp;