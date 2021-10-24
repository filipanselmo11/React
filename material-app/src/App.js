import React from 'react';
import Botao from './components/Botao';
import BotaoGrupo from './components/BotaoGrupo';
import CaixaSelecao from './components/CaixaSelecao';
import ComboBox from './components/ComboBox';
import Formulario from './components/Formulario';
import ValidacaoForm from './components/ValidacaoForm';

function App() {
  return (
    <div className="App">
      <ComboBox/>
      <br/>
      <Botao/>
      <br/>
      <BotaoGrupo/>
      <br/>
      <CaixaSelecao/>
      <br/>
      <Formulario/>
      <br/>
      <ValidacaoForm/>
    </div>
  );
}

export default App;
