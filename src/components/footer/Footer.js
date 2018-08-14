import React from 'react';
import Copyright from './components/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <footer className={"footer section footer--theme-" + props.theme}>
    <Copyright theme={props.theme} />
  </footer>
);

export default Footer;