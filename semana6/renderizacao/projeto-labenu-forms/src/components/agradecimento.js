import React from 'react';
import styled from 'styled-components'

const General = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


class Agradecimento extends React.Component {

    render() {
        return (
            <General>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Agradecemos a sua participação. Entraremos em contato.</p>
            </General>
        );

    }
}

export default Agradecimento;