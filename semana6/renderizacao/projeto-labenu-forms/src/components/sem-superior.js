import React from 'react';
import styled from 'styled-components'

const General = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    button {
    margin: 10px;
}
`

class Semsuperior extends React.Component {

  render() {
    return (
      <General>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>5. Por que você não terminou um curso de graduação? </p>
        <input type='text'></input>
        <p>6. Você fez algum curso complementar? </p>
        <input type='text'></input>

        <select>
          <option>Nenhum</option>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
        </select>


      </General>
    );

  }
}

export default Semsuperior;