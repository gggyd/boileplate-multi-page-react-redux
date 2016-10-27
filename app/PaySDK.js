import React, { Component } from 'react';
import { render } from 'react-dom';
import AppStore from './AppStore';
import { Provider } from 'react-redux';
import PayOptionContainer from './container/PaySDK';

render(
  <Provider store={AppStore}>
    <PayOptionContainer />
  </Provider>,
  document.getElementById('root')
);