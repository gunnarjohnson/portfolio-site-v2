import React from 'react';

const listItems = [
  {
    listItem: 'CMS',
    subListItems: ['Netlify CMS', 'Payload CMS', 'WordPress'],
  },
  {
    listItem: 'FWKs',
    subListItems: ['Vue', 'Remix', 'Gatsby', 'PostCSS', 'Tailwind CSS', 'Bootstrap', 'Laravel'],
  },
  {
    listItem: 'Libs',
    subListItems: ['React', 'React Native', 'TanStack Query', 'TanStack Router', 'jQuery'],
  },
  {
    listItem: 'Misc',
    subListItems: [
      'React Testing Library',
      'Jest',
      'Vite',
      'Webpack',
      'Sass',
      'Storybook',
      'Git',
      'PostgreSQL',
      'MySQL',
      'Figma',
    ],
  },
];

const Tools = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Tools</h3>
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

export default Tools;
