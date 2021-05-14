import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/*
  ! /repository/:aqui mostra que o path vai receber um parametro, coloca um +, indica que vai receber mais parametro
*/

const Routes = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/repository/:repository+' component={Repository} />
  </Switch>
);

export default Routes;