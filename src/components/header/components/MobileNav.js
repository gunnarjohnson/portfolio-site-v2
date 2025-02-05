import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headerData from '../../../data/headerData';

const { navOptions } = headerData;

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItemsVisible: false,
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      navItemsVisible: !prevState.navItemsVisible,
    }));
  };

  render() {
    const { navItemsVisible } = this.state;

    return (
      <nav className="header__mobile-nav">
        <div
          className={`header__mobile-nav-container header__mobile-nav-container--${navItemsVisible ? 'visible' : 'hidden'}`}
        >
          {navOptions.map(({ icon, key, url }) => (
            <AnchorLink
              className="link header__mobile-nav-link"
              href={url}
              offset="70"
              key={key}
            >
              <FontAwesomeIcon
                className="header__icon"
                icon={['fas', icon]}
              />
            </AnchorLink>
          ))}
        </div>
        <button
          aria-label="Toggle nav"
          className={`header__button header__mobile-nav-button ${navItemsVisible ? 'header__mobile-nav-button--visible' : ''}`}
          onClick={this.toggleNav}
          type="button"
        >
          <FontAwesomeIcon
            className="header__icon header__icon--mobile"
            icon={['fas', 'plus-circle']}
          />
        </button>
      </nav>
    );
  }
}

export default MobileNav;
