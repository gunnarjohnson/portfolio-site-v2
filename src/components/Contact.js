import React from 'react';
import contactData from '../data/contactData';
import useTheme from '../hooks/useTheme';

const { emailAddress } = contactData;

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className={`contact section contact--theme-${theme}`}
    >
      <h2 className="heading contact__title section__title">Contact</h2>
      <a
        className="link contact__link section__content"
        href={`mailto:${emailAddress}`}
      >
        {emailAddress}
      </a>
    </section>
  );
};

export default Contact;
