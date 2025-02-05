import React from 'react';
import PropTypes from 'prop-types';
import footerData from '../../../data/footerData';

const { copyrightName, copyrightUrl, copyrightYear: defaultCopyrightYear } = footerData;

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyrightYear: defaultCopyrightYear,
      currentYear: undefined,
    };
  }

  componentDidMount() {
    const { copyrightYear } = this.state;
    const currentYear = new Date().getFullYear();

    if (currentYear !== copyrightYear) {
      this.setState({ currentYear });
    }
  }

  render() {
    const { copyrightYear, currentYear } = this.state;
    const { theme } = this.props;

    return (
      <div className="copyright">
        <p className="copyright__content section__content">
          <span className="content">
            © {copyrightYear}
            {currentYear && `–${currentYear}`}{' '}
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
  }
}

Copyright.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Copyright;
