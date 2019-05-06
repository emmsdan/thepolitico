import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';
import AuthenticationPage from './pages/Authentication.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/auth" exact component={AuthenticationPage} />
    </Switch>
  );
};

export default Routes;
