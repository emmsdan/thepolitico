import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Login from './pages/Login';
import ConfirmPassword from './pages/ConfirmPassword';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/confirm-password" exact component={ConfirmPassword} />
    </Switch>
  );
};

export default Routes;
