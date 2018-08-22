import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MobileNav extends React.Component {

  state = {
    navItemsVisible: false
  };

  navOptions = [
    {
      link: '#about',
      icon: 'user'
    },
    {
      link: '#portfolio',
      icon: 'clipboard-list'
    },
    {
      link: '#technical',
      icon: 'laptop-code'
    },
    {
      link: '#contact',
      icon: 'envelope'
    }
  ];

  toggleNav = () => {
    this.setState(prevState => ({
      navItemsVisible: !prevState.navItemsVisible
    }));
  };


  render() {
    return (
      <nav className="header__mobile-nav">
        <div className={"header__mobile-nav-container header__mobile-nav-container--" + (this.state.navItemsVisible ? "visible" : "hidden")}>
          {this.navOptions.map((navItem, index) => (
            <AnchorLink className="link header__mobile-nav-link" href={navItem.link} offset='70' key={index}>
              <FontAwesomeIcon className="header__icon" icon={['fas', navItem.icon]} />
            </AnchorLink>
          ))}
        </div>
        <button 
          className={"header__button header__mobile-nav-button " + (this.state.navItemsVisible ? "header__mobile-nav-button--visible" : "")}
          onClick={this.toggleNav}
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
