import React from 'react';
import PropTypes from 'prop-types';

const NavBar = props => {
  const li = [];
  props.pages.forEach((page, id) => {
    li.push(
      <li className={page.className} key={id}>
        <a href={page.url}>{page.title}</a>
      </li>,
    );
  });
  return (
    <nav role="navigation">
      <ul> {li} </ul>
    </nav>
  );
};

NavBar.propTypes = {
  pages: PropTypes.array,
};

export default NavBar;
