import React from 'react';
import PropTypes from 'prop-types';
import Additional from './components/Additional';
import Expertise from './components/Expertise';
import Languages from './components/Languages';
import Tools from './components/Tools';

const Technical = ({ theme }) => (
  <section
    id="technical"
    className={`technical section section--theme-${theme}`}
  >
    <h2 className="heading technical__title section__title">Technical Skills</h2>
    <Expertise />
    <Tools />
    <Languages />
    <Additional />
  </section>
);

Technical.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Technical;
