import React from 'react';
import Additional from './components/Additional';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Tools from './components/Tools';

const Technical = (props) => (
  <section className={"technical section section--theme-" + props.theme}>
    <h2 className="heading technical__title section__title">Technical Skills</h2>
    <Skills />
    <Tools />
    <Languages />
    <Additional />
  </section>
);

export default Technical;