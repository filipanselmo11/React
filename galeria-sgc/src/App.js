
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardDeck from './components/CardDeck/CardDeck';
import listaImagens from './data/listaUrlsImagens';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CardDeck listaImagens={listaImagens} />
        <Footer />
      </div>

    );
  }
}

export default App;
