import React, { Component } from 'react';

import './App.scss';
import CallToAction from './presentationals/CallToAction/CallToAction';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="toothy"> Welcome to the Politico. </h1>
        <CallToAction withButton={true} />
      </div>
    );
  }
}

export default App;
