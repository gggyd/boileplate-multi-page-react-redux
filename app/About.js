import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Menu from './Menu';
import Activity from './container/activity';
import AppStore from './AppStore';

require('./css/common.less');
require('./css/about.less');


render(<Provider store={AppStore}>
        <Activity />
      </Provider>, document.getElementById('root'));