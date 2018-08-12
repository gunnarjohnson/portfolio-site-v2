import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

const Header = (props) => (
  <header className={"header header--" + props.theme}>
    <button className="header__button" onClick={props.themeLeft}>
      <FontAwesomeIcon className={"header__icon header__icon--left header__icon--" + props.theme} icon={faAngleLeft} />
    </button>
    <FontAwesomeIcon className={"header__icon header__icon--palette header__icon--" + props.theme} icon={faPalette} />
    <button className="header__button" onClick={props.themeRight}>
      <FontAwesomeIcon className={"header__icon header__icon--right header__icon--" + props.theme} icon={faAngleRight} />
    </button>
  </header>
);

export default Header;