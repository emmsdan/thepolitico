import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/app.css';
import Header from './components/presentationals/Header';
import Footer from './components/presentationals/Footer';
import Loader from './components/presentationals/Loader';
import ToastBar from './components/presentationals/ToastBar';
import FormInput from './components/presentationals/FormInput';
import FormButton from './components/presentationals/FormButton';
import Modal from './components/presentationals/Modal';
import Form from './components/presentationals/Form';

const footer = {
  poweredby: {
    url: 'http://emmsdan.com',
    text: 'emmsdan',
  },
  url: 'http://emmsdan.com/php',
};
const form = {
  id: 'form',
  className: '',
  button: {
    className: 'red',
    text: 'delete',
    onClick: () =>
      alert("ToastBar toast={{ class: 'show', message: 'deleted' }} />"),
  },
};
const input = {
  title: 'enter address',
  name: 'address',
  className: 'red',
  id: 'delete',
  onClick: () =>
    alert("ToastBar toast={{ class: 'show', message: 'deleted' }} />"),
};
const button = {
  ...input,
  text: 'register',
  className: 'blue',
  type: 'reset',
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
    <Loader loader="show" />
    <Header />
    <ToastBar message="I am a toastbar" className="show" />
    <Form {...form}>
      <FormInput {...input} />
      <FormInput
        name="email"
        type="email"
        title="email reset"
        className="blue-gray"
        defaultValue="ecomje@fmail.com"
      />
      <FormButton {...button} />
    </Form>
    <Modal {...model} />
    <Footer footer={footer} />
  </BrowserRouter>,
  document.getElementById('the-politico-app'),
);
