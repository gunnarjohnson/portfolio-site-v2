import React from 'react';

const Languages = () => (
  <div className="technical-subset">
    <h3 className="technical-subset__title section__subtitle">Languages</h3>
    <ul className="technical-subset__list section__content">
      <li className="technical-subset__list-item">CSS3
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Sass</li>
          {','}
          <li className="technical-subset__sub-list-item">BEM</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">HTML5</li>
      <li className="technical-subset__list-item">JavaScript
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">ES6</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">PHP</li>
    </ul>
  </div>
);

export default Languages;