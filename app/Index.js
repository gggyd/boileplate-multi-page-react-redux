import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './AppStore';
import AirportActionCreators from './actions/AirportActionCreators';
import IndexContainer from './container/index';

require('./css/common.less');
require('./css/index.less');

render(
  <Provider store={appStore}>
    <IndexContainer />
  </Provider>, 
  document.getElementById('root'));