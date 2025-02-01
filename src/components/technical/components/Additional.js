import React from 'react';

const listItems = [
  {
    listItem: 'Audio',
    subListItems: ['Audition', 'Pro Tools', 'REAPER'],
  },
  {
    listItem: 'Images',
    subListItems: ['Illustrator', 'Photoshop'],
  },
  {
    listItem: 'Video',
    subListItems: ['After Effects', 'Final Cut Pro', 'Premiere Pro'],
  },
];

const Additional = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Additional</h3>
    <ul className="list technical-subset__list section__content">
      {listItems.map(({ listItem, subListItems }) => (
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
