
import React from 'react';
import ListaFlat from './src/components/ListaFlat';
import Loading from './src/components/Loading';
import Touch from './src/components/Touch';
import Status from './src/components/Status';
import SwitchComponent from './src/components/SwitchComponent';

export default function App() {
  return (
    <div>
      <ListaFlat />
      <Loading />
      <Touch/>
      <Status/>
      <SwitchComponent/>
    </div>

  );
}


