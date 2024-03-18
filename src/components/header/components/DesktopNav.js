import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DesktopNav = () => (
  <nav className="header__desktop-nav">
    <AnchorLink
      className="link header__desktop-nav-link section__content"
      href="#about"
      offset="70"
    >
      About
    </AnchorLink>
    <AnchorLink
      className="link header__desktop-nav-link section__content"
      href="#portfolio"
      offset="70"
    >
      Portfolio
    </AnchorLink>
    <AnchorLink
      className="link header__desktop-nav-link section__content"
      href="#technical"
      offset="70"
    >
      Skills
    </AnchorLink>
    <AnchorLink
      className="link header__desktop-nav-link section__content"
      href="#contact"
      offset="70"
    >
      Contact
    </AnchorLink>
  </nav>
);

export default DesktopNav;
