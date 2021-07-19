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
  state = {
    etapa: 1,


  };

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:  
        return <Dadosgerais/>
      case 2:
        return <Comsuperior/>
      case 3:
        return <Semsuperior/>
      case 4:
        return <Agradecimento/>
      default:
        break
    }
    
  }

  changeEtapa = () => {
    this.setState({etapa:this.state.etapa + 1})
  }
  
  render() {
    return (
      <General>
        {this.renderizaEtapa()} 
         { this.state.etapa <4 && <button onClick={this.changeEtapa}>Próxima etapa</button>}
      </General>
    );
  }
}
export default App;
