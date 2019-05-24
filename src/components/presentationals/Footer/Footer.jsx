import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ url, poweredby }) => {
  return (
    <footer>
      <div>
        <a href={url}>Politico</a> powered by
        <a href={poweredby.url}> {poweredby.name} </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Footer;
