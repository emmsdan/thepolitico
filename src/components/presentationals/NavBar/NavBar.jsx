import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { destoryToken, authenticationToken } from '../../../utils/helpers';

class NavBar extends Component {
  state = {
    isLoading: false,
  };
  LogOut = () => {
    this.setState({ isLoading: true });
    destoryToken();
    this.props.history.push('/');
  };
  render() {
    const li = [];
    this.props.pages.forEach((page, id) => {
      li.push(
        <li className={page.className} key={id}>
          <Link to={page.url}>{page.title}</Link>
        </li>,
      );
    });

    return (
      <>
        {this.state.isLoading && (
          <Loader loader="show" text="Cleaning Up... logging out" />
        )}
        <nav role="navigation">
          <ul>
            {li}
            {authenticationToken() && (
              <li>
                <Link to="#" onClick={this.LogOut}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </>
    );
  }
}

NavBar.propTypes = {
  pages: PropTypes.array,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  {},
)(NavBar);
