import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ id, className, header, content, action }) => {
  const [isModalDisplay, setIsModalDisplay] = useState('flex');
  let stylux = {
    display: isModalDisplay,
  };

  return (
    <div id={id} className="modal" style={stylux}>
      <div className={`modal-content ${className}`}>
        <h3>{header}</h3>
        <div> {content} </div> <br />
        {action && (
          <button
            className={`blue-gray button-bigger ${
              action.button.className
            } close`}
            onClick={() => action.onClick()}
          >
            {action.button.text}
          </button>
        )}
        <button
          className="blue-gray button-bigger close right"
          onClick={() => setIsModalDisplay('none')}
        >
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.any,
  content: PropTypes.any,
  action: PropTypes.any,
  state: PropTypes.string,
};

export default Modal;
