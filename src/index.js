import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import './components/css/reset.css';
import './components/css/index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider store ={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
