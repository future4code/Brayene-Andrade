import React, {useState, useEffect} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"



const App = () => {
 
 const [telaAtual, setTelaAtual] = useState ("home")
  
 const escolherTela = () => {
   switch (telaAtual) {
     case "home":
     return <HomePage/>
     case "matches":
       return <MatchesPage/>
       default:
         return <HomePage/>
   }
 }

  const irParaHome = () => {
   setTelaAtual ("home")

 }
 const irParaMatches = () => {
   setTelaAtual ("matches")
}

  return (
    <div>
      {escolherTela()}
      <button onClick={irParaHome}>Home</button>
      <button onClick={irParaMatches}>Match</button>

     </div>
    )
    
  }

export default App