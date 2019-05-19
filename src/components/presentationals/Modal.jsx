import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const [isModalDisplay, setIsModalDisplay] = useState('flex');
  let stylux = {
    display: isModalDisplay,
  };

  return (
    <div id={props.modal.id} className="modal" style={stylux}>
      <div className={`modal-content ${props.modal.class}`}>
        <h3>{props.modal.header}</h3>
        {props.modal.content}
        <br />
        <br />
        <button
          className="blue-gray button-bigger close"
          onClick={() => setIsModalDisplay('none')}
        >
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    id: PropTypes.string,
    class: PropTypes.string,
    header: PropTypes.any,
    content: PropTypes.any,
    state: PropTypes.string,
  }),
};

export default Modal;
