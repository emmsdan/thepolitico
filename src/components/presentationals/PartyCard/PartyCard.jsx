import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PartyCard.scss';
import Image from '../Image/Image';

const PartyCard = ({ id, logourl, name, hqaddress, className }) => {
  return (
    <div className={className}>
      <Link to={`/party/${id}/${name}`}>
        <Image src={`${process.env.IMAGE_CLOUD}/${logourl}`} className="" />
        <div className="back">
          {className !== 'party-card-1' && (
            <div>
              <br />
              <Image
                src={`${process.env.IMAGE_CLOUD}/${logourl}`}
                style={{
                  width: '150px',
                  height: '150px',
                  position: 'absolute',
                  left: '34%',
                  opacity: 1,
                  boxShadow: '0 1px 2px #000',
                }}
              />
              <br />
              <br />
              <br />
            </div>
          )}
          <h1>
            {name}
            <span>{hqaddress}</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

PartyCard.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  hqaddress: PropTypes.string,
  id: PropTypes.string,
  logourl: PropTypes.string,
};

export default PartyCard;
