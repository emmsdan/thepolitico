import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Parties from './pages/Parties';
import ViewParty from './pages/ViewParty';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/reset-password" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/parties" exact component={Parties} />
      <Route path="/party/:partyid/:partyname" exact component={ViewParty} />
    </Switch>
  );
};

export default Routes;
