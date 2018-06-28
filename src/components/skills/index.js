import React from 'react';

import './_skills.scss';

const NewsListing = props =>
  (<section className="skills" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="skills-title">Skills</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ol className="skills-list">
            {props.data.map((item, i) =>
              (<li className="skills-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ol>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
