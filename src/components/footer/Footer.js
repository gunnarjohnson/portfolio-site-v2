import React from 'react';
import Copyright from './components/Copyright';
import Icons from '../icons/Icons';

class Footer extends React.Component {
  footerData = {
    icons: ['html5', 'css3', 'postcss', 'js', 'react', 'webpack', 'coffee']
  };
  
  render() {
    return (
      <footer className={"footer footer--theme-" + this.props.theme}>
        <Icons 
          iconContainer="footer__icon-container"
          icons={this.footerData.icons}
          iconClass="footer__icon"
        />
        <Copyright theme={this.props.theme} />
      </footer>
    );
  }
}

export default Footer;