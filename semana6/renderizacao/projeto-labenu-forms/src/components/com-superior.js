import React from 'react';
import styled from 'styled-components'

const General = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


class Comsuperior extends React.Component {

    render() {
        return (
            <General>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso? </p>
                <input type='text'></input>
                <p>6. Qual a sua unidade de ensino? </p>
                <input type='text'></input>

            </General>
        );

    }
}

export default Comsuperior;