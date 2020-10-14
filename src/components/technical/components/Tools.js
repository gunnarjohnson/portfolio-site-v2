import React from 'react';

const Tools = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Tools</h3>
    <ul className="list technical-subset__list section__content">
      <li className="technical-subset__list-item">CMS
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Netlify CMS, WordPress</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">FWKs
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Bootstrap</li>
          {','}
          <li className="technical-subset__sub-list-item">Laravel</li>
          {','}
          <li className="technical-subset__sub-list-item">PostCSS</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Git
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Bash</li>
          {','}
          <li className="technical-subset__sub-list-item">CMD</li>
          {','}
          <li className="technical-subset__sub-list-item">GitHub</li>
          {','}
          <li className="technical-subset__sub-list-item">GitLab</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Libs
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">jQuery</li>
          {','}
          <li className="technical-subset__sub-list-item">Pandas</li>
          {','}
          <li className="technical-subset__sub-list-item">React</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Misc
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Babel</li>
          {','}
          <li className="technical-subset__sub-list-item">Gulp</li>
          {','}
          <li className="technical-subset__sub-list-item">NPM</li>
          {','}
          <li className="technical-subset__sub-list-item">phpMyAdmin</li>
          {','}
          <li className="technical-subset__sub-list-item">Webpack</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Tools;