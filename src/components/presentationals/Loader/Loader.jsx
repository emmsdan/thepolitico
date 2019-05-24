import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/official/favicon.png';

const styleLoader = {
  backgroundImage: `url(${logo})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
};

const Loader = ({ loader }) => {
  return (
    <div className={`center load-overlay ${loader}`}>
      <div>
        <div className="loader center" style={styleLoader} />
        <strong>please waiting am loading content...</strong>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loader: PropTypes.string,
};

export default Loader;
