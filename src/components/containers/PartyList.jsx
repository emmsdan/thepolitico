import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPartyRequestHandler } from '../../store/reducers/party';
import Loader from '../presentationals/Loader/Loader';
import PartyCard from '../presentationals/PartyCard/PartyCard';

class PartyList extends Component {
  componentDidMount() {
    this.props.getPartyRequestHandler('', 'parties');
  }

  render() {
    const parties = this.props.parties.parties.map((party, key) => {
      return <PartyCard {...party} key={key} />;
    });

    return (
      <>
        {this.props.parties.isLoading && (
          <Loader loader="show" text="Hi, am processing your input" />
        )}
        <div className="parties">
          <br /> <br />
          {parties}
        </div>
      </>
    );
  }
}

PartyList.propTypes = {
  getPartyRequestHandler: PropTypes.func.isRequired,
  parties: PropTypes.object,
  match: PropTypes.object,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return { parties: state.parties };
};

export default connect(
  mapStateToProps,
  { getPartyRequestHandler },
)(PartyList);
