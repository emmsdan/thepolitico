import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return (
    <form {...props} className="form-fields">
      <fieldset className="fieldset">
        <legend>{props.header}</legend>
        {props.children}
      </fieldset>
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.any,
  children: PropTypes.any,
};

export default Form;
