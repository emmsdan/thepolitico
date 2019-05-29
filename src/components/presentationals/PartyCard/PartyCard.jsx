import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PartyCard.scss';
import Image from '../Image/Image';
const PartyCard = ({ id, logourl, name, hqaddress }) => {
  return (
    <div className="party-card">
      <Link to={`/party/${id}/${name}`}>
        <Image src={`${process.env.IMAGE_CLOUD}/${logourl}`} className="" />
        <div className="info">
          <h2>{name}</h2>
          {hqaddress}
        </div>
      </Link>
    </div>
  );
};

PartyCard.propTypes = {
  name: PropTypes.string,
  hqaddress: PropTypes.string,
  id: PropTypes.string,
  logourl: PropTypes.string,
};

export default PartyCard;
