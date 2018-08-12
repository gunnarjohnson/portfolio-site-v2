import React from 'react';

const Hero = (props) => (
  <section className="hero">
    <h1 className={"section__title hero__title section__title--" + props.theme}>Gunnar Johnson</h1>
    <p className={"hero__content hero__content--" + props.theme}>Web Developer</p>
  </section>
);

export default Hero;