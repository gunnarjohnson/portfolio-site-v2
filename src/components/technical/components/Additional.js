import React from 'react';
import technicalData from '../../../data/technicalData';

const { additionalListItems } = technicalData;

const Additional = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Additional</h3>
    <ul className="list technical-subset__list section__content">
      {additionalListItems.map(({ listItem, subListItems }) => (
        <li
          key={listItem}
          className="technical-subset__list-item"
        >
          {listItem}
          <ul className="technical-subset__sub-list">
            {subListItems.map((subListItem) => (
              <li
                key={subListItem}
                className="technical-subset__sub-list-item"
              >
                {subListItem}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Additional;
