import React from 'react';

const Hero = (props) => (
  <section className={"hero section section--theme-" + props.theme}>
    <h1 className="section__title hero__title">Gunnar Johnson</h1>
    <p className={"hero__content hero__content--theme-" + props.theme}>Web Developer</p>
  </section>
);

export default Hero;