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
      <div className={"copyright section section--theme-" + this.props.theme}>
        <p className="section__content">
          ©
          {' '}
          {this.state.copyrightYear}
          {this.state.currentYear && '-' + this.state.currentYear} 
          {' '}
          <a 
            className={"copyright__link copyright__link--theme-" + this.props.theme}
            href="https://github.com/gunnarjohnson" target="_blank"
          >
            Gunnar Johnson
          </a>
        </p>
      </div>
    );
  }
}

export default Copyright;