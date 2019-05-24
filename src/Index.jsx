import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/app.css';

import Routes from './Routes.jsx';
import store from './store/store';

import Loader from './components/presentationals/Loader/Loader';
import Header from './components/presentationals/Header/Header';

const MenuBar = [{ url: './account', title: 'My Account' }];

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Loader loader="hide" />
      <Header pages={MenuBar} />
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('the-politico-app'),
);
