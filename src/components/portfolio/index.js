import React from 'react';

import './_portfolio.scss';

const NewsListing = props =>
  (<section className="portfolio" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="portfolio-title">Portfolio</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="portfolio-list">
            {props.data.map((item, i) =>
              (<li className="portfolio-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
