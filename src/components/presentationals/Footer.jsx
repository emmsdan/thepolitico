import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <footer>
      <div>
        <a href={props.footer.url}>Politico</a> powered by
        <a href={props.footer.poweredby.url}> {props.footer.poweredby.text} </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    url: PropTypes.string,
    poweredby: PropTypes.objectOf({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

export default Footer;
