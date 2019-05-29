import React from 'react';
import CallToAction from '../components/presentationals/CallToAction/CallToAction';
import OfficeList from '../components/containers/OfficeList/OfficeList';

const Offices = () => {
  return (
    <>
      <CallToAction withButton={true} />
      <br /> <br />
      <OfficeList />
      <br /> <br />
      <CallToAction withButton={true} />
    </>
  );
};

Offices.propTypes = {};

export default Offices;
