import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import logo from '../../assets/images/official/logo.png';
import NavBar from '../NavBar';

const Header = ({ pages }) => {
  return (
    <header>
      <a href="/">
        <Image className="logo" src={logo} alt="official politico logo" />
      </a>
      <span className="show-nav"> &#9776; </span>
      <NavBar pages={pages} />
    </header>
  );
};

Header.propTypes = {
  pages: PropTypes.any,
};

export default Header;
