import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  return <img src={props.image.src} className={props.image.class} />;
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    class: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.string,
  }),
};

export default Image;
