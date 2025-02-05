import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroData from '../data/heroData';

const { heroContent, heroIcons, heroTitle } = heroData;

const Hero = ({ theme }) => (
  <section className={`hero section section--theme-${theme}`}>
    <h1 className="heading section__title hero__title">{heroTitle}</h1>
    <p className={`content hero__content hero__content--theme-${theme}`}>{heroContent}</p>
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
