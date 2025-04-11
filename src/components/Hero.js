import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroData from '../data/heroData';
import useTheme from '../hooks/useTheme';

const { heroContent, heroIcons, heroTitle } = heroData;

const Hero = () => {
  const { theme } = useTheme();

  return (
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
};

export default Hero;
