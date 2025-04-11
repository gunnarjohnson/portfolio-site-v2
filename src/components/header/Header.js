import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Media from 'react-media';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header header--theme-${theme}`}>
      <button
        aria-label="Change theme"
        className="button header__button"
        onClick={toggleTheme}
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
};

export default Header;
