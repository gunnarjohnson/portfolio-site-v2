import React from 'react';
import PropTypes from 'prop-types';

const About = ({ theme }) => (
  <section
    id="about"
    className={`about section section--theme-${theme}`}
  >
    <h2 className="heading about__title section__title">About</h2>
    <p className="about__content section__content">
      <span className="content about__content-block">
        <span className="section__content--uppercase">
          I build web apps, mobile apps, and websites.{' '}
        </span>
        The Internet is always evolving and I love learning its new technologies. Every day affords
        fresh opportunities to innovate.
      </span>
      <span className="content about__content-block">
        When I&apos;m not developing, you might find me brewing a farmhouse ale, building a guitar
        pedal, or reading a good book. I also love to travel with my family, and we visit the PNW
        every year to seek out scenic hikes (and Portland donuts).
      </span>
      <span className="content about__content-block">
        Thanks for stopping by, and check out some of my work below!
      </span>
    </p>
  </section>
);

About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About;
