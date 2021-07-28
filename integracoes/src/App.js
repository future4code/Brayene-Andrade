import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaUsuarios from "./Components/TelaUsuarios";

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "Lista":
        return <TelaUsuarios irParaCadastro={this.irParaCadastro} />
    default :
      return <div>Erro! Página não encontrada :( </div>
    }

  }
  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual : "Lista"})

  }




  render() {
    return (
      <div>
       {this.escolheTela ()}
      </div>
    );
  }

}

export default App;
