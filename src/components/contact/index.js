import React from 'react';

import './_contact.scss';

const NewsListing = props =>
  (<section className="contact" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="contact-title">Contact</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="contact-list">
            {props.data.map((item, i) =>
              (<li className="contact-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
