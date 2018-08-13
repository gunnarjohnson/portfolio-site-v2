import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';

const Header = (props) => (
  <header className={"header header--theme-" + props.theme}>
    <button className="header__button" onClick={props.changeTheme}>
      <FontAwesomeIcon 
        className={"header__icon header__icon--theme-" + props.theme} 
        icon={faPalette} 
      />
    </button>
  </header>
);

export default Header;