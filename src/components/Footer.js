import React from 'react';
import Copyright from './Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer className={"section section--theme-" + props.theme}>
    <div className="section__content" />
    <Copyright theme={props.theme} />
  </footer>
);

export default Footer;