import React from 'react';

import './_about.scss';

const NewsListing = props =>
  (<section className="about" id="about">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="about-title">About</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="about-list">
            {props.data.map((item, i) =>
              (<li className="about-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
