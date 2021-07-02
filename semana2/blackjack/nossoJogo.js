/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 */
//1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//3 -  Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
//4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 


const boasVindas = ("Boas vindas ao jogo de Blackjack!")
console.log(boasVindas)

if(confirm("Quer iniciar uma nova rodada?")) {
   const carta = comprarCarta(); 

      console.log(carta.texto) 
      console.log(carta.valor) 

      const cartasUsuario = [comprarCarta(), comprarCarta(),]
      const somaCartasUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
      console.log ( `Usuário cartas ${cartasUsuario[0].texto} , ${cartasUsuario[1].texto} - pontuação ${somaCartasUsuario}`)

      const cartasComputador = [comprarCarta(), comprarCarta(),]
      const somacartasComputador = cartasComputador[0].valor + cartasComputador[1].valor
      console.log ( `Computador cartas ${cartasComputador[0].texto} , ${cartasComputador[1].texto} - pontuação ${somacartasComputador}`)
      
      if (somaCartasUsuario > somacartasComputador){
         console.log ("O usuário ganhou!")
         } else if ( somaCartasUsuario < somacartasComputador){
         console.log ("O computador ganhou")
               } else if ( somaCartasUsuario === somacartasComputador){
         console.log ("Empate!")
      }
	   }
      
 else {
   console.log ("O jogo acabou")
}
