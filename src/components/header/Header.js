import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Media from 'react-media';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

const Header = ({ changeTheme, theme }) => (
  <header className={`header header--theme-${theme}`}>
    <button
      aria-label="Change theme"
      className="button header__button"
      onClick={changeTheme}
      type="button"
    >
      <FontAwesomeIcon
        className={`header__icon header__icon--desktop header__icon--theme-${theme}`}
        icon={['fas', 'adjust']}
      />
    </button>
    <Media query="(min-width: 768px)">
      {(matches) => (matches && <DesktopNav />) || <MobileNav />}
    </Media>
  </header>
);

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
