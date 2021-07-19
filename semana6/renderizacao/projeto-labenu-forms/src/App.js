import React from 'react';
import styled from 'styled-components';
import Dadosgerais from './components/dados-gerais';
import Comsuperior from './components/com-superior';
import Semsuperior from './components/sem-superior';
import Agradecimento from './components/agradecimento';

const General = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
  margin: 10px;
}
`

class App extends React.Component {
  render() {
    return (
      <General>
        <Dadosgerais/>
        <button>Próxima etapa</button>
      </General>
    );
  }
}
export default App;
