/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToastBar = props => {
  const [ToastClass, setToastClass] = useState('show');
  return (
    <div
      className={`toast ${props.toast.class} ${ToastClass}`}
      onClick={() => setToastClass('hide')}
    >
      {props.toast.message}
    </div>
  );
};

ToastBar.propTypes = {
  toast: PropTypes.shape({
    message: PropTypes.string,
    class: PropTypes.string,
  }),
};

export default ToastBar;
