import React from 'react';
import PropTypes from 'prop-types';

const FormButton = props => {
  return (
    <div className="field">
      <button
        {...props}
        type={props.type}
        className={`button-bigger ${props.className}`}
      >
        {props.text}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FormButton;
