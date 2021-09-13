import React, { useState, useEffect } from "react";
import { ContainerMatch, MatchImg, MatchP } from "./styled";
import axios from "axios";

export const MatchesPage = () => {
  const [allMatches, setAllMatches] = useState([]);

  const getAllMatches = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brayene-andrade-lovelace/matches";
    const {
      data: { matches: list },
    } = await axios.get(url);

    setAllMatches(list);
  };
  const renderAllMatches = allMatches.map(({ id, name, photo }) => {
    return (
      <li key={id}>
        <MatchImg src={photo} alt={name} />
        <MatchP>{name}</MatchP>
      </li>
    );
  });

  useEffect(() => {
    getAllMatches();
  }, []);

  return <ContainerMatch>{renderAllMatches}</ContainerMatch>;
};
