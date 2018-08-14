import React from 'react';

const Contact = (props) => (
  <section className={"contact section contact--theme-" + props.theme}>
    <h2 className="heading contact__title section__title">Contact</h2>
    <a className="link contact__link section__content" href="mailto:gunnarmjohnson@gmail.com">
      gunnarmjohnson@gmail.com
    </a>
  </section>
);

export default Contact;