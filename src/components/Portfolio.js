import React from 'react';
import Icons from './icons/Icons';
import ImgAutoquip from '../assets/images/portfolio_autoquip.png';
import ImgCreativeLibrary from '../assets/images/portfolio_creative-library.png';
import ImgEatzis from '../assets/images/portfolio_eatzis.png';
import ImgReactBoilerplate from '../assets/images/portfolio_react-boilerplate.png';
import ImgRedcoatChallenge from '../assets/images/portfolio_redcoat-challenge.png';
import ImgSalesAnalyzer from '../assets/images/portfolio_sales-analyzer.png';

class Portfolio extends React.Component {
  portfolioData = [
    {
      title: 'Creative Library',
      content: 'An enterprise web application used for marketing design analysis and strategy. Developed ES6 modules and integrated with RESTful APIs.',
      image: ImgCreativeLibrary,
      icons: ['html5', 'css3', 'js', 'jquery', 'python', 'django']
    },
    {
      title: 'Sales Analyzer',
      content: 'An enterprise web application used for product comparison and sales evaluation. Developed tools for data calculations, complex dropdowns, modals, charts, and graphs.',
      image: ImgSalesAnalyzer,
      icons: ['html5', 'css3', 'js', 'jquery', 'bootstrap', 'highcharts']
    },
    {
      title: 'Autoquip', 
      content: 'A manufacturing website with a custom WordPress theme. Developed pages, React components, and advanced search functionality.',
      image: ImgAutoquip,
      url: 'https://autoquip.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'sass', 'js', 'react', 'wordpress']
    },
    {
      title: 'Eatzi\'s', 
      content: 'A custom WordPress plugin for a restaurant\'s ecommerce store. Developed features for interactive menus, multiple locations, scheduled pickups, and advanced order filtration.',
      image: ImgEatzis,
      url: 'https://eatzis.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'js', 'php', 'jquery', 'wordpress']
    },
    {
      title: 'React Boilerplate',
      content: 'A modern React boilerplate with Babel + PostCSS + Webpack.',
      image: ImgReactBoilerplate,
      icons: ['html5', 'css3', 'postcss', 'js', 'react', 'webpack'],
      code: 'https://github.com/gunnarjohnson/react-boilerplate'
    },
    {
      title: 'The Redcoat Challenge',
      content: 'A Gatsby site for a not-for-profit homebrew competition. Built with React and Styled Components, and deployed on Netlify.',
      image: ImgRedcoatChallenge,
      url: 'https://texasredcoat.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'js', 'gatsby', 'react', 'styledcomponents'],
      code: 'https://github.com/gunnarjohnson/redcoat-challenge/'
    }
  ];

  render() {
    return(
      <section id="portfolio" className={"portfolio section section--theme-" + this.props.theme}>
        <h2 className="heading portfolio__title section__title">Portfolio</h2>
        {this.portfolioData.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img className={"portfolio-item__image portfolio-item__image--theme-" + this.props.theme} src={item.image} />
            <div className="portfolio-item__container">
              <h3 className="heading portfolio-item__title section__subtitle">{item.title}</h3>
              <p className="content portfolio-item__content section__content">{item.content}</p>
              <Icons 
                iconBlock="portfolio-item"
                icons={item.icons}
                iconClass="portfolio-item__icon"
                theme={this.props.theme}
              />
              <div className="portfolio-item__link-container">
                {!!item.type &&
                  <a 
                    className={"link portfolio-item__link portfolio-item__link--theme-" + this.props.theme} 
                    href={item.url} 
                    target="_blank"
                  >
                    Open {item.type}
                  </a>
                }
                {!!item.code && 
                  <a 
                    className={"link portfolio-item__link portfolio-item__link--theme-" + this.props.theme} 
                    href={item.code} 
                    target="_blank"
                  >
                    View Code
                  </a>  
                }
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Portfolio;