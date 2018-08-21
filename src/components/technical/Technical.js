import React from 'react';
import Additional from './components/Additional';
import Expertise from './components/Expertise';
import Languages from './components/Languages';
import Tools from './components/Tools';

const Technical = (props) => (
  <section id="technical" className={"technical section section--theme-" + props.theme}>
    <h2 className="heading technical__title section__title">Technical Skills</h2>
    <Expertise />
    <Tools />
    <Languages />
    <Additional />
  </section>
);

export default Technical;