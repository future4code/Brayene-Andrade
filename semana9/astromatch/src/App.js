import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"

const App = () => {
  //Renderização condicional - aula de revisão da quinta feira 
  //Estado que diz qual é a tela que está aparecendo
  // Função que muda tela

  
  return (
    <div>
      Astromatch
      <HomePage /> 
      <MatchesPage />
     </div>
    )
}

export default App