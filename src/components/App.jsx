import React, { Component } from 'react';

import './App.scss';
import CallToAction from './presentationals/CallToAction/CallToAction';

class App extends Component {
  render() {
    return (
      <div>
        <CallToAction withButton={true} />
      </div>
    );
  }
}

export default App;
