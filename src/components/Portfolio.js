import React from 'react';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';
import portfolioData from '../data/portfolioData';

const { portfolioItems } = portfolioData;

const Portfolio = ({ theme }) => (
  <section
    id="portfolio"
    className={`portfolio section section--theme-${theme}`}
  >
    <h2 className="heading portfolio__title section__title">Portfolio</h2>
    {portfolioItems.map(
      ({ codeUrl, content, icons, image, key, shouldUseTheme, siteUrl, title }) => (
        <div
          className="portfolio-item"
          key={key}
        >
          <img
            alt="Portfolio item"
            className={`portfolio-item__image ${shouldUseTheme && `portfolio-item__image--theme-${theme}`}`}
            src={image}
          />
          <div className="portfolio-item__container">
            <h3 className="heading portfolio-item__title section__subtitle">{title}</h3>
            <p className="content portfolio-item__content section__content">{content}</p>
            <Icons
              iconBlock="portfolio-item"
              icons={icons}
              iconClass="portfolio-item__icon"
              theme={theme}
            />
            <div className="portfolio-item__link-container">
              {!!siteUrl && (
                <a
                  className={`link portfolio-item__link portfolio-item__link--theme-${theme}`}
                  href={siteUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Site
                </a>
              )}
              {!!codeUrl && (
                <a
                  className={`link portfolio-item__link portfolio-item__link--theme-${theme}`}
                  href={codeUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      ),
    )}
  </section>
);

Portfolio.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Portfolio;
