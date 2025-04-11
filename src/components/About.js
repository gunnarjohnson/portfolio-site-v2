import React from 'react';
import aboutData from '../data/aboutData';
import useTheme from '../hooks/useTheme';

const { contentBlocks } = aboutData;

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`about section section--theme-${theme}`}
    >
      <h2 className="heading about__title section__title">About</h2>
      <p className="about__content section__content">
        {contentBlocks.map(({ content, id, introduction }) => (
          <span
            key={id}
            className="content about__content-block"
          >
            {introduction && <span className="section__content--uppercase">{introduction} </span>}
            {content}
          </span>
        ))}
      </p>
    </section>
  );
};

export default About;
