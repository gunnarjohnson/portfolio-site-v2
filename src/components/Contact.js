import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ theme }) => (
  <section
    id="contact"
    className={`contact section contact--theme-${theme}`}
  >
    <h2 className="heading contact__title section__title">Contact</h2>
    <a
      className="link contact__link section__content"
      href="mailto:gunnarmjohnson@gmail.com"
    >
      gunnarmjohnson@gmail.com
    </a>
  </section>
);

Contact.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Contact;
