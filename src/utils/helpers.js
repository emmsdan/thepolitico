import toastr from 'toastr';

import 'toastr/build/toastr.min.css';

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

export const authenticationToken = () => {
  return localStorage.getItem('__auth_token') || null;
};

export const storeAuthenticationToken = token => {
  if (!authenticationToken()) {
    localStorage.setItem('__auth_token', token);
  }
  return authenticationToken();
};
export const destoryToken = () => {
  localStorage.clear();
};

export const redirect = history => {
  return history;
};
