import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

class CandidateCard extends Component {
  state = {
    isLoading: false,
  };
  verifyVoter = () => {
    const { office, party } = this.props;
    // eslint-disable-next-line no-console
    console.log(office, party);
  };
  render() {
    const { office, party, name, passporturl } = this.props;
    const modal = {
      action: {
        button: {
          className: 'red',
          text: 'Yes Vote',
        },
        onClick: this.verifyVoter,
      },
      header: 'do you want to vote this users?',
      closeAction: () => {
        return this.setState({ isLoading: false });
      },
    };
    return (
      <div className="profile-card">
        {this.state.isLoading && <Modal {...modal} />}
        <img src={passporturl} />
        <img
          src={party.logourl}
          alt={`${party.logourl} party`}
          className="party"
        />
        <div className="info">
          <h1> {name} </h1>
          <h4>
            @{office.name} -- <small> {office.type}</small>
          </h4>
        </div>
        <button
          className="button vote-user"
          onClick={() => this.setState({ isLoading: true })}
        >
          Vote Me
        </button>
      </div>
    );
  }
}

CandidateCard.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  passporturl: PropTypes.string,
  office: PropTypes.object,
  party: PropTypes.object,
};

const mapStateToProps = state => {
  return { offices: state.offices };
};

export default connect(
  mapStateToProps,
  {},
)(CandidateCard);
