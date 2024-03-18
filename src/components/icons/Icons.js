import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DjangoIcon from './components/DjangoIcon';
import GatsbyIcon from './components/GatsbyIcon';
import JQueryIcon from './components/JQueryIcon';
import PostCssIcon from './components/PostCssIcon';
import PostgreSQLIcon from './components/PostgreSQLIcon';
import StyledComponentsIcon from './components/StyledComponentsIcon';
import WebpackIcon from './components/WebpackIcon';

const iconTitles = {
  bootstrap: 'Bootstrap',
  css3: 'CSS3',
  coffee: 'Developer - An organism that turns coffee into code.',
  django: 'Django',
  gatsby: 'Gatsby',
  gulp: 'Gulp',
  highcharts: 'Highcharts',
  html5: 'HTML5',
  jquery: 'jQuery',
  js: 'JavaScript',
  node: 'Node',
  php: 'PHP',
  postcss: 'PostCSS',
  postgresql: 'PostgreSQL',
  python: 'Python',
  react: 'React',
  sass: 'Sass',
  styledcomponents: 'Styled Components',
  vuejs: 'Vue',
  webpack: 'Webpack',
  wordpress: 'WordPress',
};

const Icons = ({ iconBlock, iconClass, icons, theme }) => (
  <div className={`${iconBlock}__icon-container`}>
    {icons.map((icon) => (
      <span
        className={`${iconBlock}__icon-title`}
        title={iconTitles[icon]}
        key={icon}
      >
        {(icon === 'django' && <DjangoIcon iconClass={iconClass} />) ||
          (icon === 'jquery' && <JQueryIcon iconClass={iconClass} />) ||
          (icon === 'gatsby' && (
            <GatsbyIcon
              iconClass={iconClass}
              theme={theme}
            />
          )) ||
          (icon === 'highcharts' && (
            <FontAwesomeIcon
              className={`icon ${iconClass}`}
              icon={['fas', 'chart-bar']}
            />
          )) ||
          (icon === 'postcss' && <PostCssIcon iconClass={iconClass} />) ||
          (icon === 'postgresql' && <PostgreSQLIcon iconClass={iconClass} />) ||
          (icon === 'styledcomponents' && <StyledComponentsIcon iconClass={iconClass} />) ||
          (icon === 'webpack' && <WebpackIcon iconClass={iconClass} />) ||
          (icon === 'coffee' && (
            <FontAwesomeIcon
              className={`icon ${iconClass}`}
              icon={['fas', 'coffee']}
            />
          )) || (
            <FontAwesomeIcon
              className={`icon ${iconClass}`}
              icon={['fab', icon]}
            />
          )}
      </span>
    ))}
  </div>
);

Icons.propTypes = {
  iconBlock: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string.isRequired,
};

export default Icons;
