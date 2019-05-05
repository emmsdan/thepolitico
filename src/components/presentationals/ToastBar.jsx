/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const ToastBar = props => {
  let state = props.toast.class;
  return <div className={`toast ${state}`}> {props.toast.message} </div>;
};

ToastBar.propTypes = {
  toast: PropTypes.shape({
    message: PropTypes.string,
    class: PropTypes.string,
  }),
};

export default ToastBar;
