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
import {
  getPartyRequestHandler,
  getPartyDeleteRequestHandler,
} from '../store/reducers/party';
import Modal from '../components/presentationals/Modal/Modal';
import {
  getOfficeRequestHandler,
  getOfficeDeleteRequestHandler,
} from '../store/reducers/office';

class Profile extends Component {
  state = {
    isDeleting: false,
    currentItem: null,
    isDeletePartyModal: false,
    isDeleteOfficeModal: false,
  };
  componentDidMount() {
    const { history } = this.props;
    !authenticationToken() && history.push('/');
    this.props.getPartyRequestHandler('', 'parties');
    this.props.getOfficeRequestHandler('', 'offices');
  }

  deleteParties = () => {
    this.props.getPartyDeleteRequestHandler(this.state.currentItem);
    this.setState({ isDeletePartyModal: false });
  };

  deleteOffice = () => {
    this.props.getOfficeDeleteRequestHandler(this.state.currentItem);
    this.setState({ isDeleteOfficeModal: false });
  };

  render() {
    const parties = this.props.parties.parties.map(party => ({
      id: party.id,
      logo: party.logourl,
      title: party.name,
      description: party.hqaddress,
    }));
    const offices = this.props.offices.offices.map(office => ({
      id: office.id,
      title: office.name,
      description: office.name,
    }));
    const { user } = decodeUserInfo() || { user: '' };
    const partyTable = {
      header: {
        one: 'Logo',
        two: 'party name',
        three: 'HEAD QUARTER ADDRESS',
      },
      content: [...parties],
      onClick: (name, id) =>
        this.setState({ currentItem: { name, id }, isDeletePartyModal: true }),
    };
    const officeTable = {
      header: {
        one: 'id',
        two: 'office type',
        three: 'office name',
      },
      content: [...offices],
      onClick: (name, id) =>
        this.setState({ currentItem: { name, id }, isDeleteOfficeModal: true }),
    };
    return (
      <>
        {this.props.parties.isLoading && (
          <Loader loader="show" text="Hi, fetching data" />
        )}
        {this.state.isDeletePartyModal && (
          <Modal
            header="Do you want to Delete"
            content={`${this.state.currentItem.name}?`}
            closeAction={() => this.setState({ isDeletePartyModal: false })}
            action={{
              button: { className: 'red', text: 'delete' },
              onClick: this.deleteParties,
            }}
          />
        )}
        {this.state.isDeleteOfficeModal && (
          <Modal
            header="Do you want to Delete"
            content={`${this.state.currentItem.name}?`}
            closeAction={() => this.setState({ isDeleteOfficeModal: false })}
            action={{
              button: { className: 'red', text: 'delete' },
              onClick: this.deleteOffice,
            }}
          />
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
                    to="offices/create"
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
          {user.isAdmin && (
            <>
              <h1 className="centered-text biggest-text">Political Offices</h1>
              <br />
              <Table {...officeTable} />
              <h1 className="centered-text biggest-text">Political Parties</h1>
              <br />
              <Table {...partyTable} />
            </>
          )}
        </section>
      </>
    );
  }
}

Profile.propTypes = {
  parties: PropTypes.object,
  offices: PropTypes.object,
  url: PropTypes.string,
  poweredby: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
  getPartyRequestHandler: PropTypes.func.isRequired,
  getOfficeRequestHandler: PropTypes.func.isRequired,
  getPartyDeleteRequestHandler: PropTypes.func.isRequired,
  getOfficeDeleteRequestHandler: PropTypes.func.isRequired,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => {
  return { parties: state.parties, offices: state.offices };
};

export default connect(
  mapStateToProps,
  {
    getPartyRequestHandler,
    getPartyDeleteRequestHandler,
    getOfficeRequestHandler,
    getOfficeDeleteRequestHandler,
  },
)(Profile);
