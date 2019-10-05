import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

/*Determina as rotas a serem acessadas, se baseando na igualdade do path
com a URL atual; no caso da primeira rota, Login, foi adicionado o exact
para não acontecer de sempre direcionar para a mesma rota, já que todas
as outras também possuém "/" no path*/

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}