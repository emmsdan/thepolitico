import toastr from 'toastr';
import jwt from 'jsonwebtoken';

import 'toastr/build/toastr.min.css';
import axios from 'axios';

toastr.options = {
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
  closeMethod: 'slideUp',
  progressBar: false,
  closeButton: true,
  hideDuration: 500,
  positionClass: 'toast-top-center',
  timeOut: 8000,
  preventDuplicates: true,
};

export const toastbar = toastr;

export const encodeUserInfo = user => {
  const encode = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      user,
    },
    process.env.PrivateKey,
  );
  localStorage.setItem('__auth_token_verifier', encode);
};

export const decodeUserInfo = () => {
  return jwt.decode(localStorage.getItem('__auth_token_verifier'));
};

export const authenticationToken = () => {
  return localStorage.getItem('__auth_token') || null;
};

export const storeAuthenticationToken = user => {
  if (!authenticationToken()) {
    localStorage.setItem('__auth_token', user.token);
    encodeUserInfo(user.user);
  }
  return authenticationToken();
};
export const destoryToken = () => {
  localStorage.clear();
};

export const redirect = history => {
  return history;
};

export const http = axios.create({
  baseURL: process.env.HOST_URL,
  headers: { 'x-access-token': authenticationToken() },
});
