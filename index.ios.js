import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { 
  applyMiddleware,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {Router} from 'react-native-router-flux';

import shopApp from './app/reducers/index';
import scenes from './app/router';

const logger = createLogger();
var store = createStore(
              shopApp,
              applyMiddleware(thunk, promise, logger)
            );

class ShopProject extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    );
  }

}

AppRegistry.registerComponent('ShopProject', () => ShopProject);
