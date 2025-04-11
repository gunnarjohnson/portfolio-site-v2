import React from 'react';
import Copyright from './components/Copyright';
import Icons from '../icons/Icons';
import footerData from '../../data/footerData';
import useTheme from '../../hooks/useTheme';

const { footerIcons } = footerData;

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer footer--theme-${theme}`}>
      <Icons
        iconBlock="footer"
        icons={footerIcons}
        iconClass="footer__icon"
      />
      <Copyright />
    </footer>
  );
};

export default Footer;
