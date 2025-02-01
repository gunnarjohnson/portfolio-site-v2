import React from 'react';

const listItems = [
  'Front-End Architecture',
  'Responsive Web Design',
  'Semantic Markup',
  'UX Principles',
  'Version Control',
];

const Expertise = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Expertise</h3>
    <ul className="list technical-subset__list section__content">
      {listItems.map((listItem) => (
        <li
          key={listItem}
          className="technical-subset__list-item"
        >
          {listItem}
        </li>
      ))}
    </ul>
  </div>
);

export default Expertise;
