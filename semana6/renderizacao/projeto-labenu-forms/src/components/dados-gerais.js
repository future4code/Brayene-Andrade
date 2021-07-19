import React from 'react';
import styled from 'styled-components'

const General = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


class Dadosgerais extends React.Component {

  render() {
    return (
      <General>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome? </p>
        <input type='text'></input>
        <p>2. Qual a sua idade? </p>
        <input type='text'></input>
        <p>3. Qual o seu e-mail?</p>
        <input type='text'></input>
        <p>4. Qual o grau de escolaridade?</p>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>


      </General>
    );

  }
}

export default Dadosgerais;