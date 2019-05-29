import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/app.css';

import Routes from './Routes.jsx';
import store from './store/store';

import Loader from './components/presentationals/Loader/Loader';
import Header from './components/presentationals/Header/Header';
import Footer from './components/presentationals/Footer/Footer';

const MenuBar = [
  { url: '/account', title: 'My Account' },
  { url: '/parties', title: 'Parties' },
];
const footer = {
  url: './',
  poweredby: {
    url: 'http://github.com/emmsdan',
    name: 'EmmsDan',
  },
};
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Loader loader="hide" />
      <Header pages={MenuBar} />
      <main>
        <Routes />
      </main>
      <Footer {...footer} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('the-politico-app'),
);
