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
      <footer>
        <p className={"copyright section__content section__content--" + this.props.theme}>
          ©
          {' '}
          {this.state.copyrightYear}
          {this.state.currentYear && '-' + this.state.currentYear} 
          {' '}
          <a className={"copyright__link copyright__link--" + this.props.theme} href="https://github.com/gunnarjohnson" target="_blank">Gunnar Johnson</a>
        </p>
      </footer>
    );
  }
}

export default Copyright;