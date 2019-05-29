import React, { Component } from 'react';

import './App.scss';
import CallToAction from '../components/presentationals/CallToAction/CallToAction';
import PartyList from '../components/containers/PartyList/PartyList';
import OfficeList from '../components/containers/OfficeList/OfficeList';

class App extends Component {
  render() {
    const headingStyled = {
      textAlign: 'center',
      fontSize: '30px',
      padding: '20px',
    };
    return (
      <div>
        <CallToAction withButton={true} />
        <h3 style={headingStyled}>Available Offices</h3>
        <OfficeList />
        <h3 style={headingStyled}>Politico Parties</h3>
        <PartyList />
      </div>
    );
  }
}

export default App;
