import React from 'react';
import PropTypes from 'prop-types';
import Copyright from './components/Copyright';
import Icons from '../icons/Icons';

const footerIcons = ['html5', 'css3', 'postcss', 'js', 'react', 'webpack', 'coffee'];

const Footer = ({ theme }) => (
  <footer className={`footer footer--theme-${theme}`}>
    <Icons
      iconBlock="footer"
      icons={footerIcons}
      iconClass="footer__icon"
      theme={theme}
    />
    <Copyright theme={theme} />
  </footer>
);

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
