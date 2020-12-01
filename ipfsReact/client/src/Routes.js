import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Paciente } from './pages/Paciente';
import { Medico } from './pages/Medico';
import { Home } from './pages/Home';

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route>
                <Paciente/>
            </Route>
            <Route>
                <Medico/>
            </Route>
        </Switch>
    );
};