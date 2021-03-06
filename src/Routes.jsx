import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Parties from './pages/Parties';
import ViewParty from './pages/ViewParty';
import Offices from './pages/Offices';
import Profile from './pages/Profile';
import CreateParty from './pages/CreateParty';
import CreateOffice from './pages/CreateOffice';

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
      <Route path="/offices" exact component={Offices} />

      <Route path="/account" exact component={Profile} />
      <Route path="/parties/create" exact component={CreateParty} />
      <Route path="/offices/create" exact component={CreateOffice} />
    </Switch>
  );
};

export default Routes;
