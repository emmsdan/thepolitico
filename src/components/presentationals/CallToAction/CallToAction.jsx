import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { authenticationToken } from '../../../utils/helpers';

const CallToAction = ({ withButton }) => {
  const isLoggedIn = authenticationToken();
  return (
    <section className="call-to-action">
      <div className="placeholder">
        <h2>Every Vote Count</h2>
        <h4>Vote and Be Voted for</h4>
        {withButton && (
          <Link
            to={`${isLoggedIn ? 'office' : 'login'}`}
            className="default-button"
          >
            {isLoggedIn ? 'Cast your Vote' : 'Register Today'}
          </Link>
        )}
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  withButton: PropTypes.bool,
};

export default CallToAction;
