import React from 'react';

class Copyright extends React.Component {
  state = {
    copyrightYear: 2018,
    currentYear: undefined
  };

  componentDidMount() {
    let currentYear = new Date().getFullYear();
    if (currentYear != this.state.copyrightYear) {
      this.setState({ currentYear: currentYear });
    }
  }

  render() {
    return (
      <div className="copyright">
        <p className="copyright__content section__content">
          <span className="content">
            ©
            {' '}
            {this.state.copyrightYear}
            {this.state.currentYear && '-' + this.state.currentYear} 
            {' '}
          </span>
          <a 
            className={"link copyright__link copyright__link--theme-" + this.props.theme}
            href="https://github.com/gunnarjohnson/portfolio-site-v2" target="_blank"
          >
            Gunnar Johnson
          </a>
        </p>
      </div>
    );
  }
}

export default Copyright;