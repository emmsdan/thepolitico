/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { generateFormData } from '../utils/form';
import { authenticationRequestHandler } from '../store/reducers/auth';
import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';

import './Profile.scss';
import { decodeUserInfo } from '../utils/helpers';

class Profile extends Component {
  componentDidMount() {
    const { history } = this.props;
    !authenticationToken() && history.push('/');
  }

  submitResetPasswordDetails = event => {
    event.preventDefault();
    const formData = generateFormData(event.target);
    return this.props.authenticationRequestHandler(formData, 'reset', [], '/');
  };

  render() {
    const { user } = decodeUserInfo() || { user: '' };
    console.log(user);
    return (
      <>
        {this.props.auth.isLoading && (
          <Loader loader="show" text="Hi, am processing your input" />
        )}
        <section className="wrapper">
          <br />
          <div className="profile box no-radius">
            <img
              src="https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800&h=700"
              style={{
                maxWidth: '300px',
                boxShadow: 'none',
              }}
            />
            <div className="info">
              <br />
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <h3 style={{ textTransform: 'lowercase' }}>
                Tel: 0{user.phoneNumber} <br />
                Email: {`${user.email}`}
              </h3>
              <br />
              <hr />
              {!user.isAdmin && (
                <>
                  <Link
                    to="edit-profile"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="offices"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    View Offices
                  </Link>
                  <Link
                    to="parties"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    View Parties
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  authenticationRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { authenticationRequestHandler },
)(Profile);
