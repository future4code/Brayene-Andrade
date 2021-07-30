import React from "react";
import axios from "axios";
import styled from "styled components"

 const stylePage = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  `


export default class App extends React.Component {

 

  state = {
    missions: []
  }

  componentDidMount () {
    this.getMissions();

  }
  getMissions = () => {
    axios.get ("https://api.spacexdata.com/v3/missions")
      .then ((res) => {
        console.log (res.data)
        this.setState ({missions: res.data})
      })
      .catch ((err) => {
        console.log (err);
      });



  } 


  render() {
    const missionsList = this.state.missions.map ((mission) => {
      return (
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name} </p>
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => 
          <p>{manufacturer} </p>)}
          </p>
          <a href={mission.wikipedia}>Link para Wikipedia  </a>
          <hr/>

        </div>

      )
    }) 
    return (
      <div>
        <h1>Missões da SpaceX</h1>
        {missionsList}
      </div>

    );
  }

}


