import React from 'react';
import OfficeList from '../components/containers/OfficeList/OfficeList';

const Offices = () => {
  const headingStyled = {
    textAlign: 'center',
    fontSize: '30px',
    padding: '20px',
  };
  return (
    <>
      <br /> <br />
      <h3 style={headingStyled}>Available Offices</h3>
      <OfficeList />
    </>
  );
};

Offices.propTypes = {};

export default Offices;
