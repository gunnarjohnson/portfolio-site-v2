import React from 'react';
import technicalData from '../../../data/technicalData';

const { toolsListItems } = technicalData;

const Tools = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Tools</h3>
    <ul className="list technical-subset__list section__content">
      {toolsListItems.map(({ listItem, subListItems }) => (
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

export default Tools;
