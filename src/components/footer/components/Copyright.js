import React from 'react';
import PropTypes from 'prop-types';
import footerData from '../../../data/footerData';

const { copyrightName, copyrightUrl, copyrightYear } = footerData;

const Copyright = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  const shouldDisplayCurrentYear = currentYear > copyrightYear;

  return (
    <div className="copyright">
      <p className="copyright__content section__content">
        <span className="content">
          © {copyrightYear}
          {shouldDisplayCurrentYear && `–${currentYear}`}{' '}
        </span>
        <a
          className={`link copyright__link copyright__link--theme-${theme}`}
          href={copyrightUrl}
          rel="noreferrer"
          target="_blank"
        >
          {copyrightName}
        </a>
      </p>
    </div>
  );
};

Copyright.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Copyright;
