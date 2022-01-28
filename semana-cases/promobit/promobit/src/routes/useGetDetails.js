import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import baseUrl from "./useGetPopular"
import language from "./useGetPopular"
import { GeneralContainer } from "../pages/details/styled";
import Card from "../components/Card";
import { TextContainer } from "../pages/details/styled";

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams()
  const history = useHistory()

  const goBack = () => history.push("/")


  const getMovieDetails = () => {
    axios.get(`${baseUrl}/${id}?api_key=${process.env.REACT_APP_API_KEY}&${language}`)
      .then((res) => {
        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  
  useEffect(() => {
    getMovieDetails()
  }, [])
  
  const formatDate = (date) => {
    return date.split("-").reverse().join("/")
  }

  const formatedDate = movie && movie.release_date && formatDate(movie.release_date)

  return (
    <GeneralContainer>
      <button onClick={goBack()}> Back to Home </button>
      <Card key={movie && movie.title}>
        <img style={movie && movie.title && { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }} />
      </Card>
      <TextContainer>
        <h1>{movie.title}</h1>
        <h3>{movie.tagline}</h3>
        <h5>Título original: {movie.original_title}</h5>
        <h4>{movie.overview}</h4>
        <h5>Data de lançamento: {formatedDate}</h5>
      </TextContainer>
    </GeneralContainer>
  );
}

export default MovieDetails;