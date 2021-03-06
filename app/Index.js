import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './AppStore';
import IndexContainer from './container/index';

require('./css/common.less');
require('./css/index.less');

render(
  <Provider store={appStore}>
    <IndexContainer />
  </Provider>, 
  document.getElementById('root'));