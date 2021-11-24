import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/index";

const UseGetPopular = () => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3/movie";
  const language = "language=ptBR";
  const page = 1;
  const urlCompleta = `${baseUrl}/popular?api_key=c56c279174975dd02f2c3dab8e58636e&${language}&page=${page}`;

  const retornaDados = async () => {
    let response;

    try {
      response = await axios.get(`${urlCompleta}`);
    } catch (error) {
      console.log("Página não encontrada");
    } finally {
      setMovies(response.data.results);

      console.log(response.data.results);
      return response?.data;
    }
  }

  const mostraTela = () => {
    const renderizaFilmes = movies.map(({title, release_date, poster_path}) => {
        
        return <Card title={title} release_date={release_date} img={poster_path} />
    })
    return renderizaFilmes
  }

  useEffect(() => {
      retornaDados();
    }, []);
    return <div>{mostraTela()}</div> 
    



}

export default UseGetPopular;
