import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/app.css';
import Header from './components/presentationals/Header';
import Footer from './components/presentationals/Footer';
import Loader from './components/presentationals/Loader';
import ToastBar from './components/presentationals/ToastBar';
import FormInput from './components/presentationals/FormInput';
import Modal from './components/presentationals/Modal';

const footer = {
  poweredby: {
    url: 'http://emmsdan.com',
    text: 'emmsdan',
  },
  url: 'http://emmsdan.com/php',
};
const input = {
  id: 'address',
  class: '',
  title: 'enter address',
  name: 'address',
};
const model = {
  state: 'flex',
  header: 'header area',
  content: 'content area',
  action: {
    button: {
      className: 'red',
      text: 'delete',
    },
    onClick: () =>
      alert("ToastBar toast={{ class: 'show', message: 'deleted' }} />"),
  },
};

ReactDOM.render(
  <BrowserRouter>
    <Loader loader="hide" />
    <Header />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ToastBar message="I am a toastbar" className="show" />
    <FormInput input={input} />
    <Modal {...model} />
    <Footer footer={footer} />
  </BrowserRouter>,
  document.getElementById('the-politico-app'),
);
