import React from 'react';
import PropTypes from 'prop-types';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const heroIcons = [
  {
    ariaLabel: 'Visit Facebook page',
    icon: faFacebookSquare,
    url: 'https://www.facebook.com/gunnarjohnson',
  },
  {
    ariaLabel: 'Visit GitHub page',
    icon: faGithubSquare,
    url: 'https://github.com/gunnarjohnson',
  },
  {
    ariaLabel: 'Visit LinkedIn page',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/gunnarmjohnson',
  },
];

const Hero = ({ theme }) => (
  <section className={`hero section section--theme-${theme}`}>
    <h1 className="heading section__title hero__title">Gunnar Johnson</h1>
    <p className={`content hero__content hero__content--theme-${theme}`}>Software Engineer</p>
    <div className="hero__icon-container">
      {heroIcons.map(({ ariaLabel, icon, url }) => (
        <a
          key={url}
          aria-label={ariaLabel}
          className="link hero__icon"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  </section>
);

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Hero;
