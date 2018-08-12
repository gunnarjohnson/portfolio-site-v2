import React from 'react';
import About from './About';
import Contact from './Contact';
import Copyright from './Copyright';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

class ReactApp extends React.Component {
  state = {
    theme: 'light'
  };
  
  themeLeft = () => {
    let theme = this.state.theme;
    if (theme == 'light') {
      theme = 'medium';
    } else if (theme == 'medium') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    this.setState({ theme });
  }
 
  themeRight = () => {
    let theme = this.state.theme;
    if (theme == 'light') {
      theme = 'dark';
    } else if (theme == 'medium') {
      theme = 'light';
    } else {
      theme = 'medium';
    }
    this.setState({ theme });
  }

  render() {
    return (
      <div className={"app-container app-container--" + this.state.theme}>
        <Header 
          theme={this.state.theme} 
          themeLeft={this.themeLeft}
          themeRight={this.themeRight}
        />
        <Hero theme={this.state.theme} />
        <About theme={this.state.theme} />
        <Portfolio theme={this.state.theme} />
        <Skills theme={this.state.theme} />
        <Contact theme={this.state.theme} />
        <Footer theme={this.state.theme} />
        <Copyright theme={this.state.theme} />
      </div>
    );
  }
}

export default ReactApp;