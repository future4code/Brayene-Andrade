import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContainerHome, Profile, ProfileImg } from "./styled";



export const HomePage = () => {
    const [profile, setProfile] = useState({})


    const getProfile = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brayene-andrade-lovelace/person"   
        const res = await fetch(url)
        const json = await res.json()
        setProfile(json.profile)
    }

    const choosePerson = async (bool) => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brayene-andrade-lovelace/choose-person";
        const body = {
            id: profile.id,
            choice: bool,
        }
        const headers = {
            ContentType: "application/json"
        }

        const resp = await axios.post(url, body, headers)

        getProfile();
    }

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <ContainerHome>
            <Profile>
                <ProfileImg
                    src={profile.photo}
                />
                <h2> {profile.name}, {profile.age} </h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={() => choosePerson(false)}>❌</button>
                    <button onClick={() => choosePerson(true)}>💜</button>
                </div>
            </Profile>
        </ContainerHome>
    );
};



