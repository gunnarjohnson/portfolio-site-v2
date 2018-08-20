import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => (
  <header className={"header header--theme-" + props.theme}>
    <button className="button header__button" onClick={props.changeTheme}>
      <FontAwesomeIcon 
        className={"header__icon header__icon--theme-" + props.theme} 
        icon={['fas', 'adjust']}
      />
    </button>
    <nav className="header__nav section__content">
      <a className="link header__nav-link" href="#about">About</a>
      <a className="link header__nav-link" href="#portfolio">Portfolio</a>
      <a className="link header__nav-link" href="#technical">Technical Skills</a>
      <a className="link header__nav-link" href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;