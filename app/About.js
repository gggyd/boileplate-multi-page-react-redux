import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Menu from './Menu';

require('./css/common.less');
require('./css/about.less');

class About extends Component {

  render() {
    return (
      <div className="about">
        <Menu />
        <h3>About Page</h3>
      </div>
    )
  }
}

render(<About />, document.getElementById('root'));