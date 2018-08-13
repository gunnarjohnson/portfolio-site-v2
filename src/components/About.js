import React from 'react';

const About = (props) => (
  <section className={"about section section--theme-" + props.theme}>
    <h2 className="about__title section__title">About</h2>
    <p className="about__content section__content">
      <span className="section__content--uppercase">I build web apps and websites.</span> The Internet is always evolving and I love learning its new technologies. 
      Every day affords fresh opportunities to innovate. It's pretty sweet.
    </p>
  </section>
);

export default About;