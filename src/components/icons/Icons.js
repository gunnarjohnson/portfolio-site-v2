import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GatsbyIcon from './components/GatsbyIcon';
import JQueryIcon from './components/JQueryIcon';
import PostCssIcon from './components/PostCssIcon';
import StyledComponentsIcon from './components/StyledComponentsIcon';
import WebpackIcon from './components/WebpackIcon';

class Icons extends React.Component {
  iconTitles = {
    css3: 'CSS3',
    coffee: 'Developer - An organism that turns coffee into code.',
    gatsby: 'Gatsby',
    gulp: 'Gulp',
    html5: 'HTML5',
    jquery: 'jQuery',
    js: 'JavaScript',
    php: 'PHP',
    postcss: 'PostCSS',
    react: 'React',
    sass: 'Sass',
    styledcomponents: 'Styled Components',
    webpack: 'Webpack',
    wordpress: 'WordPress'
  };

  render() {
    return(
      <div className={this.props.iconBlock + "__icon-container"}>
      {this.props.icons.map((icon, index) => (
        <span className={this.props.iconBlock + "__icon-title"} title={this.iconTitles[icon]} key={index}>
          {icon == 'jquery' && <JQueryIcon iconClass={this.props.iconClass} />
          || icon == 'gatsby' && <GatsbyIcon iconClass={this.props.iconClass} theme={this.props.theme} />
          || icon == 'postcss' && <PostCssIcon iconClass={this.props.iconClass} />
          || icon == 'styledcomponents' && <StyledComponentsIcon iconClass={this.props.iconClass} />
          || icon == 'webpack' && <WebpackIcon iconClass={this.props.iconClass} />
          || icon == 'coffee' && 
            <FontAwesomeIcon 
              className={"icon " + this.props.iconClass} 
              icon={['fas', 'coffee']}
            />
          ||
            <FontAwesomeIcon 
              className={"icon " + this.props.iconClass} 
              icon={['fab', icon]}
            />
          }
        </span>
      ))}
      </div>
    );
  }
}

export default Icons;
