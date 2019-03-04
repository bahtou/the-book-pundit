import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './reduxStore';

import App from './App';

import 'Styles/normalizer.css';
import '!style-loader!css-loader!Styles/global.css';
// import '!style-loader!css-loader!Styles/mobileFirst.css';


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root-entry')
);
