import React from "react"
import Header from "../../components/Header"
import UseGetPopular from "../../routes/useGetPopular"
import { GeneralContainer } from "./styled"


const Home = () => {
    return (
        <div>
           <Header/>
            <GeneralContainer>
                <UseGetPopular/>
            </GeneralContainer>
        </div>
    )
}

export default Home