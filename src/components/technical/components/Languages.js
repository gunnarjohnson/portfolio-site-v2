import React from 'react';

const languagesList = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Markdown',
  'Node.js',
  'SQL',
  'Python',
  'PHP',
];

const Languages = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Languages</h3>
    <ul className="list technical-subset__list content section__content">
      {languagesList.map((language) => (
        <li
          key={language}
          className="technical-subset__list-item technical-subset__list-item--inline"
        >
          {language}
        </li>
      ))}
    </ul>
  </div>
);

export default Languages;
