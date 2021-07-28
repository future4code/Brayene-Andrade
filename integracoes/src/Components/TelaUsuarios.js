import React from "react"
import axios from "axios"
import styled from "styled-components"

const cardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`


export default  class TelaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount () {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url,{
            headers:{
                Authorization: "bray-andrade-lovelace"
            }
        })
        .then((res) => {
            this.setState ({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })

    }

    render (){
        const listaUsuarios = this.state.usuarios.map ((user) => {
            return (<cardUsuario key={user.id}>
                {user.name}
                <button>X</button>
                </cardUsuario>
                )

        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}
