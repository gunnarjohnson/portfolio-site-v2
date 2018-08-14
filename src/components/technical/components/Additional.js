import React from 'react';

const Additional = () => (
  <div className="technical-subset">
    <h3 className="heading technical-subset__title section__subtitle">Additional</h3>
    <ul className="list technical-subset__list section__content">
      <li className="technical-subset__list-item">Audio
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Audition</li>
          {','}
          <li className="technical-subset__sub-list-item">Pro Tools</li>
          {','}
          <li className="technical-subset__sub-list-item">REAPER</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Graphics
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Illustrator</li>
          {','}
          <li className="technical-subset__sub-list-item">Photoshop</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Music
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">Bass/Guitar</li>
          {','}
          <li className="technical-subset__sub-list-item">Piano/Synth</li>
          {','}
          <li className="technical-subset__sub-list-item">Voice</li>
        </ul>
      </li>
      <li className="technical-subset__list-item">Video
        <ul className="technical-subset__sub-list">
          <li className="technical-subset__sub-list-item">After Effects</li>
          {','}
          <li className="technical-subset__sub-list-item">Final Cut Pro</li>
          {','}
          <li className="technical-subset__sub-list-item">Premiere Pro</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Additional;