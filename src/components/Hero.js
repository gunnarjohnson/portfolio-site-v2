import React from 'react';
import PropTypes from 'prop-types';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = ({ theme }) => (
  <section className={`hero section section--theme-${theme}`}>
    <h1 className="heading section__title hero__title">Gunnar Johnson</h1>
    <p className={`content hero__content hero__content--theme-${theme}`}>Software Engineer</p>
    <div className="hero__icon-container">
      <a
        aria-label="Visit Facebook page"
        className="link hero__icon"
        href="https://www.facebook.com/gunnarjohnson"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        aria-label="Visit GitHub page"
        className="link hero__icon"
        href="https://github.com/gunnarjohnson"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        aria-label="Visit LinkedIn page"
        className="link hero__icon"
        href="https://www.linkedin.com/in/gunnarmjohnson"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </section>
);

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Hero;
