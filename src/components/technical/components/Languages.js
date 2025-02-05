import React from 'react';
import technicalData from '../../../data/technicalData';

const { languagesListItems } = technicalData;

const Languages = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Languages</h3>
    <ul className="list technical-subset__list content section__content">
      {languagesListItems.map((listItem) => (
        <li
          key={listItem}
          className="technical-subset__list-item technical-subset__list-item--inline"
        >
          {listItem}
        </li>
      ))}
    </ul>
  </div>
);

export default Languages;
