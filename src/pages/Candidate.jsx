import React from 'react';
import CandidateCard from '../components/presentationals/CandidateCard/CandidateCard';

const Candidate = () => {
  const headingStyled = {
    textAlign: 'center',
    fontSize: '30px',
    padding: '20px',
  };
  const candidate = {
    party: {
      id: 1,
      logourl: 'apc.png',
    },
    office: {
      type: 'senate',
      name: 'senator',
      id: 2,
    },
    name: 'emmanuel daniel',
    passporturl: 'none',
  };
  return (
    <section className="wrapper flex">
      <div className="box">
        <h3 className="centered-text" style={headingStyled}>
          Contesting Candidates
        </h3>
        <br />
        <div className="profile flex">
          <CandidateCard {...candidate} />
        </div>
      </div>
    </section>
  );
};

Candidate.propTypes = {};

export default Candidate;
