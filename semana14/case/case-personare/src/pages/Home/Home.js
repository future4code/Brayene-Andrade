import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { GeneralContainer } from './styled'


const Home = () => {
    const [cartas,setCartas] = useState([])
    console.log(cartas)
    
    const baralhoCompleto = (() => {

        axios.get("/tarot.json")
        .then ((res) => {
            console.log(res.data)
            setCartas(res.data.cards)
        })
        .catch((err) => {
            setCartas(err.data)
        })
    
    
    
    })
    useEffect(() => {
        baralhoCompleto()
    }, [])

    return (
        <GeneralContainer>
            <h1>Olá, tarólogos</h1>
            <button> Iniciar </button>
        </GeneralContainer>
    )
}
export default Home