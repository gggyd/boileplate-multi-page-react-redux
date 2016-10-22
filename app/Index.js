import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Menu from './Menu';

require('./css/common.less');
require('./css/index.less');

class Index extends Component {

  render() {
    return (
      <div className="index">
        <Menu />
        <h3>Index Page</h3>
      </div>
    )
  }
}

render(<Index />, document.getElementById('root'));