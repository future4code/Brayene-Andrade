import React from "react"
import Header from "../../components/Header"
import UseGetPopular from "../../router/useGetPopular"


const Home = () => {
    return (
        <div>
            <Header/>
            <UseGetPopular/>
        </div>
    )
}

export default Home