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

const Icons = ({ iconBlock, iconClass, icons, theme }) => (
  <div className={`${iconBlock}__icon-container`}>
    {icons.map((icon) => (
      <span
        className={`${iconBlock}__icon-title`}
        title={iconTitles[icon]}
        key={icon}
      >
        {(icon === 'coffee' && (
          <FontAwesomeIcon
            className={`icon ${iconClass}`}
            icon={['fas', 'coffee']}
          />
        )) ||
          (icon === 'django' && <DjangoIcon iconClass={iconClass} />) ||
          (icon === 'expo' && <ExpoIcon iconClass={iconClass} />) ||
          (icon === 'jquery' && <JQueryIcon iconClass={iconClass} />) ||
          (icon === 'gatsby' && (
            <GatsbyIcon
              iconClass={iconClass}
              theme={theme}
            />
          )) ||
          (icon === 'graphql' && <GraphQLIcon iconClass={iconClass} />) ||
          (icon === 'highcharts' && (
            <FontAwesomeIcon
              className={`icon ${iconClass}`}
              icon={['fas', 'chart-bar']}
            />
          )) ||
          (icon === 'post-css' && <PostCssIcon iconClass={iconClass} />) ||
          (icon === 'postgresql' && <PostgreSQLIcon iconClass={iconClass} />) ||
          (icon === 'react-native' && (
            <FontAwesomeIcon
              className={`icon ${iconClass}`}
              icon={['fab', 'react']}
            />
          )) ||
          (icon === 'remix' && <RemixIcon iconClass={iconClass} />) ||
          (icon === 'styled-components' && <StyledComponentsIcon iconClass={iconClass} />) ||
          (icon === 'tailwind' && <TailwindCssIcon iconClass={iconClass} />) ||
          (icon === 'ts' && <TypeScriptIcon iconClass={iconClass} />) ||
          (icon === 'vite' && (
            <ViteIcon
              iconClass={iconClass}
              theme={theme}
            />
          )) ||
          (icon === 'webpack' && <WebpackIcon iconClass={iconClass} />) || (
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
