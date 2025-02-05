import React from 'react';
import PropTypes from 'prop-types';
import aboutData from '../data/aboutData';

const About = ({ theme }) => (
  <section
    id="about"
    className={`about section section--theme-${theme}`}
  >
    <h2 className="heading about__title section__title">About</h2>
    <p className="about__content section__content">
      {aboutData.map(({ content, id, introduction }) => (
        <span
          key={id}
          className="content about__content-block"
        >
          {introduction && <span className="section__content--uppercase">{introduction} </span>}
          {content}
        </span>
      ))}
    </p>
  </section>
);

About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About;
