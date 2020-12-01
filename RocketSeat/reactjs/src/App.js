import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import Routes from './routes';
import './styles.css';
//import logo from './logo.svg';
//import './App.css';
/*
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}*/

const App = () => (
  <div className="App">
    <Header></Header>
    <Routes></Routes>
  </div>
);

export default App;
