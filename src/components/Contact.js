import React from 'react';

const Contact = (props) => (
  <section className="contact">
    <h2 className={"contact__title section__title section__title--" + props.theme}>Contact</h2>
    <a className={"about__content section__content section__content--" + props.theme} href="mailto:gunnarmjohnson@gmail.com">gunnarmjohnson@gmail.com</a>
  </section>
);

export default Contact;