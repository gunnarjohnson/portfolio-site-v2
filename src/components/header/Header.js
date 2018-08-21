import React from 'react';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => (
  <header className={"header header--theme-" + props.theme}>
    <button className="button header__button" onClick={props.changeTheme}>
      <FontAwesomeIcon 
        className={"header__icon header__icon--desktop header__icon--theme-" + props.theme} 
        icon={['fas', 'adjust']}
      />
    </button>
    <Media query="(min-width: 768px)">
      {matches =>
        matches &&
          <DesktopNav />
        ||
          <MobileNav />
      }
    </Media>
  </header>
);

export default Header;