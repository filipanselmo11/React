
import { Container } from '@material-ui/core'
import Cabecalho from './components/Cabecalho/Cabecalho';
import Formulario from './components/Formulario/Formulario';


export default function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Cabecalho />
      <Formulario />

    </Container>
  );
}

