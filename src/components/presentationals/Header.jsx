import React from 'react';

import Image from './Image';
import logo from '../../assets/images/official/logo.png';
import NavBar from './NavBar';

const image = {
  class: 'logo',
  src: logo,
  alt: 'official politico logo',
  style: '',
};
const pages = [
  { url: '/index', title: 'Home' },
  { url: '/office', title: 'office' },
  { url: '/election-result', title: 'result' },
  { url: '/auth', title: 'My Account' },
  {
    url: '/logout',
    title: 'Logout',
    style: 'background: none;',
    class: 'inactive hide',
  },
];

const Header = () => {
  return (
    <header>
      <a href="/">
        <Image image={image} />
      </a>
      <span className="show-nav"> &#9776; </span>
      <NavBar pages={pages} />
    </header>
  );
};

export default Header;
