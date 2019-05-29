import React from 'react';
import CallToAction from '../components/presentationals/CallToAction/CallToAction';
import PartyList from '../components/containers/PartyList';

const Parties = () => {
  return (
    <>
      <CallToAction withButton={true} />
      <br /> <br />
      <PartyList />
      <br /> <br />
      <CallToAction withButton={true} />
    </>
  );
};

Parties.propTypes = {};

export default Parties;
