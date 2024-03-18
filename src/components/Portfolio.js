import React from 'react';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';
import ImgAlerttrace from '../assets/images/portfolio_alerttrace.png';
import ImgAutoquip from '../assets/images/portfolio_autoquip.png';
import ImgCore from '../assets/images/portfolio_core.png';
import ImgCreativeLibrary from '../assets/images/portfolio_creative-library.png';
import ImgEatzis from '../assets/images/portfolio_eatzis.png';
import ImgReactBoilerplate from '../assets/images/portfolio_react-boilerplate.png';
import ImgRedcoatChallenge from '../assets/images/portfolio_redcoat-challenge.png';
import ImgSalesAnalyzer from '../assets/images/portfolio_sales-analyzer.png';

const portfolioData = [
  {
    key: 'core',
    title: 'CoRe (Connected Resources)',
    content:
      'A web application used for jobsite management. Developed pages, components (maps, tables, graphs, forms, etc.), and maintained tooling.',
    image: ImgCore,
    icons: ['html5', 'css3', 'js', 'vuejs', 'node', 'postgresql'],
    codeUrl: null,
    siteUrl: 'https://vosiq.com/core-platform/',
  },
  {
    key: 'alerttrace',
    title: 'AlertTrace',
    content:
      'A web application used for contact tracing. Developed pages, components (maps, tables, graphs, forms, etc.), and documented features.',
    image: ImgAlerttrace,
    icons: ['html5', 'css3', 'js', 'vuejs', 'node', 'postgresql'],
    codeUrl: null,
    siteUrl: 'https://alerttrace.com/',
  },
  {
    key: 'creativeLibrary',
    title: 'Creative Library',
    content:
      'An enterprise web application used for marketing design analysis and strategy. Developed ES6 modules and integrated with RESTful APIs.',
    image: ImgCreativeLibrary,
    icons: ['html5', 'css3', 'js', 'jquery', 'python', 'django'],
    codeUrl: null,
    siteUrl: null,
  },
  {
    key: 'salesAnalyzer',
    title: 'Sales Analyzer',
    content:
      'An enterprise web application used for product comparison and sales evaluation. Developed tools for data calculations, complex dropdowns, modals, tables, and graphs.',
    image: ImgSalesAnalyzer,
    icons: ['html5', 'css3', 'js', 'jquery', 'bootstrap', 'highcharts'],
    codeUrl: null,
    siteUrl: null,
  },
  {
    key: 'autoquip',
    title: 'Autoquip',
    content:
      'A manufacturing website with a custom WordPress theme. Developed pages, components, and advanced search functionality.',
    image: ImgAutoquip,
    icons: ['html5', 'css3', 'sass', 'js', 'react', 'wordpress'],
    codeUrl: null,
    siteUrl: 'https://autoquip.com/',
  },
  {
    key: 'eatzis',
    title: "Eatzi's",
    content:
      "A custom WordPress plugin for a restaurant's ecommerce store. Developed features for interactive menus, multiple locations, scheduled pickups, and advanced order filtration.",
    image: ImgEatzis,
    icons: ['html5', 'css3', 'js', 'php', 'jquery', 'wordpress'],
    codeUrl: null,
    siteUrl: 'https://eatzis.com/',
  },
  {
    key: 'reactBoilerplate',
    title: 'React Boilerplate',
    content: 'A modern React boilerplate with Babel + PostCSS + Webpack.',
    image: ImgReactBoilerplate,
    icons: ['html5', 'css3', 'postcss', 'js', 'react', 'webpack'],
    codeUrl: 'https://github.com/gunnarjohnson/react-boilerplate',
    siteUrl: null,
  },
  {
    key: 'redcoatChallenge',
    title: 'The Redcoat Challenge',
    content:
      'A Gatsby site for a not-for-profit homebrew competition. Built with React and Styled Components, and deployed on Netlify.',
    image: ImgRedcoatChallenge,
    icons: ['html5', 'css3', 'js', 'gatsby', 'react', 'styledcomponents'],
    codeUrl: 'https://github.com/gunnarjohnson/redcoat-challenge/',
    siteUrl: 'https://texasredcoat.com/',
  },
];

const Portfolio = ({ theme }) => (
  <section
    id="portfolio"
    className={`portfolio section section--theme-${theme}`}
  >
    <h2 className="heading portfolio__title section__title">Portfolio</h2>
    {portfolioData.map(({ codeUrl, content, icons, image, key, siteUrl, title }) => (
      <div
        className="portfolio-item"
        key={key}
      >
        <img
          alt="Portfolio item"
          className={`portfolio-item__image portfolio-item__image--theme-${theme}`}
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
    ))}
  </section>
);

Portfolio.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Portfolio;
