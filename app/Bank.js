import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './AppStore';
import BanksContainer from './container/banks';

require('./css/common.less');
require('./css/index.less');

render(
  <Provider store={appStore}>
    <BanksContainer />
  </Provider>, 
  document.getElementById('root'));