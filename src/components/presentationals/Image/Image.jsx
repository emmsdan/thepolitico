import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className, style }) => {
  return (
    <img src={src} className={className || ''} alt={alt || src} style={style} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.string,
};

export default Image;
