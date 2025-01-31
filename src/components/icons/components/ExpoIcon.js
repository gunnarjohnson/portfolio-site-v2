import React from 'react';
import PropTypes from 'prop-types';

const ExpoIcon = ({ iconClass }) => (
  <svg
    className={`svg-inline--fa fa-js fa-w-14 icon ${iconClass}`}
    fill="currentColor"
    viewBox="0 0 24 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.39 8.269c.19-.277.397-.312.565-.312.168 0 .447.035.637.312 1.49 2.03 3.95 6.075 5.765 9.06 1.184 1.945 2.093 3.44 2.28 3.63.7.714 1.66.269 2.218-.541.549-.797.701-1.357.701-1.954 0-.407-7.958-15.087-8.759-16.309C14.027.98 13.775.683 12.457.683h-.988c-1.315 0-1.505.297-2.276 1.472C8.392 3.377.433 18.057.433 18.463c0 .598.153 1.158.703 1.955.558.81 1.518 1.255 2.218.54.186-.19 1.095-1.684 2.279-3.63 1.815-2.984 4.267-7.029 5.758-9.06z" />
  </svg>
);

ExpoIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
};

export default ExpoIcon;
