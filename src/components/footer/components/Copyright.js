import React from 'react';
import footerData from '../../../data/footerData';
import useTheme from '../../../hooks/useTheme';

const { copyrightName, copyrightUrl, copyrightYear } = footerData;

const Copyright = () => {
  const { theme } = useTheme();
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

export default Copyright;
