import React from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import { AppContainer } from "./styled";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "bray-andrade-lovelace",
  },
};

export default class App extends React.Component {
  state = {
    playlist: [],
    inputValue: "",
    mostraPlaylist: false,
  };

  pegaPlaylist = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarPlaylist = async () => {
    const body = {
      name: this.state.inputValue,
    };

    await axios.post(url, body, headers);
  };

  pegaListaPlaylist = async () => {
    const res = await axios.get(url, headers);
    this.setState({ playlist: res.data.result.list, mostraPlaylist: true });
  };

  deletaPlaylist = () => {};

  render() {
    const renderizaLista = this.state.playlist.map(({ name, id }) => {
      return <li key={id}>{name}</li>;
    });

    return (
      <div>
        <Header />
        <AppContainer>
          <input
            placeholder={"Digite a sua playlist"}
            value={this.state.inputValue}
            onChange={this.pegaPlaylist}
          />
          <button onClick={this.criarPlaylist}> Criar Playlist </button>
          <button onClick={this.pegaListaPlaylist}>
            Ver lista de Playlists
          </button>
          <ul>{this.state.mostraPlaylist && renderizaLista}</ul>
        </AppContainer>
      </div>
    );
  }
}
