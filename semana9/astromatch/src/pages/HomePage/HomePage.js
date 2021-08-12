import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContainerHome, Profile, ProfileImg } from "./styled";



export const HomePage = () => {
   const [profile, setProfile] = useState ({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bray-andrade-lovelace/person"
   
    useEffect (() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url) 
        .then((res) => {
          setProfile(res.data.profile)

        }) 
        .catch((error) => {
            setProfile(error.response)

        })
    }

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bray-andrade-lovelace/choose-person",
    const body = {
        id: "71gMbZs2txS9LDvGK5Ew",
        choice: true,
    }
    const header =

    const choosePerson = () => {
        axios.post(url,body,header)
        .then((res) => {
            console.log (res)

        })
        .catch ((error) => {
            console.log (error)

        })

    }
    // saber se a escolha foi X ou <3
    // fazer a requisição choose person (post)
    // no caso de sucesso (then), pedir mais um perfil


  return (
    <ContainerHome>
      <Profile>
        <ProfileImg
          src={profile.photo}
        />
        <h2> {profile.name}, {profile.age} </h2>
        <p>{profile.bio}</p>
        <div>
          <button onClick={choosePerson}>❌</button>
          <button onClick={choosePerson}>💜</button>
        </div>
      </Profile>
    </ContainerHome>
  );
};
