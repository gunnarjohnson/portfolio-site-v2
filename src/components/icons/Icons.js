import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DjangoIcon from './components/DjangoIcon';
import ExpoIcon from './components/ExpoIcon';
import GatsbyIcon from './components/GatsbyIcon';
import GraphQLIcon from './components/GraphQLIcon';
import JQueryIcon from './components/JQueryIcon';
import PostCssIcon from './components/PostCssIcon';
import PostgreSQLIcon from './components/PostgreSQLIcon';
import RemixIcon from './components/RemixIcon';
import StyledComponentsIcon from './components/StyledComponentsIcon';
import TailwindCssIcon from './components/TailwindCssIcon';
import TypeScriptIcon from './components/TypeScriptIcon';
import ViteIcon from './components/ViteIcon';
import WebpackIcon from './components/WebpackIcon';

const iconTitles = {
  android: 'Android',
  apple: 'iOS',
  bootstrap: 'Bootstrap',
  css3: 'CSS3',
  coffee: 'Developer - An organism that turns coffee into code.',
  django: 'Django',
  expo: 'Expo',
  gatsby: 'Gatsby',
  graphql: 'GraphQL',
  gulp: 'Gulp',
  highcharts: 'Highcharts',
  html5: 'HTML5',
  jquery: 'jQuery',
  js: 'JavaScript',
  node: 'Node',
  php: 'PHP',
  'post-css': 'PostCSS',
  postgresql: 'PostgreSQL',
  python: 'Python',
  react: 'React',
  'react-native': 'React Native',
  remix: 'Remix',
  sass: 'Sass',
  'styled-components': 'Styled Components',
  tailwind: 'Tailwind CSS',
  ts: 'TypeScript',
  vite: 'Vite',
  vuejs: 'Vue',
  webpack: 'Webpack',
  wordpress: 'WordPress',
};

const renderIcon = (icon, iconClass, theme) => {
  switch (icon) {
    case 'coffee':
      return (
        <FontAwesomeIcon
          className={`icon ${iconClass}`}
          icon={['fas', 'coffee']}
        />
      );
    case 'django':
      return <DjangoIcon iconClass={iconClass} />;
    case 'expo':
      return <ExpoIcon iconClass={iconClass} />;
    case 'gatsby':
      return (
        <GatsbyIcon
          iconClass={iconClass}
          theme={theme}
        />
      );
    case 'graphql':
      return <GraphQLIcon iconClass={iconClass} />;
    case 'highcharts':
      return (
        <FontAwesomeIcon
          className={`icon ${iconClass}`}
          icon={['fas', 'chart-bar']}
        />
      );
    case 'jquery':
      return <JQueryIcon iconClass={iconClass} />;
    case 'post-css':
      return <PostCssIcon iconClass={iconClass} />;
    case 'postgresql':
      return <PostgreSQLIcon iconClass={iconClass} />;
    case 'react-native':
      return (
        <FontAwesomeIcon
          className={`icon ${iconClass}`}
          icon={['fab', 'react']}
        />
      );
    case 'remix':
      return <RemixIcon iconClass={iconClass} />;
    case 'styled-components':
      return <StyledComponentsIcon iconClass={iconClass} />;
    case 'tailwind':
      return <TailwindCssIcon iconClass={iconClass} />;
    case 'ts':
      return <TypeScriptIcon iconClass={iconClass} />;
    case 'vite':
      return (
        <ViteIcon
          iconClass={iconClass}
          theme={theme}
        />
      );
    case 'webpack':
      return <WebpackIcon iconClass={iconClass} />;
    default:
      return (
        <FontAwesomeIcon
          className={`icon ${iconClass}`}
          icon={['fab', icon]}
        />
      );
  }
};

const Icons = ({ iconBlock, iconClass, icons, theme }) => (
  <div className={`${iconBlock}__icon-container`}>
    {icons.map((icon) => (
      <span
        className={`${iconBlock}__icon-title`}
        title={iconTitles[icon]}
        key={icon}
      >
        {renderIcon(icon, iconClass, theme)}
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
