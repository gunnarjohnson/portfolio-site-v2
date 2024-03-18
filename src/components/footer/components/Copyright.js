import React from 'react';
import PropTypes from 'prop-types';

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyrightYear: 2018,
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
            href="https://github.com/gunnarjohnson/portfolio-site-v2"
            rel="noreferrer"
            target="_blank"
          >
            Gunnar Johnson
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
