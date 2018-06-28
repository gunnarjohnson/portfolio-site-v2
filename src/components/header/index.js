import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">
              PF v2
            </span>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <a href="#about">About</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#skills">Skills</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
