/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../components/presentationals/Loader/Loader';
import { authenticationToken } from '../utils/helpers';

import './Profile.scss';
import { decodeUserInfo } from '../utils/helpers';
import Table from '../components/presentationals/Table/Table';
import { getPartyRequestHandler } from '../store/reducers/party';

class Profile extends Component {
  componentDidMount() {
    const { history } = this.props;
    !authenticationToken() && history.push('/');
    this.props.getPartyRequestHandler('', 'parties');
  }

  submitResetPasswordDetails = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.props);
    const parties = this.props.parties.parties.map(party => ({
      id: party.id,
      logo: party.logourl,
      title: party.name,
      description: party.hqaddress,
    }));
    const { user } = decodeUserInfo() || { user: '' };
    const table = {
      header: {
        one: 'Logo',
        two: 'party name',
        three: 'HEAD QUARTER ADDRESS',
      },
      content: [...parties],
    };
    return (
      <>
        {this.props.parties.isLoading && (
          <Loader loader="show" text="Hi, fetching data" />
        )}
        <section className="wrapper">
          <br />
          <div className="profile box no-radius">
            <img
              src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
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

              {user.isAdmin && (
                <>
                  <Link
                    to="offices"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    Create a new Office
                  </Link>
                  <Link
                    to="parties/create"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    Create a new Party
                  </Link>
                  <Link
                    to="candidate/create"
                    className="button"
                    style={{ margin: '5px', padding: '15px' }}
                  >
                    Register a Candidate
                  </Link>
                </>
              )}
            </div>
          </div>
          <h1 className="centered-text biggest-text">Political Parties</h1>
          <br />
          <Table {...table} />
        </section>
      </>
    );
  }
}

Profile.propTypes = {
  parties: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  getPartyRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { parties: state.parties };
};

export default connect(
  mapStateToProps,
  { getPartyRequestHandler },
)(Profile);
