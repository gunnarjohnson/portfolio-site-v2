import React from 'react';
import PropTypes from 'prop-types';
import renderIcon from './renderIcon';
import iconsData from '../../data/iconsData';

const { iconTitles } = iconsData;

const Icons = ({ iconBlock, iconClass, icons, theme }) => (
  <div className={`${iconBlock}__icon-container`}>
    {icons.map((icon) => (
      <span
        className={`${iconBlock}__icon-title`}
        title={iconTitles[icon]}
        key={icon}
      >
        {renderIcon(icon, iconClass, theme)}
      </span>
    ))}
  </div>
);

Icons.propTypes = {
  iconBlock: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string.isRequired,
};

export default Icons;
