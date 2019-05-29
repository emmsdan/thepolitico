import React from 'react';
import PropTypes from 'prop-types';

import CallToAction from '../components/presentationals/CallToAction/CallToAction';
import PartyList from '../components/containers/PartyList';

const ViewParty = ({ match }) => {
  return (
    <>
      <CallToAction withButton={true} />
      <br /> <br />
      <PartyList partyId={match.params.partyid} />
      <br /> <br />
      <CallToAction withButton={true} />
    </>
  );
};

ViewParty.propTypes = {
  match: PropTypes.object,
};

export default ViewParty;
