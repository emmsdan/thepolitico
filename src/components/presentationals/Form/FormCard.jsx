import React from 'react';
import PropTypes from 'prop-types';

const FormCard = props => {
  return (
    <form {...props} className="form-fields">
      <fieldset className="fieldset">
        <legend>{props.header}</legend>
        {props.children}
      </fieldset>
    </form>
  );
};

FormCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.any,
  children: PropTypes.any,
};

export default FormCard;
