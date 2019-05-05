import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/images/official/favicon.png';

const styleLoader = {
  backgroundImage: `url(${logo})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
};

const Loader = props => {
  return (
    <div className={`center load-overlay ${props.loader}`}>
      <div>
        <div className="loader center" style={styleLoader} />
        please waiting am loading content...
      </div>
    </div>
  );
};

Loader.propTypes = {
  loader: PropTypes.string,
};

export default Loader;
