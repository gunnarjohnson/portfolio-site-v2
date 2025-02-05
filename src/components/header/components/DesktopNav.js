import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import headerData from '../../../data/headerData';

const { navOptions } = headerData;

const DesktopNav = () => (
  <nav className="header__desktop-nav">
    {navOptions.map(({ key, url, text }) => (
      <AnchorLink
        key={key}
        className="link header__desktop-nav-link section__content"
        href={url}
        offset="70"
      >
        {text}
      </AnchorLink>
    ))}
  </nav>
);

export default DesktopNav;
