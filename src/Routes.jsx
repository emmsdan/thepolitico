import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';
import Login from './pages/Login';
import Register from './pages/Register.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/reset-password" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;
