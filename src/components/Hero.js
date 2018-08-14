import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';

const Hero = (props) => (
  <section className={"hero section section--theme-" + props.theme}>
    <h1 className="section__title hero__title">Gunnar Johnson</h1>
    <p className={"hero__content hero__content--theme-" + props.theme}>Web Developer</p>
    <div className="hero__icon-container">
      <a className="hero__icon" href="https://www.facebook.com/gunnarjohnson" target="_blank">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a className="hero__icon" href="https://github.com/gunnarjohnson" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a className="hero__icon" href="https://www.linkedin.com/in/gunnarmjohnson" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </section>
);

export default Hero;
