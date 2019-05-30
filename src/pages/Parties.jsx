import React from 'react';
import { Link } from 'react-router-dom';

import CallToAction from '../components/presentationals/CallToAction/CallToAction';
import PartyList from '../components/containers/PartyList/PartyList';
import { decodeUserInfo } from '../utils/helpers';

const Parties = () => {
  const { user } = decodeUserInfo() || { user: '' };
  return (
    <>
      {!user.isAdmin && <CallToAction withButton={true} />}
      <br />
      <br />
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        {user.isAdmin && (
          <>
            <Link
              to="offices"
              className="button"
              style={{
                margin: '5px',
                padding: '15px',
              }}
            >
              Create a new Office
            </Link>
            <Link
              to="parties/create"
              className="button"
              style={{
                margin: '5px',
                padding: '15px',
              }}
            >
              Create a new Party
            </Link>
            <Link
              to="candidate/create"
              className="button"
              style={{
                margin: '5px',
                padding: '15px',
              }}
            >
              Register a Candidate
            </Link>
          </>
        )}
      </div>
      <br />
      <PartyList />
      <br /> <br />
      <CallToAction withButton={true} />
    </>
  );
};

Parties.propTypes = {};

export default Parties;
