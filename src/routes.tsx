import React from 'react';
import { Route, Switch } from 'react-router';

import Phone from 'components/pages/Phone';
import Phones from 'components/pages/Phones';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path="/phones/:id" component={Phone} />
    </Switch>
  );
};

export default Router;
