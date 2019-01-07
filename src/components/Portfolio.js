import React from 'react';
import Icons from './icons/Icons';
import ImgAutoquip from '../assets/images/portfolio_autoquip.png';
import ImgReactBoilerplate from '../assets/images/portfolio_react-boilerplate.png';
import ImgLilyDesert from '../assets/images/portfolio_lily-desert.png';
import ImgOffDist from '../assets/images/portfolio_off-dist.png';
import ImgPomodoroClock from '../assets/images/portfolio_pomodoro-clock.png';
import ImgSupplyChain from '../assets/images/portfolio_supply-chain.png';

class Portfolio extends React.Component {
  portfolioData = [
    {
      title: 'Autoquip', 
      content: 'A client website with a custom WordPress theme. Developed pages, components, advanced search functionality, etc.',
      image: ImgAutoquip,
      url: 'https://autoquip.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'sass', 'js', 'react', 'wordpress']
    },
    {
      title: 'Supply Chain Automation',
      content: 'A client website with a custom WordPress theme. Developed pages, header, footer, etc.',
      image: ImgSupplyChain,
      url: 'https://supplychainautomation.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'sass', 'js', 'php', 'wordpress']
    },
    {
      title: 'Office Furniture Distributors',
      content: 'A client website with a customized WordPress theme. Developed pages, forms, footer, etc.',
      image: ImgOffDist,
      url: 'https://ofdist.com/',
      type: 'Site',
      icons: ['html5', 'css3', 'js', 'php', 'jquery', 'wordpress']
    },
    {
      title: 'Lily of the Desert',
      content: 'A client website with multiple WordPress themes. Developed new pages for existing website and added multi-theme functionality.',
      image: ImgLilyDesert,
      url: 'http://www.lilyofthedesert.com/',
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
      title: 'Pomodoro Clock',
      content: 'An interval timer web app built on top of my own custom React boilerplate.',
      image: ImgPomodoroClock,
      url: 'https://gunnarjohnson.github.io/fcc-pomodoro-clock/',
      type: 'App',
      icons: ['html5', 'css3', 'postcss', 'js', 'react', 'webpack'],
      code: 'https://github.com/gunnarjohnson/fcc-pomodoro-clock'
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