import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  );
};

export default Routes;
