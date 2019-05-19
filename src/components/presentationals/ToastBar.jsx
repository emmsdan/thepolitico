/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToastBar = ({ message, className }) => {
  const [ToastClass, setToastClass] = useState('show');
  return (
    <div
      className={`toast ${className} ${ToastClass}`}
      onClick={() => setToastClass('hide')}
    >
      {message}
    </div>
  );
};

ToastBar.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};

export default ToastBar;
