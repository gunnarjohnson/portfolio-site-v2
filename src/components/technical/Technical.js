import React from 'react';
import Additional from './subset/Additional';
import Languages from './subset/Languages';
import Skills from './subset/Skills';
import Tools from './subset/Tools';

const Technical = (props) => (
  <section className={"technical section section--theme-" + props.theme}>
    <h2 className="technical__title section__title">Technical Skills</h2>
    <Skills />
    <Tools />
    <Languages />
    <Additional />
  </section>
);

export default Technical;