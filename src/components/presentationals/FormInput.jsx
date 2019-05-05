/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = props => {
  return (
    <div className="field">
      <input
        className={props.input.class}
        name={props.input.name}
        id={props.input.id}
        value={props.input.value}
        placeholder={props.input.placeholder || ''}
      />
      <label htmlFor={props.input.id}>{props.input.title}:</label>
    </div>
  );
};

FormInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    class: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};

export default FormInput;
