import React from 'react';

const About = (props) => (
  <section id="about" className={"about section section--theme-" + props.theme}>
    <h2 className="heading about__title section__title">About</h2>
    <p className="about__content section__content">
      <span className="about__content-block">
        <span className="content">
          <span className="section__content--uppercase">I build web apps and websites. </span>
          The Internet is always evolving and I love learning its new technologies. 
          Every day affords fresh opportunities to innovate. 
          In addition to developing websites for clients, I enjoy working on personal projects, such as my
        </span>
        {' '}
        <a 
          className="link about__content-link" 
          href="https://github.com/gunnarjohnson/react-boilerplate" 
          target="_blank"
        >
          React Boilerplate
        </a> 
        {' '}
        <span className="content">
          - the foundation of this site.
        </span>
      </span>
      <span className="content about__content-block">
        When I'm not developing, I spend my time brewing beer, playing guitar, reading science fiction, or researching my latest esoteric interest.
        I also love to travel with my wife, and we visit the PNW at least once a year to seek out scenic hikes (and artisanal donuts).
      </span>
      <span className="content about__content-block">
        Thanks for stopping by - check out some of my work below!
      </span>
    </p>
  </section>
);

export default About;