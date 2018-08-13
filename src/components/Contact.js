import React from 'react';

const Contact = (props) => (
  <section className={"contact section section--theme-" + props.theme}>
    <h2 className="contact__title section__title">Contact</h2>
    <a className="about__content section__content" href="mailto:gunnarmjohnson@gmail.com">
      gunnarmjohnson@gmail.com
    </a>
  </section>
);

export default Contact;