import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import { Switch } from 'react-router-dom';

function App() {

  
  return(
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React Crud EX</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>

              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>                         
            </ul>
          </div>
        </nav> <br/>
        <h2>Bem vindo ao React Crud Tutorial</h2> <br/>
        <Switch>
          <Route exact path='/create' component={ Create } />
          <Route exact path='/edit/:id' component={ Edit } />
          <Route exact path='/index' component={ Index } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
