import React, { Component } from 'react';

import './App.scss';
import CallToAction from './presentationals/CallToAction/CallToAction';
import PartyList from './containers/PartyList';

class App extends Component {
  render() {
    return (
      <div>
        <CallToAction withButton={true} />
        <PartyList />
      </div>
    );
  }
}

export default App;
