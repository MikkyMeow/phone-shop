import Phones from 'components/Pages/Phones';
import React from 'react';
import { Route, Switch } from 'react-router';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Phones} exact />
    </Switch>
  );
};

export default Router;
