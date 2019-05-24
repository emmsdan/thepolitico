/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const FormInput = props => {
  const { id, className, title, name, placeholder, defaultValue } = props;
  return (
    <div className="field">
      <input
        {...props}
        className={className}
        name={name}
        id={id || name}
        defaultValue={defaultValue}
        placeholder={placeholder || title}
      />
      <label htmlFor={id || name}>{title}:</label>
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
