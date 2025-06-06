import React from 'react';
import PropTypes from 'prop-types';

const RemixIcon = ({ iconClass }) => (
  <svg
    className={`svg-inline--fa fa-js fa-w-14 icon ${iconClass}`}
    fill="none"
    viewBox="0 0 411 473"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M392.946 364.768C397.201 419.418 397.201 445.036 397.201 473H270.756C270.756 466.909 270.865 461.337 270.975 455.687C271.317 438.123 271.674 419.807 268.828 382.819C265.067 328.667 241.748 316.634 198.871 316.634H160.883H0V218.109H204.889C259.049 218.109 286.13 201.633 286.13 158.011C286.13 119.654 259.049 96.4098 204.889 96.4098H0V0H227.456C350.069 0 411 57.9117 411 150.42C411 219.613 368.123 264.739 310.201 272.26C359.096 282.037 387.681 309.865 392.946 364.768Z"
      fill="currentColor"
    />
    <path
      d="M0 473V399.553H133.697C156.029 399.553 160.878 416.116 160.878 425.994V473H0Z"
      fill="currentColor"
    />
  </svg>
);

RemixIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
};

export default RemixIcon;
