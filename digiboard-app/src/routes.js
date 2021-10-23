import React from "react";
import { Route, Switch } from "react-router-dom";


import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Lista from "./pages/Lista";

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/lista" component={Lista}></Route>
            <Route path="/cadastro" component={Cadastro}></Route>
        </Switch>
    )
}
